

//global VARS
//var _web3;
//var _lastBlock;
//watch change balance on contracts
// Additionally you can start watching right away, by passing a callback:
/*
options = { address: "0x"};
web3.eth.filter(options, function(error, result){
  if (!error)
    console.log(result);
});*/


function x04(err,val) {
  console.log(val);
}

function compra(id){
  console.log("buying " +id );
  var contractData=contractsData[id];
  console.log(contractData);
  var eth=web3.eth;
  console.log("eth=" + eth);
  var contract=eth.contract(CONTRACTS_ABI).at(id);
  var foundOneUnlocked=false;
  var lastErrMessage;
  for(var a=0;a<eth.accounts.length;a++) {
    try {
      if(ref) {
        var val=contract.buyTicket(ref,{from: eth.accounts[a], to: id, value: contractData.price.wei, gas:200000, gasPrice:20000000000 })
      } else {
        var val=eth.sendTransaction({from: eth.accounts[a], to: id, value: contractData.price.wei, gas:200000, gasPrice:20000000000 });
      }
      console.log(val);
      foundOneUnlocked=true;
      break;
    } catch(err) {
      console.log("account " + a + ") " +  err);
      lastErrMessage=err;
    }
  }
  if(foundOneUnlocked) {
    $.Notify({type: 'success', caption: 'Success', content: "Ticket bought!"});
  } else {
    //$('#err'+ id).html(err.message);
    var content;
    if(lastErrMessage="could not unlock signer account") {
      content = lastErrMessage + ' <a href="/faq#couldnotunlock">*</a>';
    } else {
      content = lastErrMessage;
    }
    $.Notify({type: 'alert', caption: 'Alert', content: content });
  }
}
function qr(id){
  $('#qrimg').attr("src","");
  $('#qrimg').attr("src","https://chart.googleapis.com/chart?chs=280x280&cht=qr&chl="+id);
  $('#qraddress').html('<span class="tag">' + id + "</span>");
  var dialog = $('#qrdialog').data('dialog');
  dialog.open();
}
function showDialog(id){
  var dialog = $('#dialog' + id).data('dialog');
  dialog.open();
  loadTable(id);
}

function createWinnerRow(winnerData) {
  return '<tr><td>' + new Date(winnerData.timestamp*1000).toLocaleString() + '</td><td>' + winnerData.winner + '</td><td class="align-right">' + winnerData.jackpot.ether + ' ether</td></tr>';
}

function createProvisionalWinnerRow(winnerData) {
  return '<tr class="opacity7"><td>not finalized</td><td>' + winnerData.winner + '</td><td class="align-right">' + winnerData.jackpot.ether + ' ether</td></tr>';
}

function extractWinnerData(web3,data) {
  var val=data.substring(2);
  var winnerHex=val.substring(0,64);
  var jackpotHex=val.substring(64,128);
  var timestampHex=val.substring(128,192);
  var winner="0x"+ winnerHex.substring(24);
  var jackpot={};
  jackpot['wei']=new BigNumber(jackpotHex, 16).toNumber();
  jackpot['ether']=web3.fromWei(jackpot['wei'],"ether")*1;
  var timestamp =new BigNumber(timestampHex, 16).toNumber();
  return {winner:winner, jackpot:jackpot, timestamp:timestamp}
}

