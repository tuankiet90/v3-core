import { ethers } from 'hardhat'

async function main() {
  if (!process.env.RPC_ENDPOINT || !process.env.PKEY) {
    throw 'Missing PRC or PKey!'
  }

  const [owner] = await ethers.getSigners()
  var signer = owner

  console.log('xxx signer address', signer.address)

  const UniswapV3Factory = await ethers.getContractFactory('UniswapV3Factory')
  const uniswapV3Factory = await UniswapV3Factory.deploy()
  var fs = require('fs')
  fs.writeFileSync('address.json', JSON.stringify({ uniswapV3Factory: uniswapV3Factory.address }, null, 4))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
