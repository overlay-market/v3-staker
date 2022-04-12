
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const uniswapV3Factory = "0x8cCD181113c7Ae40f31D5e8178a98A1A60B55c4C";
  const nonfungiblePositionManager = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const UniswapV3Staker = await ethers.getContractFactory("UniswapV3Staker");
  const _UniswapV3Staker = await UniswapV3Staker.deploy(
    uniswapV3Factory,
    nonfungiblePositionManager,
    7776000,
    2592000
  );

  console.log("Staker address:", _UniswapV3Staker.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

