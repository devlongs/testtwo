import { ethers } from "hardhat";

const main = async () => {
  const Lottery = await ethers.getContractAt(
    "Ilottery",
    "0x4385B18589eaFcA91A5E396baFA98db0e8a4aEA7"
  );

  const joinLottery = await Lottery.join({
    value: ethers.utils.parseEther("1"),
  });
  const receipt = await joinLottery.wait();
  console.log("Receipt hash: ", receipt);
};
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
