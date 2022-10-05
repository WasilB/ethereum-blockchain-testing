const Web3 = require("web3");
const abi_def = require("./abi");

const rpcURL = "https://mainnet.infura.io/v3/21d1df8208a048dfa2fa3acf5ba3776b";
const web3 = new Web3(rpcURL);
const ContractAddress = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07";
// web3.eth.getBalance(
//   "0xf3906de859d00736ce969fc4504ca087cbc1146e",
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
  .balanceOf("0xd26114cd6EE289AccF82350c8d8487fedB8A0C07")
  .call((err, result) => {
    console.log(result, "Balance");
  });
