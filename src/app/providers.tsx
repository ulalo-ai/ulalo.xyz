'use client';

import { WagmiProvider, createConfig, http } from 'wagmi';
import { avalanche, avalancheFuji } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from "react";
// import { connectorsForWallets } from '@rainbow-me/rainbowkit';
// import { metaMaskWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';

const config = createConfig({
    chains: [avalanche, avalancheFuji],
    transports: {
        [avalanche.id]: http(),
        [avalancheFuji.id]: http(),
    },
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    );
}