function checkCookie() {
  var cookieRef=getCookie("ref");
  if(cookieRef) {
    ref=cookieRef;
  } else {
    console.log("there is no ref cookie");
  }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function checkRef() {
  var address=getParameterByName("r");
  if(address) {
    console.log("ref is present " + address);

    if(web3.isAddress(address)) {
      console.log("ref address is " + address);
      ref=address;
      setCookie("ref",ref,30);
      return;
    }

    console.log("location address isn't valid ethereum address, deleting cookie");
    setCookie("ref","",-1); //deleting cookie

  } else {
    console.log("query string hash is undefined");
  }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function loadTable(contract) {
  var contractData=contractsData[contract];
  var table=$('#ptablebody' + contract);
  table.empty();
  if(contractData.notStarted) {
    table.append('<tr><td>Not started yet</td></tr>');
  } else {
    table.append(createProvisionalWinnerRow({winner: contractData.lastPlayer , jackpot: { ether: contractData.jackpot.ether } }));
    var t = contractData.totalWinners;
    var batch = web3.createBatch();
    var promises = [];
    var i = t-1;
    while(i>=0 && promises.length<5) {
      var p = getWinnerBatchPromise(web3,batch,contract,i);
      promises.push(p);
      i--;
    }
    Promise.all(promises).then(function(data) {

      for (var i = 0; i < data.length; i++) {
        var c=data[i];
        var winnerData=extractWinnerData(web3,c.winner);
        console.log(winnerData);
        table.append(createWinnerRow(winnerData));
      }

    }).catch(function(err) {
      console.log("err=" + err);
    });
    batch.execute();
  }

}

function initProvider() {
  return new Promise(function (resolve, reject) {
    var promises=[];
    var providersShuffled=shuffle(WEB3_PROVIDERS);
    for (var i = 0; i < providersShuffled.length; i++) {
      var provider=providersShuffled[i];
      var promise=getLastBlockPromise(provider);
      promises.push(promise);
    }

    console.log(providersShuffled);
    Promise.all(promises.map(softFail)).then(function(arrayOfResults) {
      console.log(arrayOfResults);
      var providersBlock = {};

      var blocks = [];
      for (var i = 0; i < providersShuffled.length; i++) {
        try {
          var block=parseInt(JSON.parse(arrayOfResults[i].response).result,16);
          var elapsed=arrayOfResults[i].elapsed;
          blocks.push(block);
          providersBlock[providersShuffled[i]]={block:block,elapsed:elapsed};
        } catch(err) {
        }
      }
      console.log(providersBlock);
      blocks.sort(sortNumber);
      console.log(blocks);
      var medianIndex=Math.floor(blocks.length/2.001);
      var consideredSynced=blocks[medianIndex]; //considering median value as good approx
      console.log("consideredSynced " + consideredSynced);
      var resolved=false;
      if(typeof web3 !== 'undefined') {
          console.log("using mist...");
          //web3 = new Web3(web3.currentProvider);
      }
      if(LOCAL_PROVIDER in providersBlock) {
        var localBlock=providersBlock[LOCAL_PROVIDER].block;
        console.log("localhost available, block is " + localBlock);
        if( Math.abs(localBlock-consideredSynced)<DISTANCE_SYNCED ) {
          console.log("localhost is synced ");

          var web3=new Web3(new Web3.providers.HttpProvider(LOCAL_PROVIDER));
          resolved=true;
          resolve(
            {
              web3: web3,
              lastBlock: localBlock
            }
          );
        } else {
          console.log("localhost is not synced");
        }
      }

      for (var key in providersBlock) {
        if(!resolved) {
          var current = providersBlock[key].block;
          if( Math.abs(current-consideredSynced)<DISTANCE_SYNCED ) {
            console.log(key + " is synced ");
            var web3=new Web3(new Web3.providers.HttpProvider(key));
            resolved=true;
            resolve(
              {
                web3: web3,
                lastBlock: current
              }
            );
          }
        }
      }

      //reject("error");
    });  //Promise.all
  });

}



function sortNumber(a,b) {
    return b - a ;
}


function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function getStorageAtPromise(web3,contract,addr) {
  return new Promise(function(resolve,reject) {
    web3.eth.getStorageAt(contract, addr, 'latest', function(err,data) {
      resolve(data);
    });
  });
}

function getBalancePromise(web3,address) {
  return new Promise(function(resolve,reject) {
    web3.eth.getBalance(address, function(err,data) {
      if(err) {
        reject(err);
      } else {
        resolve({contract: address, balance: data.toNumber()});
      }
    });
  });
}

function getRemainingPromise(contract) {
  return new Promise(function(resolve,reject) {
    contract.remaining(function(err,data) {
      if(err) {
        reject(err);
      } else {
        resolve({contract:contract.address, remaining: data.toNumber()});
      }
    });
  });
}


function getOwnerPromise(contract) {
  return new Promise(function(resolve,reject) {
    contract.owner(function(err,data) {
      if(err) {
        reject(err);
      } else {
        resolve({contract:contract.address, owner: data});
      }
    });
  });
}

function getLastPlayerPromise(contract) {
  return new Promise(function(resolve,reject) {
    contract.lastPlayer(function(err,data) {
      if(err) {
        reject(err);
      } else {
        resolve({contract:contract.address, lastPlayer: data});
      }
    });
  });
}

function getBlockPromise(contract) {
  return new Promise(function(resolve,reject) {
    contract.blocks(function(err,data) {
      if(err) {
        reject(err);
      } else {
        resolve({contract:contract.address, blocks: data.toNumber()});
      }
    });
  });
}

function getPricePromise(contract) {
  return new Promise(function(resolve,reject) {
    contract.price(function(err,data) {
      if(err) {
        reject(err);
      } else {
        resolve({contract:contract.address, price: data.toNumber()});
      }
    });
  });
}

function getBalanceBatchPromise(web3,batch,contract) {
  return new Promise(function(resolve,reject) {
    var request = web3.eth.getBalance.request(contract, 'latest',
      function(err,data) { resolve({contract:contract, balance:data }); }
    );
    batch.add(request);
  });
}

function getStorageAtBatchPromise(web3,batch,contract,address) {
  return new Promise(function(resolve,reject) {
    var request = web3.eth.getStorageAt.request(contract, address, 'latest',
      function(err,data)  { resolve({contract:contract, data:data}); }
    );
    batch.add(request);
  });
}

function getLastPlayerBatchPromise(web3,batch,contract) {
  return new Promise(function(resolve,reject) {
    var data={to:contract, data: padRight('0xe3450e13') };  //web3.sha3("lastPlayer()")
    //console.log("web3.eth.call(" + JSON.stringify(data) + ");");
    var request = web3.eth.call.request(
      data,
       'latest',
      function(err,data) { resolve({contract:contract, lastPlayer: data }); }
    );
    batch.add(request);
  });
}

function getPriceBatchPromise(web3,batch,contract) {
  return new Promise(function(resolve,reject) {
    var data={to:contract, data: padRight('0xa035b1fe') };  //web3.sha3("price()")
    //console.log("web3.eth.call(" + JSON.stringify(data) + ");");
    var request = web3.eth.call.request(
      data,
       'latest',
      function(err,data) { resolve({contract:contract, price: data }); }
    );
    batch.add(request);
  });
}

function getBlocksBatchPromise(web3,batch,contract) {
  return new Promise(function(resolve,reject) {
    var data={to:contract, data: padRight('0x967ff23e') };  //web3.sha3("blocks()")
    //console.log("web3.eth.call(" + JSON.stringify(data) + ");");
    var request = web3.eth.call.request(
      data,
       'latest',
      function(err,data) { resolve({contract:contract, blocks: data }); }
    );
    batch.add(request);
  });
}


function getTotalWinningBatchPromise(web3,batch,contract) {
  return new Promise(function(resolve,reject) {
    var data={to:contract, data: padRight('b72481f8') };  //web3.sha3("totalWinnings()")
    //console.log("web3.eth.call(" + JSON.stringify(data) + ");");
    var request = web3.eth.call.request(
      data,
       'latest',
      function(err,data) { resolve({contract:contract, totalWinnings: data }); }
    );
    batch.add(request);
  });
}

function getJackpotBatchPromise(web3,batch,contract) {
  return new Promise(function(resolve,reject) {
    var data = {to:contract, data: padRight('0x6b31ee01') };  //web3.sha3("jackpot()")
    //console.log("web3.eth.call(" + JSON.stringify(data) + ");");
    var request = web3.eth.call.request(
        data,
       'latest',
      function(err,data) { resolve({contract:contract, jackpot: data }); }
    );
    batch.add(request);
  });
}


function getRemainingBatchPromise(web3,batch,contract) {
  return new Promise(function(resolve,reject) {
    var data = {to:contract, data: padRight('0x55234ec0') };  //web3.sha3("remaining()")
    //console.log("web3.eth.call(" + JSON.stringify(data) + ");");
    var request = web3.eth.call.request(
        data,
       'latest',
      function(err,data) { resolve({contract:contract, remaining: data }); }
    );
    batch.add(request);
  });
}

function getWinnerBatchPromise(web3,batch,contract,i) {
  return new Promise(function(resolve,reject) {
    var data = {to:contract, data:'0xa2fb1175' + pad(i.toString(16),64) };
    console.log("web3.eth.call(" + JSON.stringify(data) + ");");
    var request = web3.eth.call.request(
      data,  //web3.sha3("winners(uint256)")
       'latest',
      function(err,data) { resolve({contract:contract, winner: data }); }
    );
    batch.add(request);
  });
}

function getTotalWinnerBatchPromise(web3,batch,contract) {
  return new Promise(function(resolve,reject) {
    var request = web3.eth.call.request(
      {to:contract, data: padRight('0xbcc941b6') },  //web3.sha3("totalWinners()")
       'latest',
      function(err,data) { resolve({contract:contract, totalWinners: data }); }
    );
    batch.add(request);
  });
}

function getContractDataPromiseAllData(web3,contractAddress) {  //TODO call allData instead
  return new Promise(function(resolve,reject) {
    var contract=web3.eth.contract(CONTRACTS_ABI).at(contractAddress);
    var dataArray=contract.allData();
    var dataAssoc={};
    dataAssoc['balance']       = dataArray[0].toNumber();
    dataAssoc['lastPlayer']    = dataArray[1];
    dataAssoc['lastBlock']     = dataArray[2].toNumber();
    dataAssoc['blockNumber']   = dataArray[3].toNumber();
    dataAssoc['winnersLength'] = dataArray[4].toNumber();
    dataAssoc['jackpot']       = dataArray[5].toNumber();
    dataAssoc['price']         = dataArray[6].toNumber();
    dataAssoc['blocks']        = dataArray[7].toNumber();
    dataAssoc['houseFee']      = dataArray[8].toNumber();
    dataAssoc['lotteryFee']    = dataArray[9].toNumber();
    dataAssoc['leftLottery']   = dataArray[10];
    dataAssoc['rightLottery']  = dataArray[11];
    dataAssoc['totalWinnings'] = dataArray[12].toNumber();
    dataAssoc['startedAt']     = dataArray[13].toNumber();

    resolve({contract: contractAddress, data: dataAssoc});
  });
}
function getContractDataPromiseBatch(web3,contractAddress) {  //TODO call allData instead
  var batch = web3.createBatch();

  var balanceBatchPromise       = getBalanceBatchPromise(web3,batch,contractAddress);
  var lastPlayerBatchPromise    = getLastPlayerBatchPromise(web3,batch,contractAddress);
  var remainingBatchPromise     = getRemainingBatchPromise(web3,batch,contractAddress);
  var totalWinnerBatchPromise   = getTotalWinnerBatchPromise(web3,batch,contractAddress);
  var jackpotBatchPromise       = getJackpotBatchPromise(web3,batch,contractAddress);
  var priceBatchPromise         = getPriceBatchPromise(web3,batch,contractAddress);
  var blocksBatchPromise        = getBlocksBatchPromise(web3,batch,contractAddress);
  var totalWinningsBatchPromise = getTotalWinningBatchPromise(web3,batch,contractAddress);

  batch.execute();
  return Promise.all([balanceBatchPromise, lastPlayerBatchPromise, remainingBatchPromise,
    totalWinnerBatchPromise, jackpotBatchPromise,priceBatchPromise, blocksBatchPromise, totalWinningsBatchPromise]);
}

function getContractDataPromise(web3,contractAddress) {
  var promises=[];
  var contract=web3.eth.contract(CONTRACTS_ABI).at(contractAddress);
  promises.push(getBalancePromise(web3, contractAddress));
  //promises.push(getOwnerPromise(contract));
  promises.push(getLastPlayerPromise(contract));
  //promises.push(getBlockPromise(contract));
  //promises.push(getPricePromise(contract));
  promises.push(getRemainingPromise(contract));
  return Promise.all(promises);
}

function isLocal(web3) {
  var myhost=web3.currentProvider.host;
  if(myhost.indexOf("localhost")>-1) {
    return true;
  }
  return false;
}
function getContractsPromisesAllData(initPromise) {
  return new Promise(function(resolve,reject) {
    initPromise.then(function(data) {
      var web3=data.web3;
      var contractsPromise=[]
      for (var i = 0; i < MY_CONTRACTS.length; i++) {
        var currentAddress = MY_CONTRACTS[i];
        var contractPromise = getContractDataPromiseAllData(web3,currentAddress);
        contractsPromise.push(contractPromise);
      }
      resolve(contractsPromise);
    });
  });
}
function getContractsPromises(initPromise) {
  return new Promise(function(resolve,reject) {
    initPromise.then(function(data) {
      var web3=data.web3;
      var contractsPromise=[]
      for (var i = 0; i < MY_CONTRACTS.length; i++) {
        var currentAddress = MY_CONTRACTS[i];
        var contractPromise = getContractDataPromiseBatch(web3,currentAddress);
        contractsPromise.push(contractPromise);
      }
      resolve(contractsPromise);
    });
  });

}

function createIdenticon(element,address) {
  var image = blockies.create({
    seed: address,
    size: 8,
    scale: 16
  }).toDataURL();
  //element.attr("src", image);
  var url = 'url(' + image + ')';
  element.css("background-image", url);
}

function getLastBlockPromise(url) {
  var params = JSON.stringify({jsonrpc:"2.0",method:"eth_blockNumber",params:[],id:1});
  return makeRequest({
    method:"POST",
    url:url,
    params: params,
    timeout: 1500
  });
}

function getStatsPromise() {
  return new Promise(function(resolve,reject) {
    var etherScanPromise= getEtherScanPromise();
    var etherStatsPromise = getEtherStatsPromise();
    etherStatsPromise.then( function(data) {
        resolve(data);
      }
    ).catch( function(err) {
        etherScanPromise.then( function(data) {
          resolve(data);
        }).catch( function(err) {
          reject(err);
        })
      }
    );
  });
}

function getEtherScanPromise() {
  return new Promise(function(resolve,reject) {
    var req = makeRequest({
      method:"GET",
      url:"https://api.etherscan.io/api?module=stats&action=ethprice",
      timeout: 3000
      }
    );
    req.then(function(data) {  //fallback if etherscan does not work
      var ethStats  = JSON.parse(data.response);
      var price = ethStats.result.ethusd * 1.0;
      var stats = {blockTime: 14, price:price};  //using default block time
      resolve(stats);
      console.log(ethStats);
    }).catch(function(err) {
      reject(err);
    });
  });
}

function getEtherStatsPromise() {
  return new Promise(function(resolve,reject) {
    var req = makeRequest({
      method:"GET",
      url:"https://www.etherchain.org/api/basic_stats",
      timeout: 3000
      }
    );
    req.then(function(data) {
      var ethStats  = JSON.parse(data.response);
      var blockTime = ethStats.data.stats.blockTime;
      var price     = ethStats.data.price.usd;
      var stats = {blockTime: blockTime, price:price};
      resolve(stats);
    }).catch(function(err) {
      reject(err);
    });
  });
}

var printCallback = {
  success : function(data){
     console.log(1, 'success', data);
  },
  error : function(data){
     console.log(2, 'error', data);
  }
};



function softFail(promise) {
  return new Promise(function(resolve, reject) {
    promise
    .then(resolve)
    .catch(resolve)
  })
}

function makeRequest (opts) {
  return new Promise(function (resolve, reject) {
    var now = Date.now();
    var xhr = new XMLHttpRequest();
    xhr.timeout= opts.timeout || 5000;
    xhr.open(opts.method, opts.url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        var data = {};
        data['response']= xhr.response;
        data['elapsed'] = Date.now() - now;
        resolve(data);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
          m: "statusNot200",
          opts: opts,
          elapsed : Date.now() - now
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
        m: "error",
        opts: opts,
        elapsed : Date.now() - now
      });
    };
    xhr.ontimeout = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
        m: "timeout",
        opts: opts,
        elapsed : Date.now() - now
      });
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }
    var params = opts.params;
    // We'll need to stringify if we've been given an object
    // If we have a string, this is skipped.
    if (params && typeof params === 'object') {
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }
    xhr.send(params);
  });
}

