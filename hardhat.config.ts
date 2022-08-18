import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { network } from "hardhat";

const URL = process.env.URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.9",

  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/3YrcgwycZ0vi8HGXjNQVIkaeVL7-n497",
        //@ts-ignore
        // blockGasLimit: 200000000000,
        // gasPrice: 80000000000,
      },
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/raG07qO50AvVnKl_D7-VXeo29hd-co-F",
      accounts: [
        "17a7c7bb9c244cdf24dfa694e0f6a4e7a45e669c5e07fd4aaba4f5735137f3c0",
      ],
    },
  },
};

export default config;
