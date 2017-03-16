/* Build fingerprint: 4c2bd974c93b97a6d8e8ca2409ea625e */
//GLOBAL CONSTANTS
var LOCAL_PROVIDER="http://localhost:8545";
var WEB3_PROVIDERS=[LOCAL_PROVIDER];
var DISTANCE_SYNCED=3;
var CONTRACTS_ABI=[ { "constant": true, "inputs": [], "name": "houseFee", "outputs": [ { "name": "", "type": "uint256", "value": "10", "displayName": "" } ], "type": "function", "displayName": "house Fee" }, { "constant": false, "inputs": [ { "name": "_newValue", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;new Value", "template": "elements_input_address" } ], "name": "updateLeftLottery", "outputs": [], "type": "function", "displayName": "update Left Lottery" }, { "constant": true, "inputs": [], "name": "houseFeeVal", "outputs": [ { "name": "", "type": "uint256", "value": "100000000000000", "displayName": "" } ], "type": "function", "displayName": "house Fee Val" }, { "constant": true, "inputs": [], "name": "elapsed", "outputs": [ { "name": "", "type": "uint256", "value": "1330162", "displayName": "" } ], "type": "function", "displayName": "elapsed" }, { "constant": false, "inputs": [], "name": "finance", "outputs": [], "type": "function", "displayName": "finance" }, { "constant": true, "inputs": [], "name": "baseData", "outputs": [ { "name": "_balance", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>balance" }, { "name": "_lastPlayer", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "<span class=\"punctuation\">_</span>last Player" }, { "name": "_lastBlock", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>last Block" }, { "name": "_blockNumber", "type": "uint256", "value": "1330162", "displayName": "<span class=\"punctuation\">_</span>block Number" }, { "name": "_totalWinners", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>total Winners" }, { "name": "_jackpot", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>jackpot" }, { "name": "_price", "type": "uint256", "value": "10000000000000000", "displayName": "<span class=\"punctuation\">_</span>price" }, { "name": "_blocks", "type": "uint256", "value": "10", "displayName": "<span class=\"punctuation\">_</span>blocks" }, { "name": "_totalWinnings", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>total Winnings" }, { "name": "_startedAt", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>started At" } ], "type": "function", "displayName": "base Data" }, { "constant": false, "inputs": [ { "name": "_newValue", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;new Value", "template": "elements_input_uint" } ], "name": "setLotteryFee", "outputs": [], "type": "function", "displayName": "set Lottery Fee" }, { "constant": true, "inputs": [], "name": "remaining", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "remaining" }, { "constant": false, "inputs": [ { "name": "_newValue", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;new Value", "template": "elements_input_uint" } ], "name": "setHouseFee", "outputs": [], "type": "function", "displayName": "set House Fee" }, { "constant": true, "inputs": [], "name": "jackpot", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "jackpot" }, { "constant": true, "inputs": [], "name": "lotteryFee", "outputs": [ { "name": "", "type": "uint256", "value": "40", "displayName": "" } ], "type": "function", "displayName": "lottery Fee" }, { "constant": true, "inputs": [], "name": "lastBlock", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "last Block" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x6f4250b4c1db1b611e43cbd9a04c4138c7c0af39", "displayName": "" } ], "type": "function", "displayName": "owner" }, { "constant": true, "inputs": [], "name": "blocks", "outputs": [ { "name": "", "type": "uint256", "value": "10", "displayName": "" } ], "type": "function", "displayName": "blocks" }, { "constant": true, "inputs": [], "name": "price", "outputs": [ { "name": "", "type": "uint256", "value": "10000000000000000", "displayName": "" } ], "type": "function", "displayName": "price" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "", "template": "elements_input_uint" } ], "name": "winners", "outputs": [ { "name": "winner", "type": "address", "value": "0x", "displayName": "winner" }, { "name": "jackpot", "type": "uint256", "value": "0", "displayName": "jackpot" }, { "name": "timestamp", "type": "uint256", "value": "0", "displayName": "timestamp" } ], "type": "function", "displayName": "winners" }, { "constant": false, "inputs": [ { "name": "_ref", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;ref", "template": "elements_input_address" } ], "name": "buyTicket", "outputs": [], "type": "function", "displayName": "buy Ticket" }, { "constant": true, "inputs": [], "name": "leftLottery", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "" } ], "type": "function", "displayName": "left Lottery" }, { "constant": true, "inputs": [], "name": "lotteryFeeVal", "outputs": [ { "name": "", "type": "uint256", "value": "400000000000000", "displayName": "" } ], "type": "function", "displayName": "lottery Fee Val" }, { "constant": false, "inputs": [ { "name": "_newValue", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;new Value", "template": "elements_input_address" } ], "name": "updateRightLottery", "outputs": [], "type": "function", "displayName": "update Right Lottery" }, { "constant": true, "inputs": [], "name": "totalWinnings", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "total Winnings" }, { "constant": true, "inputs": [], "name": "allData", "outputs": [ { "name": "_balance", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>balance" }, { "name": "_lastPlayer", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "<span class=\"punctuation\">_</span>last Player" }, { "name": "_lastBlock", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>last Block" }, { "name": "_blockNumber", "type": "uint256", "value": "1330162", "displayName": "<span class=\"punctuation\">_</span>block Number" }, { "name": "_totalWinners", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>total Winners" }, { "name": "_jackpot", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>jackpot" }, { "name": "_price", "type": "uint256", "value": "10000000000000000", "displayName": "<span class=\"punctuation\">_</span>price" }, { "name": "_blocks", "type": "uint256", "value": "10", "displayName": "<span class=\"punctuation\">_</span>blocks" }, { "name": "_houseFee", "type": "uint256", "value": "10", "displayName": "<span class=\"punctuation\">_</span>house Fee" }, { "name": "_lotteryFee", "type": "uint256", "value": "40", "displayName": "<span class=\"punctuation\">_</span>lottery Fee" }, { "name": "_leftLottery", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "<span class=\"punctuation\">_</span>left Lottery" }, { "name": "_rightLottery", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "<span class=\"punctuation\">_</span>right Lottery" }, { "name": "_totalWinnings", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>total Winnings" }, { "name": "_startedAt", "type": "uint256", "value": "0", "displayName": "<span class=\"punctuation\">_</span>started At" } ], "type": "function", "displayName": "all Data" }, { "constant": true, "inputs": [], "name": "totalWinners", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "total Winners" }, { "constant": true, "inputs": [], "name": "rightLottery", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "" } ], "type": "function", "displayName": "right Lottery" }, { "constant": true, "inputs": [], "name": "refFeeVal", "outputs": [ { "name": "", "type": "uint256", "value": "50000000000000", "displayName": "" } ], "type": "function", "displayName": "ref Fee Val" }, { "constant": true, "inputs": [], "name": "lastPlayer", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "" } ], "type": "function", "displayName": "last Player" }, { "constant": true, "inputs": [], "name": "startedAt", "outputs": [ { "name": "", "type": "uint256", "value": "0", "displayName": "" } ], "type": "function", "displayName": "started At" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "new Owner", "template": "elements_input_address" } ], "name": "transferOwnership", "outputs": [], "type": "function", "displayName": "transfer Ownership" }, { "inputs": [ { "name": "_priceParam", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;price Param", "template": "elements_input_uint", "value": "10000000000000000" }, { "name": "_blocksParam", "type": "uint256", "index": 1, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;blocks Param", "template": "elements_input_uint", "value": "10" } ], "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "_from", "type": "address" } ], "name": "TicketBought", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "_winner", "type": "address" }, { "indexed": false, "name": "_from", "type": "address" } ], "name": "WinnerPayedTicketBought", "type": "event" } ]



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
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader("Content-type", "application/json")
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


var statsPromise      = getStatsPromise();
var initPromise       = initProvider();
//var contractsPromises = getContractsPromises(initPromise);
var contractsPromises = getContractsPromisesAllData(initPromise);
var contractsAndStats = Promise.all([statsPromise,contractsPromises]);
var contractsData = {}
var web3;
var ref;
var attached=false;


function refresh() {
  console.log("refreshing");
  statsPromise      = getStatsPromise();
  initPromise       = initProvider();
  contractsPromises = getContractsPromisesAllData(initPromise);
  contractsAndStats = Promise.all([statsPromise,contractsPromises]);
  contractsData = {}
  draw();
}

function draw() {
  initPromise.then(function(data) {
    web3=data.web3;
    var lastBlock=data.lastBlock;

    checkRef();
    console.log("ref after checking query string " + ref);
    checkCookie();
    console.log("ref after checking cookie " + ref);


    $(".identicon").each(function() {
      var element = $( this );
      var dataAddress = element.attr("data-address");
      if(dataAddress) {
        var address = dataAddress.toLowerCase();
        createIdenticon(element,address);
      }

    });


    if(isLocal(web3)) {
      $(".hideiflocal").hide();
    } else {
      $(".hideifremote").hide();
    }
    $("#blockNumber").html(lastBlock);
    var myhost=web3.currentProvider.host;
    $("#provider").html(myhost);

    contractsAndStats.then( function(dataArray) {
      var stats=dataArray[0];
      var contractsPromises=dataArray[1];
      var totalPreviousWinnings=0;

      for (var j = 0; j < contractsPromises.length; j++) {
        var current = contractsPromises[j];
        current.then( function(data) {
          var ndata=normalize(web3,data,stats);
          console.log(ndata);
          var contract = ndata.contract;
          contractsData[contract] = ndata;

          var dollarBalance = ndata.balance.dollar;
          var dollarJackpot = ndata.jackpot.dollar;
          var etherBalance  = ndata.balance.ether;
          var etherJackpot  = ndata.jackpot.ether;

          var countdown = $("#countdown" + contract);
          var pcountdown = $("#pcountdown" + contract);
          var r = ndata.remaining;
          var o = {hours:r.hours,minutes:r.minutes,seconds:r.seconds}
          var called=false;
          if(ndata.remaining.totalSeconds>0) {
            o.onStop= function() {
              if(!called) {
                called=true;
                refresh();
              }
            };
          }
          if(countdown.data("countdown")!=null)
            countdown.countdown("destroy");
          countdown.countdown(o);
          if(pcountdown.data("countdown")!=null)
            pcountdown.countdown("destroy");
          pcountdown.countdown(o);

          var price = ndata.price.dollar.toFixed(2) ;
          var etherprice = ndata.price.ether.toFixed(2);
          $("#price" + contract).html(price);
          $("#pprice" + contract).html(price);

          $("#petherprice" + contract).html(etherprice);
          $("#petherprice2" + contract).html(etherprice);
          $("#petherprice3" + contract).html(etherprice);

          var blockstime  = $("#blockstime" + contract);
          var pblockstime = $("#pblockstime" + contract);
          var seconds = ndata.blocks.number * ndata.stats.blockTime;
          //var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
          var numhours = Math.round(seconds / 3600);
          if(numhours>0) {
            blockstime.html( numhours + " hour" + (numhours>1 ? "s" : "") );
            pblockstime.html( numhours + " hour" + (numhours>1 ? "s" : "") );
          } else {
            var numminutes = Math.round((((seconds % 31536000) % 86400) % 3600) / 60);
            blockstime.html( numminutes + " minute" + (numminutes>1 ? "s" : "") );
            pblockstime.html( numminutes + " minute" + (numminutes>1 ? "s" : "") );
          }
          $("#pblocks" + contract).html( ndata.blocks.number + " blocks");



          var element = $('#identicon' + contract);
          var winner  = $('#winner' + contract );
          var blocksRemaining = ndata.remaining.blocks;
          if(blocksRemaining>0) {
            $('#premainingblocks' + contract ).html( " ( " + blocksRemaining + " block" + (blocksRemaining>1 ? "s" : "") + " )" );
          }

          var noLast = ndata.notStarted;
          if(noLast) {
            element.hide();
            winner.html("Not started yet");
            $('#jackpot' + contract ).html( dollarBalance.toFixed(2)  );
            $('#pjackpot' + contract ).html( dollarBalance.toFixed(2)  );
            $('#pjackpotether' + contract ).html( etherBalance.toFixed(3)  );
          } else {
            createIdenticon(element,ndata.lastPlayer);
            if(blocksRemaining==0) {
              winner.html("won " + '<span class="icon mif-dollar2 v-align-bottom"></span> ' + '<span class="v-align-bottom">' +ndata.jackpot.dollar.toFixed(2) + '</span> <a href="faq/#stilldidntreceive">*</a>'   );
              var jp=(dollarBalance-dollarJackpot).toFixed(2);
              $('#jackpot' + contract ).html( jp );
              $('#pjackpot' + contract ).html( jp );
              $('#pjackpotether' + contract ).html( (etherBalance-etherJackpot).toFixed(3) );
            } else {
              winner.html("is going to win");
              $('#jackpot' + contract ).html( dollarBalance.toFixed(2)  );
              $('#pjackpot' + contract ).html( dollarBalance.toFixed(2)  );
              $('#pjackpotether' + contract ).html( etherBalance.toFixed(3)  );
            }

            if(ndata.totalWinnings.wei>0) {
              $('#previousWinnings' + contract).html('<div class="opacity7">previous winnings $ ' +ndata.totalWinnings.dollar.toFixed(2) +'</div>');
            }
            totalPreviousWinnings=totalPreviousWinnings+ndata.totalWinnings.dollar;

          }
          $('#totalPreviousWinnings').html(totalPreviousWinnings.toFixed(2));

          var table=$('#ptablebody' + contract);
          table.empty();
          if(ndata.notStarted) {
            table.append('<tr><td>Not started yet</td></tr>');
          } else {
            for(var k=0;k<Math.min(ndata.totalWinners,10); k++ ) {
              table.append('<tr><td>&nbsp;</td></tr>');
            }
          }

          if(isLocal(web3) && !attached) {
            attached=true;
            var c=web3.eth.contract(CONTRACTS_ABI).at(contract);
            var dialog=$("#dialog"+contract);
            var bcolor=dialog.attr("data-background");
            var fcolor=dialog.attr("data-color");

            c.TicketBought(function(err,data) {
              var player = data.args._from;
              var playerHtml = '<p>Player <a href="https://etherscan.io/address/' +  player + '" target="_blank">' + player.substr(0,10) + '...</a></p>';
              var tx=data.transactionHash;
              var txHtml= '<p>Tx <a href="https://etherscan.io/tx/' + tx + '" target="_blank">' + tx.substr(0,10) + '...</a></p>';

              $.Notify({ caption: "Ticket bought!", content: playerHtml + txHtml , style: { background: bcolor, color : fcolor }  , keepOpen:true });
              refresh();
            });
            c.WinnerPayedTicketBought(function(err, data) {
              var winner=data.args._winner;
              var winnerHtml='<p>Winner <a href="https://etherscan.io/address/' +  winner + '" target="_blank">' + winner.substr(0,10) + '...</a></p>';
              var tx=data.transactionHash;
              var txHtml= '<p>Winning tx <a href="https://etherscan.io/tx/' + tx + '" target="_blank">' + tx.substr(0,10) + '...</a></p>';

              $.Notify({ caption: "Winner Payed!", content: winnerHtml + txHtml, style: { background: bcolor, color : fcolor } , keepOpen:true });
              refresh();
            })
          }

        });

      }
    });

  }).catch(function(error) {
    console.log(error);
  });
}


$(document).ready(function () {
  draw();

  $('#refreshButton').click(function () {
    console.log("refresh!");
    refresh();
  })

});
