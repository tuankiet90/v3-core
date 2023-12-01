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

  console.log("uniswapV3Factory",uniswapV3Factory.address)

  console.log("set tick spacing for fee=100")
  await uniswapV3Factory.enableFeeAmount(100,1)

}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
