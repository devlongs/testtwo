const hre = require("hardhat");

// Helper functions to test the contract

//Returns the Ethereum balance of a given address.
async function getBalance(address) {
  const balanceBigInt = await hre.waffle.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

// Logs the Ether balances for a list of addresses.
// async function printBalances(addresses) {
//   let idx = 0;
//   for (const address of addresses) {
//     console.log(`Address ${idx} balance `, await getBalance(address));
//     idx++;
//   }
// }

// Logs the memos stored on-chain from coffee purchases.
// async function printMemos(memos) {
//   for (const memo of memos) {
//     const timestamp = memo.timestamp;
//     const tipper = memo.name;
//     const tipperAddress = memo.from;
//     const message = memo.message;
//     console.log(
//       `At ${timestamp}, ${tipper} (${tipperAddress}) said "${message}"`
//     );
//   }
// }

async function main() {
  // Get example accounts.
  const [owner, acc1, acc2, acc3] = await hre.ethers.getSigners();

  // Get the contract to deploy & deploy
  const Donation = await hre.ethers.getContractFactory("Donation");
  const donation = await Donation.deploy();
  await donation.deployed();

  console.log("===== Donation deployed to ", donation.address, " ======");

  // Check account balance before donation.
  const address = donation.address;
  console.log("== start ==");
  const bal = await getBalance(address);
  console.log(bal);

  // Buy the owner a few coffees.
  //   const tip = { value: hre.ethers.utils.parseEther("1") };
  //   await buyMeACoffee
  //     .connect(tipper)
  //     .buyCoffee("Carolina", "You're the best!", tip);
  //   await buyMeACoffee
  //     .connect(tipper2)
  //     .buyCoffee("Vitto", "Amazing teacher :)", tip);
  //   await buyMeACoffee
  //     .connect(tipper3)
  //     .buyCoffee("Kay", "I love my proof of knowledge NFT", tip);

  // Check balances after coffee purchase.
  //   console.log("== bought coffee ===");
  //   await printBalances(addresses);

  // Withdraw funds.
  //   await buyMeACoffee.connect(owner).withdrawTips();

  // Check balance after withdraw.
  //   console.log("== withdrawTips ===");
  //   await printBalances(addresses);

  // Read all the memos left for the owner.
  //   console.log("== memos ==");
  //   const memos = await buyMeACoffee.getMemos();
  //   printMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
