const { ethers } = require("hardhat");

// contract deployed to goerli testnet at 0x4385B18589eaFcA91A5E396baFA98db0e8a4aEA7

async function main() {
  const [owner] = await ethers.getSigners();
  const LotteryFactory = await ethers.getContractFactory("Lottery");
  const LotteryContract = await LotteryFactory.deploy();
  await LotteryContract.deployed();

  console.log("Lottery Contract deployed to:", LotteryContract.address);

  const tx = await LotteryContract.join({ value: ethers.utils.parseEther(1) });
  await tx.wait();
  console.log(tx);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
