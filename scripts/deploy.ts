import { ethers } from 'hardhat'

async function main() {
  if (!process.env.RPC_ENDPOINT || !process.env.PKEY) {
    throw 'Missing PRC or PKey!'
  }

  const [owner] = await ethers.getSigners()
  var signer = owner

  console.log('xxx signer address', signer.address)

  const RassetFactoryV3 = await ethers.getContractFactory('RassetFactoryV3')
  const rassetFactoryV3 = await RassetFactoryV3.deploy()
  console.log('rassetFactoryV3.address',rassetFactoryV3.address);
  
  var fs = require('fs')
  fs.writeFileSync('address.json', JSON.stringify({ rassetFactoryV3: rassetFactoryV3.address }, null, 4))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
