var accountsContractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "int64"
			}
		],
		"name": "BalanceUpdated",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_receiver",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "int64"
			}
		],
		"name": "updateBalance",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "int64"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
export default accountsContractABI;
