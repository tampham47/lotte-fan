import LocalArtifactLfx from './local/ArtifactLFX.json';
import LocalArtifactLfxAirdrop from './local/ArtifactLfxAirdrop.json';
import LocalArtifactLfxVault from './local/ArtifactLfxVault.json';
import LocalArtifactLotte from './local/ArtifactLotte.json';
import LocalLfx from './local/LFX.json';
import LocalLfxAirdrop from './local/LfxAirdrop.json';
import LocalLfxVault from './local/LfxVault.json';
import LocalLotte from './local/Lotte.json';

import TestArtifactLfx from './test/ArtifactLFX.json';
import TestArtifactLfxAirdrop from './test/ArtifactLfxAirdrop.json';
import TestArtifactLfxVault from './test/ArtifactLfxVault.json';
import TestArtifactLotte from './test/ArtifactLotte.json';
import TestLfx from './test/LFX.json';
import TestLfxAirdrop from './test/LfxAirdrop.json';
import TestLfxVault from './test/LfxVault.json';
import TestLotte from './test/Lotte.json';

import MainnetArtifactLfx from './mainnet/ArtifactLFX.json';
import MainnetArtifactLfxAirdrop from './mainnet/ArtifactLfxAirdrop.json';
import MainnetArtifactLfxVault from './mainnet/ArtifactLfxVault.json';
import MainnetArtifactLotte from './mainnet/ArtifactLotte.json';
import MainnetLfx from './mainnet/LFX.json';
import MainnetLfxAirdrop from './mainnet/LfxAirdrop.json';
import MainnetLfxVault from './mainnet/LfxVault.json';
import MainnetLotte from './mainnet/Lotte.json';

import ArbGoerliArtifactLfx from './arbgoerli/ArtifactLFX.json';
import ArbGoerliArtifactLfxAirdrop from './arbgoerli/ArtifactLfxAirdrop.json';
import ArbGoerliArtifactLfxVault from './arbgoerli/ArtifactLfxVault.json';
import ArbGoerliArtifactLotte from './arbgoerli/ArtifactLotte.json';
import ArbGoerliLfx from './arbgoerli/LFX.json';
import ArbGoerliLfxAirdrop from './arbgoerli/LfxAirdrop.json';
import ArbGoerliLfxVault from './arbgoerli/LfxVault.json';
import ArbGoerliLotte from './arbgoerli/Lotte.json';

import OpGoerliArtifactLfx from './opgoerli/ArtifactLFX.json';
import OpGoerliArtifactLfxAirdrop from './opgoerli/ArtifactLfxAirdrop.json';
import OpGoerliArtifactLfxVault from './opgoerli/ArtifactLfxVault.json';
import OpGoerliArtifactLotte from './opgoerli/ArtifactLotte.json';
import OpGoerliLfx from './opgoerli/LFX.json';
import OpGoerliLfxAirdrop from './opgoerli/LfxAirdrop.json';
import OpGoerliLfxVault from './opgoerli/LfxVault.json';
import OpGoerliLotte from './opgoerli/Lotte.json';

import PolygonTestArtifactLfx from './polygon-test/ArtifactLFX.json';
import PolygonTestArtifactLfxAirdrop from './polygon-test/ArtifactLfxAirdrop.json';
import PolygonTestArtifactLfxVault from './polygon-test/ArtifactLfxVault.json';
import PolygonTestArtifactLotte from './polygon-test/ArtifactLotte.json';
import PolygonTestLfx from './polygon-test/LFX.json';
import PolygonTestLfxAirdrop from './polygon-test/LfxAirdrop.json';
import PolygonTestLfxVault from './polygon-test/LfxVault.json';
import PolygonTestLotte from './polygon-test/Lotte.json';

import PolygonArtifactLfx from './polygon/ArtifactLFX.json';
import PolygonArtifactLfxAirdrop from './polygon/ArtifactLfxAirdrop.json';
import PolygonArtifactLfxVault from './polygon/ArtifactLfxVault.json';
import PolygonArtifactLotte from './polygon/ArtifactLotte.json';
import PolygonLfx from './polygon/LFX.json';
import PolygonLfxAirdrop from './polygon/LfxAirdrop.json';
import PolygonLfxVault from './polygon/LfxVault.json';
import PolygonLotte from './polygon/Lotte.json';

