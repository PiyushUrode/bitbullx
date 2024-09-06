import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc } from 'viem/chains'


const chains = [bsc];
const projectId = 'aeecfbcaaf30576d781f3da13a186c26';

const metadata = {
  name: 'Voip Finance',
  description: 'Voip Finance offers a paradigm shift in the way individuals or business connect, & communicate in todays digital landscape, that leverage the power of blockchain to enhance security, privacy, and flexibility in communication.',
  url: 'https://voipfinance.com',
  icons: ['https://voip-web.netlify.app/assets/icon1-DGHckJj4.png']
}

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  metadata,
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient

});
const ethereumClient = new EthereumClient(wagmiConfig, chains);



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <WagmiConfig config={wagmiConfig}>
      <Toaster />
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </>

)
