//const HDWalletProvider = require("@truffle/hdwallet-provider");
//var mnemonic = process.env.MNEMONIC;
module.exports = {
  networks: {
    ganache: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    }
    /*
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/v3/03ea8b70211c4a77b5c681ebf5987a07"
        );
      },
      network_id: 3
    }  */
  }
};
