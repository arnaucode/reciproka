pragma solidity ^0.4.23;

contract Accounts {

  mapping(address => Account) accounts;

  struct Account {
    address ID;
    int64 Balance;
    bytes32[] History;
  }

  event BalanceUpdated(address sender, address receiver, int64 value);

  function updateBalance(address _receiver, int64 _value) public {
    // check if balance of _sender is under the limit
    require(accounts[msg.sender].Balance - _value > -100, "too much negative balance");
    // substract _value from _sender account
    accounts[msg.sender].Balance = accounts[msg.sender].Balance - _value;
    // add _value to _receiver account
    accounts[_receiver].Balance = accounts[_receiver].Balance + _value;

    // add transaction to history of sender and receiver accounts

    // emit BalanceUpdated
    emit BalanceUpdated(msg.sender, _receiver, _value);

  }
  function getBalance(address _address) public view returns (int64) {
    return accounts[_address].Balance;
  }
}
