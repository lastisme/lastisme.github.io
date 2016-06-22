$(document).ready(function () {
    console.log("starting");
    var myContract= "0xbcb85c78d7fc5ce21b188dd657f4ac295a426884";
    $(".owner").html(myContract);
    $("#ownerlink").attr("href", "http://frontier.ether.camp/account/" + myContract);
    var promises = [];
    var winners, winnersPot, winnersDate;
    var blockNumber, blockTime, lastBlock, lastPlayer, price, balance, waitingBlocks, ticketPrice, totalWinnings, totalWinner;

    promises.push( $.get("https://www.etherchain.org/api/basic_stats", function ( data) {
        blockTime = data.data.stats.blockTime;
        price     = data.data.price.usd;
        console.log( "blockTime: " + blockTime + " price: " + price);
      }
    ));

    var request=[]

    var eth_getStorageAt1 =  { jsonrpc: "2.0" , method:"eth_getStorageAt", params: [ myContract, "0x1", "latest" ], id:1 };
    request.push(eth_getStorageAt1);

    var eth_getStorageAt2 =  { jsonrpc: "2.0" , method:"eth_getStorageAt", params: [ myContract, "0x2", "latest" ], id:2 };
    request.push(eth_getStorageAt2);

    var eth_getStorageAt3 =  { jsonrpc: "2.0" , method:"eth_getStorageAt", params: [ myContract, "0x3", "latest" ], id:3 };
    request.push(eth_getStorageAt3);

    var eth_getStorageAt4 =  { jsonrpc: "2.0" , method:"eth_getStorageAt", params: [ myContract, "0x4", "latest" ], id:4 };
    request.push(eth_getStorageAt4);

    var eth_getStorageAt5 =  { jsonrpc: "2.0" , method:"eth_getStorageAt", params: [ myContract, "0x5", "latest" ], id:5 };
    request.push(eth_getStorageAt5);

    var eth_getStorageAt6 =  { jsonrpc: "2.0" , method:"eth_getStorageAt", params: [ myContract, "0x6", "latest" ], id:6 };
    request.push(eth_getStorageAt6);

    var eth_blockNumber = { jsonrpc: "2.0" , method:"eth_blockNumber", params: [], id:10 };
    request.push(eth_blockNumber);

    var eth_getBalance =  { jsonrpc: "2.0" , method:"eth_getBalance", params: [ myContract,  "latest" ], id:20 };
    request.push(eth_getBalance);

    var stringRequest = JSON.stringify(request);
    console.log(stringRequest);

    promises.push( $.post( "http://eth2.augur.net ",stringRequest , function( data ) {
        for(var i = 0; i < data.length; i++) {
            var obj = data[i];
            if(obj.id==1) {
                lastPlayer = "0x" + obj.result.substring(26);
                console.log( "lastPlayer: " + lastPlayer );
                $("#currentlast").html(lastPlayer);
            } else if(obj.id==2) {
                lastBlock = parseInt(obj.result, 16);
                console.log( "lastBlock: " + lastBlock );
            } else if(obj.id==3) {
                waitingBlocks = parseInt(obj.result, 16);
                console.log( "waitingBlocks: " + waitingBlocks );
                $(".waitingBlocks").html(waitingBlocks);
            } else if(obj.id==4) {
                ticketPrice = new BigNumber(obj.result, 16).dividedBy("1000000000000000000").toNumber();
                $(".ticketprice").html(ticketPrice);
                console.log( "ticketPrice: " + ticketPrice );
            } else if(obj.id==5) {
                 totalWinnings = new BigNumber(obj.result, 16).dividedBy("1000000000000000000").toNumber();
                 console.log( "totalWinnings: " + totalWinnings );
            } else if(obj.id==6) {
                 totalWinners = parseInt(obj.result, 16);
                 console.log( "totalWinners: " + totalWinners );
                 var promiseArrays = [];

                 var winnersRequest=askArray(myContract,"winners(uint256)",0,totalWinners);
                 promiseArrays.push( $.post( "http://eth2.augur.net ", JSON.stringify(winnersRequest) , function( data ) {
                    winners=data;
                    console.log(data);
                  } ) );

                 var winnersPotRequest=askArray(myContract,"winnersPot(uint256)",0,totalWinners);
                 promiseArrays.push( $.post( "http://eth2.augur.net ", JSON.stringify(winnersPotRequest) , function( data ) {
                    winnersPot=data;
                    console.log(data);
                 } ) );

                 $.when.apply($, promiseArrays).then(function() {
                         console.log("finish promiseArrays");
                         var table = $('#tbody');
                         for(var i=0;i<totalWinners;i++ ) {
                            var rowPlayer = "0x" + winners[i].result.substring(26);
                            var rowPrice = new BigNumber(winnersPot[i].result, 16).dividedBy("1000000000000000000").toNumber();
                             table.append('<tr><th scope="row">'+ (i+1) +'</th><td></td><td><span class="label label-default smaller owner" >' + rowPlayer + '</span></td><td>' + rowPrice + '</td></tr>');
                         }

                     });

                 /* add date array, we need a data struct for the element in the array! */

             }  else if(obj.id==10) {
                blockNumber = parseInt(obj.result, 16);
                console.log( "blockNumber: " + blockNumber );
            } else if(obj.id==20) {
                balance = new BigNumber(obj.result, 16).dividedBy("1000000000000000000").toNumber();
                console.log( "balance: " + balance );
            }
        }
     }
    ));



  $.when.apply($, promises).then(function() {
    console.log("finish");



    var dollars = price * balance;
    $('#currentjackpot').html( "$ " +dollars.toFixed(2)  )

    var now = new Date();
    var then = new Date();
    var elapsed = blockNumber-lastBlock;
    console.log("elapsed " + elapsed + " blocks");
    var remaining = 200 - elapsed;
    console.log("remaining " + remaining + " blocks");
    if(remaining>0) {
        var remainingSeconds =  remaining * blockTime;
        var ONE_HOUR = 3600;
        var ONE_DAY = ONE_HOUR*24;
        console.log("remainingSeconds " + remainingSeconds);
        var strftime;
        if(remainingSeconds>ONE_DAY)
            strftime='%-D day%!D %-H hour%!H %-M minute%!M %-S second%!S';
        else if(remainingSeconds>ONE_HOUR)
            strftime='%-H hour%!H %-M minute%!M %-S second%!S';
        else
            strftime='%-M minute%!M %-S second%!S';

        then.setSeconds( now.getSeconds() + remainingSeconds );
        console.log("then=" + then);
        $("#getting-started")
               .countdown(then, function(event) {
                 $(this).text(
                   event.strftime(strftime)
                 );
               });
    } else {
        $('#ifnoone').hide();
    }

    }, function() {
        // error occurred
    });



});

