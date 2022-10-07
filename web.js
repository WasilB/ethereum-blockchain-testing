const Web3 = require("web3");
const abi_def = require("./abi");

const rpcURL = "https://goerli.infura.io/v3/21d1df8208a048dfa2fa3acf5ba3776b";
const web3 = new Web3(rpcURL);
const ContractAddress = "0x97924F591F6f64D5323CCc0ef9b64424c6Ce78C5";
// web3.eth.getBalance(
//   "0x1a5Bf9a39E550B5F361731F17745ec5f0ED2753a",
//   (err, wei) => {
//     balance = web3.utils.fromWei(wei, "ether");
//     console.log(balance, "getbalance");
//   }
// );

const abi = abi_def;

const contract = new web3.eth.Contract(abi, ContractAddress);

contract.methods.totalSupply().call((err, result) => {
  console.log(result, "Supply");
});
contract.methods.name().call((err, result) => {
  console.log(result, "name");
});
contract.methods.symbol().call((err, result) => {
  console.log(result, "symbol");
});
contract.methods
  .balanceOf("0x0DBA524Be89d444dD3254a3CcCC5824759dC129E")
  .call((err, result) => {
    console.log(result, "Balance");
  });
