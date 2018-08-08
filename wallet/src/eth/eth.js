import mem from '../mem/mem';
import accountsContractABI from './accountsContractABI';
import { message } from 'antd';

import Web3 from 'web3';
mem.web3 = new Web3("https://ropsten.infura.io/TFnR8BWJlqZOKxHHZNcs");
console.log(mem.web3.version)

// localStorage.removeItem("privK");
console.log(localStorage.getItem("privK"));
if (localStorage.getItem("privK")!==null) {
  var privK = JSON.parse(localStorage.getItem("privK"));
  console.log("privK found in localStorage", privK);
  mem.account = mem.web3.eth.accounts.privateKeyToAccount(privK);
  message.success('PrivateKey found in the local storage. Account imported.');
} else {
  console.log("privK not found in localStorage");
  mem.account = mem.web3.eth.accounts.create()
  localStorage.setItem("privK", JSON.stringify(mem.account.privateKey));
  var privK = JSON.parse(localStorage.getItem("privK"));
  console.log("saved privK", privK);
  message.info('PrivateKey not found in the local storage. Account created and saved.');
}
console.log("account", mem.account)
console.log("address", mem.account.address)
mem.web3.eth.getAccounts(function(error, result){
  console.log(result)
})

mem.web3.eth.getBalance(mem.account.address)
  .then(ethBalance => {

    console.log("eth balance", ethBalance)
    mem.ethBalance = ethBalance;
    console.log("eth balance", mem.ethBalance)
  })


mem.accountsContract = new mem.web3.eth.Contract(accountsContractABI, mem.accountsContractAddr);
console.log("accountsContract: ", mem.accountsContract)
function getBalance(addr) {
  return mem.accountsContract.methods.getBalance(addr).call();
}
function sendCredits(receiver, value) {
  mem.accountsContract.methods.updateBalance(receiver, value).call();
  return;
}
getBalance(mem.account.address).then(function(cr_balance){
  console.log("credit balance", cr_balance);
  mem.balance=cr_balance;

})
