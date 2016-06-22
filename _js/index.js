
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
