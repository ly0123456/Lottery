pragma solidity ^0.4.24;

contract Lottery {
    address public manger;
    address[] public players;
    uint256 public round;
    address public winner;

    constructor() public{
        manger=msg.sender;
    }
    modifier onlymanger{
        require(msg.sender==manger);
        _;
    }
    function play()public payable{
        require(msg.value==1 ether);
        players.push(msg.sender);
    }

    function kaijiang()public onlymanger{
        // bytes memory v1 =abi.encodePacked(block.timestamp,block.difficulty,players.length);
        // bytes32 v2 =keccak256(v1);
        // uint256 v3=uint256(v2);
        // uint256 index=v3%players.length;
        // winner=players[index];
        // uint256 money=address(this).balance /90*100;
        // uint256 money1=address(this).balance-money;
        // winner.transfer(money);
        // manger.transfer(money1);
        // round++;
        // delete players;
        bytes memory v1 = abi.encodePacked(block.timestamp, block.difficulty, players.length);
        bytes32 v2 = keccak256(v1);
        uint256 v3 = uint256(v2);

        uint256 index = v3 % players.length;

        winner = players[index];

        uint256 money = address(this).balance * 90 / 100;
        uint256 money1 = address(this).balance - money;

        winner.transfer(money);
        manger.transfer(money1);

        round++;
        delete players;

    }
    function tuijiang()onlymanger public{
        for (uint256 i=0;i<players.length;i++){
            players[i].transfer(1 ether);
        }
        round++;
        delete players;
    }
    function getbalance()public view returns(uint256){
        return address(this).balance;
    }
    function getplayers()public view returns(address[]){
        return players;
    }
    function getlength()public view returns(uint256){
        return players.length;
    }


}