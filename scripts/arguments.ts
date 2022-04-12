module.exports = [
  "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
  7776000,
  2592000
];

// in order to deploy via hardhat,
// run command below in terminal
// npx hardhat run --network NETWORK_NAME scripts/deploy.ts

// in order to verify via hardhat,
// run command below in terminal
// npx hardhat verify --network kovan  --constructor-args scripts/arguments.ts DEPLOYED_CONTRACT_ADDRESS