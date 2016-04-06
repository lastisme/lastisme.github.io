
contract owned {
  function owned() {
    owner = msg.sender;
  }
  modifier onlyowner() {
    if (msg.sender == owner)
    _
  }
  function kill() {  //remove in production
    if (msg.sender == owner)
    suicide(owner);
  }
  function transfer(address addr) {  //test
    if (msg.sender == owner)
      owner = addr;
  }
  address public owner;
}

contract LastIsMe is owned {
  event TicketBought(address from);
  event WinnerFound(address winner);

  //constant once constructed
  uint public blocks;
  uint public price;
  ///////////////////////////

  //semi-constant, tweakable with limits after creation
  uint public houseFee;  //in thousands
  uint public contractFee;  //in thousands
  address[4] public contracts;
  //////////////////////////////////////////////////

  address public lastPlayer;
  uint    public lastBlock;
  uint    public totalWinnings;
  uint    public jackpot;

  struct Winners {
    address winner;
    uint jackpot;
    uint timestamp;
  }
  Winners[] public winners;

  uint constant MAX_FEE_PER_THOUSAND = 20;
  uint constant MAX_OTHER_CONTRACTS = 4;

  function LastIsMe(uint priceParam, uint blocksParam) {
    price  = priceParam;
    blocks = blocksParam;
    houseFee = 10;
    contractFee = 20;
    totalWinnings = 0;
    jackpot = 0;
  }

  function () {
    if( msg.value >= price ) { //ticket bought
      TicketBought(msg.sender);

      if( msg.value > price ) {
        msg.sender.send(msg.value-price);  //payed more than required => refund
      }

      if( remaining() == 0 && lastPlayer != 0x0 ) {  //last player was the winner!
        WinnerFound(lastPlayer);
        winners[winners.length++] = Winners(lastPlayer, jackpot, block.timestamp);
        lastPlayer.send(jackpot);
        totalWinnings=totalWinnings+jackpot;
      }

      lastPlayer = msg.sender;
      lastBlock = block.number;

      //house fee
      var aThousand = price/1000;
      var houseFeeVal = aThousand*houseFee;
      owner.send(houseFeeVal);

      //other contracts fee
      var contractFeeVal = aThousand*contractFee;
      var i = 0;
      while(i<MAX_OTHER_CONTRACTS) {
        if(contracts[i]!=0x0) {
          contracts[i].send(contractFeeVal);
        }
        i++;
      }

      jackpot = this.balance;
    }
  }

  function elapsed() constant returns (uint) {
    return block.number - lastBlock;  //>=0
  }

  function remaining() constant returns (uint) {
    var e=elapsed();
    if(blocks>e)
      return blocks - elapsed() ;
    else
      return 0;
  }

  function totalWinners() constant returns (uint) {
    return winners.length;
  }

  function updateContract(uint i, address newValue) onlyowner {
    if(i>=0 && i<MAX_OTHER_CONTRACTS)
      contracts[i]=newValue;
  }

  function changeContractsFee(uint newValue) onlyowner {
    if(newValue<=MAX_FEE_PER_THOUSAND) {
      contractFee=newValue;
    }
  }

  function changeHouseFee(uint newValue) onlyowner {
    if(newValue<=MAX_FEE_PER_THOUSAND) {
      houseFee=newValue;
    }
  }
}
