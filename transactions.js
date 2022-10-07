var tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://Goerli.infura.io/v3/21d1df8208a048dfa2fa3acf5ba3776b"
);

const account1Goerli = "0x0DBA524Be89d444dD3254a3CcCC5824759dC129E";
const account2 = "0x49Dc327F68C17b14Fdd46085ae1da2C98355f8b7";
const shaheerACC = "0x1a5Bf9a39E550B5F361731F17745ec5f0ED2753a";

const Private_Key_1 =
  "75918a81ab654949dfffdd9490c5c2b95e8a1fb238556597988394687efeb9ce";
const Private_Key_2 =
  "94f71c60ad4b9f32c59f7d39389a59b6b24b81a8309481495a0b9c45d3e32f7c";
// web3.eth.getBalance(account1, (err, bal) => {
//   console.log("account 1 balance: ", web3.utils.fromWei(bal, "ether"));
// });

// web3.eth.getBalance(account2, (err, bal) => {
//   console.log("account 2 balance: ", web3.utils.fromWei(bal, "ether"));
// });

// //build tran
// const txObject = {
//   to: shaheerACC,
//   value: web3.utils.toWei("0.01", "ether"),
//   gas: "21000",
//   gasPrice: web3.utils.toWei("10", "gwei"),
// };

// //sign tran
// const signedTransaction = web3.eth.accounts.signTransaction(
//   txObject,
//   Private_Key_1
// );
// //broadcast tran
// signedTransaction.then((signedTx) => {
//   const sentTx = web3.eth.sendSignedTransaction(
//     signedTx.raw || signedTx.rawTransaction
//   );
//   //done

//   sentTx.on("receipt", (receipt) => {
//     console.log("receipt: ", receipt);
//   });

//   sentTx.on("error", (err) => {
//     console.log(err.message);
//   });
// });
