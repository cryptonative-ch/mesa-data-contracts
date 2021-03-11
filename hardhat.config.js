require('@nomiclabs/hardhat-ethers')
const { mnemonic, infuraKey } = require('./secrets.json')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.6.8',
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraKey}`,
      gasPrice: 45000000000,
      gas: 3200000,
      accounts: { mnemonic },
    },
  },
}
