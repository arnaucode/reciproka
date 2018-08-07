import Web3 from 'web3';
const web3 = new Web3("https://ropsten.infura.io/TFnR8BWJlqZOKxHHZNcs");

var account = web3.eth.accounts.create()
console.log("account", account)
console.log("address", account.address)
web3.eth.getAccounts(function(error, result){
  console.log(result)
})

web3.eth.getBalance(account.address)
  .then(balance => {

    console.log("balance", balance)
  })
