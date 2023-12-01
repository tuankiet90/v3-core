import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    deploy: {
      url: process.env.RPC_ENDPOINT,
      // gasPrice: 10000000000,
      // gas: 10000000,
      chainId: Number(process.env.CHAIN_ID),
      accounts: [process.env.PKEY as string],
      allowUnlimitedContractSize: true,
    },
    
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    },
  },
}
