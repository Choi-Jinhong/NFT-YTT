const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = `https://api.baobab.klaytn.net:8651`
const PRIVATE_KEY = '0x43b20d916127b0d225d70b57b2a19b7fd6eff3cbd8a692d4f4261d5f993f3b87'

module.exports = {
  networks: {  
    ganache: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id 
    },

    klaytn: {
      provider: new HDWalletProvider(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null,
    }  
  }
}