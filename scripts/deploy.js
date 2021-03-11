const { ethers } = require('hardhat')

async function main() {
  const accounts = await ethers.getSigners()
  const [auctionCreator] = accounts

  const DAIFactory = await ethers.getContractFactory('DAI')
  const MesaFactory = await ethers.getContractFactory('Mesa')

  const daiToken = await DAIFactory.deploy()
  const mesaToken = await MesaFactory.deploy()

  console.log(`Deployed DAI at ${daiToken.address}`)
  console.log(`Deployed MESA at ${mesaToken.address}`)

  // Give the auction creator 15m MESA
  await mesaToken.mint(
    auctionCreator.address,
    ethers.utils.parseEther('150000000')
  )

  // Give each account 100k DAI
  for (let account of accounts) {
    await daiToken.mint(account.address, ethers.utils.parseEther('100000'))
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
