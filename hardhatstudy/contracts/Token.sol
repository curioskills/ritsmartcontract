// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.9;

import "hardhat/console.sol";
contract Token{
    string public name='hardhattoken';
    string public symbol='hht';
    uint public totalSupply=10000;

    address public owner;
    mapping (address => uint) balances;

    constructor(){
        balances[msg.sender]=totalSupply;
        owner=msg.sender;
    }

    function transfer(address to,uint amount) external{
        console.log('Sender balance is %s tokens',balances[msg.sender]);
        require(balances[msg.sender]>=amount,"Not enough tokens");
        balances[msg.sender]-=amount;
        balances[to]+=amount;
    }

    function balanceOf(address account)external view returns(uint256){
        return balances[account];
    }
}