import { ethers } from 'hardhat';
import { saveContractAddress } from './utils/saveContractAddress';
import { contractConfig } from './addresses';
import { config } from './config';

async function main() {
  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    'Deploying the contracts with the account:',
    await deployer.getAddress()
  );

  // LFX Airdrop
  const LfxAirdropContract = await ethers.getContractFactory('LfxAirdrop');
  const lfxAirdrop = await LfxAirdropContract.deploy(
    contractConfig.Lfx.Token,
    config.lfxAirdrop.maxParticipant,
    config.lfxAirdrop.maxTotalSupply,
    config.lfxAirdrop.minDepositAmount,
    config.lfxAirdrop.maxDepositAmount
  );
  const lfxAirdropAddress = await lfxAirdrop.getAddress();

  console.log('LFX Airdrop Address :', lfxAirdropAddress);
  saveContractAddress('LfxAirdrop', lfxAirdropAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