export const getContractConfig = () => {
  if (process.env.GATSBY_NETWORK === 'local') {
    return {
      ArtifactLfx: LocalArtifactLfx,
      ArtifactLfxAirdrop: LocalArtifactLfxAirdrop,
      ArtifactLfxVault: LocalArtifactLfxVault,
      ArtifactLotte: LocalArtifactLotte,
      Lfx: LocalLfx,
      LfxAirdrop: LocalLfxAirdrop,
      LfxVault: LocalLfxVault,
      Lotte: LocalLotte,
    };
  }

  if (process.env.GATSBY_NETWORK === 'test') {
    return {
      ArtifactLfx: TestArtifactLfx,
      ArtifactLfxAirdrop: TestArtifactLfxAirdrop,
      ArtifactLfxVault: TestArtifactLfxVault,
      ArtifactLotte: TestArtifactLotte,
      Lfx: TestLfx,
      LfxAirdrop: TestLfxAirdrop,
      LfxVault: TestLfxVault,
      Lotte: TestLotte,
    };
  }

  if (process.env.GATSBY_NETWORK === 'arbgoerli') {
    return {
      ArtifactLfx: ArbGoerliArtifactLfx,
      ArtifactLfxAirdrop: ArbGoerliArtifactLfxAirdrop,
      ArtifactLfxVault: ArbGoerliArtifactLfxVault,
      ArtifactLotte: ArbGoerliArtifactLotte,
      Lfx: ArbGoerliLfx,
      LfxAirdrop: ArbGoerliLfxAirdrop,
      LfxVault: ArbGoerliLfxVault,
      Lotte: ArbGoerliLotte,
    };
  }

  if (process.env.GATSBY_NETWORK === 'opgoerli') {
    return {
      ArtifactLfx: OpGoerliArtifactLfx,
      ArtifactLfxAirdrop: OpGoerliArtifactLfxAirdrop,
      ArtifactLfxVault: OpGoerliArtifactLfxVault,
      ArtifactLotte: OpGoerliArtifactLotte,
      Lfx: OpGoerliLfx,
      LfxAirdrop: OpGoerliLfxAirdrop,
      LfxVault: OpGoerliLfxVault,
      Lotte: OpGoerliLotte,
    };
  }

  if (process.env.GATSBY_NETWORK === 'polygon-test') {
    return {
      ArtifactLfx: PolygonTestArtifactLfx,
      ArtifactLfxAirdrop: PolygonTestArtifactLfxAirdrop,
      ArtifactLfxVault: PolygonTestArtifactLfxVault,
      ArtifactLotte: PolygonTestArtifactLotte,
      Lfx: PolygonTestLfx,
      LfxAirdrop: PolygonTestLfxAirdrop,
      LfxVault: PolygonTestLfxVault,
      Lotte: PolygonTestLotte,
    };
  }

  if (process.env.GATSBY_NETWORK === 'polygon') {
    return {
      ArtifactLfx: PolygonArtifactLfx,
      ArtifactLfxAirdrop: PolygonArtifactLfxAirdrop,
      ArtifactLfxVault: PolygonArtifactLfxVault,
      ArtifactLotte: PolygonArtifactLotte,
      Lfx: PolygonLfx,
      LfxAirdrop: PolygonLfxAirdrop,
      LfxVault: PolygonLfxVault,
      Lotte: PolygonLotte,
    };
  }

  // return mainnet config by default
  return {
    ArtifactLfx: MainnetArtifactLfx,
    ArtifactLfxAirdrop: MainnetArtifactLfxAirdrop,
    ArtifactLfxVault: MainnetArtifactLfxVault,
    ArtifactLotte: MainnetArtifactLotte,
    Lfx: MainnetLfx,
    LfxAirdrop: MainnetLfxAirdrop,
    LfxVault: MainnetLfxVault,
    Lotte: MainnetLotte,
  };
};

export const contractConfig = getContractConfig();
