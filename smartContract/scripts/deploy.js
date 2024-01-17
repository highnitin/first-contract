// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory('Box');

  // Replace 'YOUR_OWNER_ADDRESS' with the actual address you want to set as the initial owner
  // const ownerAddress = '';

  console.log('Deploying Box...');
  const box = await Box.deploy(ownerAddress);
  await box.deployed();
  console.log('Box deployed to:', box.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
