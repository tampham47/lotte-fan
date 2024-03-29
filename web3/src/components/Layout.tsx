import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai, fantom, fantomTestnet } from 'wagmi/chains';
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

import { Footer } from './Footer';
import { NavBar } from './NavBar';

import '../css/normalize.css';
import { Container, MobileWrapper } from './Grid';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    line-height: 1.5em;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-color: #0B0B0F;
    color: white;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Inter", sans-serif;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

let chains = [fantom, fantomTestnet, polygon, polygonMumbai];

if (process.env.GATSBY_NETWORK === 'mainnet') {
  chains = [fantom];
}
if (process.env.GATSBY_NETWORK === 'polygon') {
  chains = [polygon];
}

const projectId = 'c08bda26db91f19c077f6e936e169bc0';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const name = 'Lotte.Fan';
  const title = 'Lotte.Fan';
  const description = 'A truly decentralized Lottery application for all';
  const link = 'https://lotte.fan';
  const cover = '/images/social-share.webp';

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>{title}</title>

        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="description" content={description} />

        <meta property="og:site_name" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={link} />
        <meta property="og:image" content={cover} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={link} />
        <meta name="twitter:image" content={cover} />
        <meta name="twitter:site" content={name} />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="500" />
      </Helmet>
      <GlobalStyle />

      <WagmiConfig config={wagmiConfig}>
        <>
          <NavBar />

          {process.env.GATSBY_NETWORK !== 'mainnet' &&
          process.env.GATSBY_NETWORK !== 'polygon' ? (
            <Container>
              <MobileWrapper>
                <Alert
                  icon={<IconAlertCircle size="1rem" />}
                  color="orange"
                  variant="filled"
                >
                  You're on Fantom Testnet, please do NOT use your real{' '}
                  {process.env.GATSBY_ROOT_TOKEN_NAME}.{' '}
                  <a
                    href="https://metaschool.so/rpc/fantomTestnet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here
                  </a>{' '}
                  to learn how to add Fantom Testnet to your Metamask.
                </Alert>
              </MobileWrapper>
            </Container>
          ) : null}

          {children}
          <Footer />
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </>
      </WagmiConfig>
    </main>
  );
};
