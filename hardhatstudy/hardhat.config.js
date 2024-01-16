/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');

const INFURA_API_KEY="f6c5651249944ea1b4a949c4c27c5575";
const SEPOLIA_PRIVATE_KEY="d0658e11d99c906a474fa7e5bb4c742671f0434731773f5585c202b688c7967d";
module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
