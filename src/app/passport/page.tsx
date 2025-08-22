// eslint-disable-next-line @typescript-eslint/no-explicit-any
'use client';

import { useState, useEffect } from 'react';
import { BiomapperVerification } from '@/components/BiomapperVerification';
import { useBiomapper } from '@/hooks/useBiomapper';
import { MetaMaskInpageProvider } from '@metamask/providers';
import {Providers} from "@/app/providers";

declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider;
    }
}

interface EthereumProvider {
    request: (args:
                  | { method: 'eth_accounts' }
                  | { method: 'eth_requestAccounts' }
                  | { method: 'eth_chainId' }
    ) => Promise<string[] | string | unknown>;
}


export default function BiomapperDemo() {
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [network, setNetwork] = useState<'mainnet' | 'testnet'>('testnet');
    const [isConnected, setIsConnected] = useState(false);

    // Use the hook to check biomapping status
    const { isBiomapped, generation, isLoading } = useBiomapper(walletAddress, network);

    // Connect wallet function
    const connectWallet = async () => {
        if (typeof (window as unknown as { ethereum: EthereumProvider }).ethereum !== 'undefined') {
            try {
                // Request account access
                const accounts = await (window as unknown as { ethereum: EthereumProvider }).ethereum.request({
                    method: 'eth_requestAccounts'
                }) as string[];

                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setIsConnected(true);
                }
            } catch (error) {
                console.error('Error connecting wallet:', error);
            }
        } else {
            alert('Please install MetaMask or another Web3 wallet');
        }
    };

    // Check if wallet is already connected on load
    useEffect(() => {
        const checkConnection = async () => {
            if (typeof (window as unknown as { ethereum: EthereumProvider }).ethereum !== 'undefined') {
                const accounts = await (window as unknown as { ethereum: EthereumProvider }).ethereum.request({
                    method: 'eth_accounts'
                }) as string[];
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setIsConnected(true);
                }
            }
        };
        checkConnection();
    }, []);

    // Example of gated content based on biomapping
    const renderGatedContent = () => {
        if (!isConnected) {
            return (
                <div className="mt-16 p-6 border-2 border-gray-300 rounded-lg bg-gray-50">
                    <h3 className="text-lg font-semibold mb-2">Protected Content</h3>
                    <p className="text-gray-600">Connect your wallet to access this content</p>
                </div>
            );
        }

        if (isLoading) {
            return (
                <div className="mt-16 p-6 border-2 border-gray-300 rounded-lg bg-gray-50">
                    <h3 className="text-lg font-semibold mb-2">Checking Access...</h3>
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
            );
        }

        if (!isBiomapped) {
            return (
                <div className="mt-16 p-6 border-2 border-yellow-300 rounded-lg bg-yellow-50">
                    <h3 className="text-lg font-semibold mb-2">Biomapping Required</h3>
                    <p className="text-gray-600">
                        Complete biomapping verification to access this content
                    </p>
                </div>
            );
        }

        return (
            <div className="mt-16 p-6 border-2 border-green-300 rounded-lg bg-green-50">
                <h3 className="text-lg font-semibold mb-2 text-green-700">
                    🎉 Exclusive Content
                </h3>
                <p className="text-gray-700">
                    Welcome! You have verified your unique human identity through biomapping.
                </p>
                <div className="mt-4 p-4 bg-white rounded">
                    <p className="font-mono text-sm">
                        Verified in Generation: {generation?.toString()}
                    </p>
                    <p className="mt-2">
                        This content is only accessible to biomapped users, ensuring one person = one account.
                    </p>
                </div>
            </div>
        );
    };


    return (
        <Providers>
            <div className="mt-24 container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-3xl font-bold mb-6">Biomapper Integration Demo</h1>

                {/* Network Selector */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Network:</label>
                    <select
                        value={network}
                        onChange={(e) => setNetwork(e.target.value as 'mainnet' | 'testnet')}
                        className="px-4 py-2 border rounded-lg"
                    >
                        <option value="testnet">Avalanche Fuji (Testnet)</option>
                        <option value="mainnet">Avalanche Mainnet</option>
                    </select>
                </div>

                {/* Wallet Connection */}
                <div className="mb-6">
                    {!isConnected ? (
                        <button
                            onClick={connectWallet}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Connect Wallet
                        </button>
                    ) : (
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <p className="text-sm text-gray-600">Connected Address:</p>
                            <p className="font-mono text-sm">{walletAddress}</p>
                        </div>
                    )}
                </div>

                {/* Biomapper Verification Component */}
                {isConnected && (
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Biomapping Status</h2>
                        <BiomapperVerification
                            address={walletAddress}
                            network={network}
                            onVerificationComplete={(verified) => {
                                console.log('Verification complete:', verified);
                            }}
                        />
                    </div>
                )}

                {/* Example of Gated Content */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Biomapped Users Only</h2>
                    {renderGatedContent()}
                </div>

                {/* Additional Information */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold mb-2">About Biomapper</h3>
                    <p className="text-sm text-gray-700">
                        Biomapper uses biometric verification to ensure one person = one account,
                        preventing Sybil attacks and enabling fair, human-only participation in
                        decentralized applications.
                    </p>
                </div>
            </div>
        </Providers>
    );
}