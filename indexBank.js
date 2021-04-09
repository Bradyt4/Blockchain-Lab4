
var Web3 = require('web3');

var web3=new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


	var BankContract=new web3.eth.Contract([
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "accountAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "LogDepositMade",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "accountAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newBalance",
				"type": "uint256"
			}
		],
		"name": "LogWithdrawMade",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "withdrawAmount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "remainingBal",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
],'0xa7D8a39cc690a786c0d7Cd8EC07739f655892b40');


async function dispAccount(){
	var addr= await web3.eth.getAccounts();

	console.log(addr[0]);

	web3.eth.getBalance(addr[0],(err,wei)=>{
	console.log(balance=web3.utils.fromWei(wei, 'ether'))



$("#btn1").click(function(){
	BankContract.methods.deposit().send({from: addr[0], value: $("#deposit").val()});
	console.log("Address: " + addr[0] + "\n Deposit: " + $("#deposit").val())
});

$("#btn2").click(function(){
	BankContract.methods.withdraw($("#withdraw").val()).send({from: addr[0]});
	console.log("Address: " + addr[0] + "\n Withdraw: " + $("#withdraw").val())
});

});

$("#btn3").click(function(){
	BankContract.methods.balance().call((error, result)=>{

			if (!error){
						$("#balance").val(result);
					}else
			console.log(error);


	});

});



}
dispAccount();

;