function normalize(web3,data,stats) {
  var ndata = {};
  ndata['stats']=stats;

  ndata['contract']=data.contract;
  var current=data.data;
  //if(current.balance) {
    var balance={};
    balance['wei']=current.balance;
    var ether=web3.fromWei(balance['wei'],"ether")*1;
    balance['ether']=ether;
    var dollar = ether * stats.price;
    balance['dollar']=dollar;
    ndata['balance']=balance;
  //} else if(current.remaining || current.remaining==0) {
    var remaining={};
    var elapsed=current.blockNumber-current.lastBlock;
    var r = (elapsed<current.blocks) ? current.blocks - elapsed : 0;

    remaining['blocks']=r;
    var sec_num = remaining.blocks * stats.blockTime;
    remaining['totalSeconds']=sec_num;
    var hours   = Math.floor(sec_num / 3600);
    remaining['hours']=hours;
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    remaining['minutes']=minutes;
    var seconds = Math.floor( sec_num - (hours * 3600) - (minutes * 60) );
    remaining['seconds']=seconds;
    ndata['remaining']=remaining;
  //} else if(current.lastPlayer) {
    ndata['lastPlayer']=current.lastPlayer;
    ndata['notStarted']=(new BigNumber(ndata['lastPlayer'],16).toNumber()==0)
  //} else if(current.totalWinners || current.totalWinners==0) {
    ndata['totalWinners']=current.winnersLength;
  //} else if(current.jackpot || current.jackpot==0) {
    var jackpot={};
    jackpot['wei']=current.jackpot;
    var ether=web3.fromWei(jackpot['wei'],"ether")*1;
    jackpot['ether']=ether;
    var dollar = ether * stats.price;
    jackpot['dollar']=dollar;
    ndata['jackpot']=jackpot;
  //} else if(current.price) {
    var price = {};
    price['wei']=current.price;
    var ether=web3.fromWei(price['wei'],"ether")*1;
    price['ether']=ether;
    var dollar = ether * stats.price;
    price['dollar']=dollar;
    ndata['price']=price;
  //} else if(current.blocks) {
    var blocks = {};
    blocks['number']=current.blocks;
    blocks['duration']=blocks['number']*stats.blockTime;
    ndata['blocks']=blocks;
  //} else if(current.totalWinnings) {
    var totalWinnings = {};
    totalWinnings['wei']=current.totalWinnings;
    var ether=web3.fromWei(totalWinnings['wei'],"ether")*1;
    totalWinnings['ether']=ether;
    var dollar = ether * stats.price;
    totalWinnings['dollar']=dollar;
    ndata['totalWinnings']=totalWinnings;
  //}

  return ndata;
}

function padRight(a) {
  return a + pad("",64);
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function askArray(contractAddress, arrayAddress, from, to ) {
    console.log(contractAddress);

    var hashObj = CryptoJS.SHA3(arrayAddress, { outputLength: 256 });
    var hashString = hashObj.toString(CryptoJS.enc.Hex);
    var hashSubstring = hashString.substr(0,8);
    console.log(arrayAddress + ":" + hashSubstring);
    var request=[];
    for(var i =from ; i<to ; i ++ ){
        var fromHex = i.toString(16);
        var address = hashSubstring + pad(fromHex,64);
        var eth_call =  { jsonrpc: "2.0" , method:"eth_call", params: [ { to: contractAddress, data: address  } , "latest"]  , id:i };
        request.push(eth_call);

    }

    return request;
}
