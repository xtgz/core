//https://www.coredao.org
const Web3 = require("web3");
// const { Web3 } = require("web3");
const provider = new Web3.providers.HttpProvider(
  //   "https://www.coredao.org"
  "https://rpc-core.icecreamswap.com"
);
//
const web3 = new Web3(provider);
const accounts = [
  {
    //   0x4273173187f1108007b1C1ABE5301eFa03f7fc8A 
    address: "",
    privateKey: "",
  },
];
//okts 的 data
const hexData =
  "0x7b226f70223a226d696e74222c227469636b223a225361746f222c22616d74223a2231303030227d";
let num = 0;
let runNum = 0;
const toAddress = "0x000000000000000000000000000000000000CcCc";
const st = new Date().getTime();
console.log("accounts number", accounts.length, st);
for (const account of accounts) {
  runner(account.address, account.privateKey);
}

async function runner(sender, privateKey) {
  const balance = web3.utils.fromWei(
    await web3.eth.getBalance(sender),
    "ether"
  );
  console.log(
    num++,
    web3.eth.accounts.privateKeyToAccount(privateKey).address,
    balance
  );

  const sendTransaction = async (nonce, privateKey, gasPrice) => {
    try {
      //   const balance = web3.utils.fromWei(
      //     await web3.eth.getBalance(sender),
      //     "ether"
      //   );

      const from = web3.eth.accounts.privateKeyToAccount(privateKey).address;
      console.log(
        web3.eth.accounts.privateKeyToAccount(privateKey).address,
        // balance,
        "gasPrice",
        gasPrice,
        "nonce",
        nonce
      );
      const transactionObject = {
        from: from,
        to: toAddress,
        value: "0", // How many 
        data: hexData,
        gas: 60896,
        gasPrice: gasPrice,
        nonce,
      };
      const signedTransaction = await web3.eth.accounts.signTransaction(
        transactionObject,
        privateKey
      );
      // 发送签名交易
      const receipt = await web3.eth.sendSignedTransaction(
        signedTransaction.rawTransaction
      );
      console.log("res sucess", runNum++);
    } catch (error) {
      //
      console.error(sender, "error:", error.message || error);
    }
  };
  // 
  const batchRes = 10; //
  const runsend = async () => {
    //
    // const gasPrice = web3.utils.toWei("61", "gwei");
    //12-11:00:06 
    const gasPrice = parseInt(parseInt(await web3.eth.getGasPrice()) * 2) + "";
    let nonce = await web3.eth.getTransactionCount(sender);
    for (let i = 0; i < batchRes; i++) {
        sendTransaction(parseInt(nonce) + i, privateKey, gasPrice);
    }
    setTimeout(() => {
      runsend();
      //
    }, 8000);
  };
  runsend();
}
