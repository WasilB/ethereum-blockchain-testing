var tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://Goerli.infura.io/v3/21d1df8208a048dfa2fa3acf5ba3776b"
);
const contractABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "standard",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { name: "", type: "address" },
      { name: "", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: true, name: "_to", type: "address" },
      { indexed: false, name: "_value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_owner", type: "address" },
      { indexed: true, name: "_spender", type: "address" },
      { indexed: false, name: "_value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
];

const account1Goerli = "0x0DBA524Be89d444dD3254a3CcCC5824759dC129E";
const account2 = "0x1a5Bf9a39E550B5F361731F17745ec5f0ED2753a";

const Private_Key_1 =
  "75918a81ab654949dfffdd9490c5c2b95e8a1fb238556597988394687efeb9ce";
const Private_Key_2 =
  "94f71c60ad4b9f32c59f7d39389a59b6b24b81a8309481495a0b9c45d3e32f7c";
const ContractAddress = "0xe32918aEA73688e854219E0b0fA7a8f17f0b4B49";
const contract = new web3.eth.Contract(contractABI, ContractAddress);
const data = contract.methods.transfer(account2, 100000).encodeABI();

//build tran
const txObject = {
  gas: "800000", // raise this
  gasPrice: web3.utils.toWei("10", "gwei"),
  data: data,
  to: ContractAddress,
};

//sign tran
const signedTransaction = web3.eth.accounts.signTransaction(
  txObject,
  Private_Key_1
);

//broadcast tran
signedTransaction.then((signedTx) => {
  const sentTx = web3.eth.sendSignedTransaction(
    signedTx.raw || signedTx.rawTransaction
  );

  sentTx.on("receipt", (receipt) => {
    console.log("receipt: ", receipt);
  });

  sentTx.on("error", (err) => {
    console.log(err.message);
  });
});
