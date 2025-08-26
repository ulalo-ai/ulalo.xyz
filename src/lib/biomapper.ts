// lib/biomapper.ts
import { ethers } from 'ethers';

// Contract addresses
const BIOMAPPER_ADDRESSES = {
    mainnet: '0x5787AB5aa6ee0b20569B9b3680eC4bb4A90663F4',
    testnet: '0x16F2a7AC67B6aC1E57dD5528A24b1fC689902Be2' // Fuji C-Chain
};

// Biomapper ABI - only the functions we need
const BIOMAPPER_ABI = [
    "function generationsHead() external view returns (uint256)",
    "function lookupBiomappingPtr(address account, uint256 generationPtr) external view returns (uint256)"
];

// RPC endpoints for Avalanche
const RPC_ENDPOINTS = {
    mainnet: 'https://api.avax.network/ext/bc/C/rpc',
    testnet: 'https://api.avax-test.network/ext/bc/C/rpc'
};

export class BiomapperService {
    private provider: ethers.Provider;
    private contract: ethers.Contract;
    private network: 'mainnet' | 'testnet';

    constructor(network: 'mainnet' | 'testnet' = 'mainnet') {
        this.network = network;
        this.provider = new ethers.JsonRpcProvider(RPC_ENDPOINTS[network]);
        this.contract = new ethers.Contract(
            BIOMAPPER_ADDRESSES[network],
            BIOMAPPER_ABI,
            this.provider
        );
    }

    /**
     * Get the current generation head
     */
    async getCurrentGeneration(): Promise<bigint> {
        try {
            const generation = await this.contract.generationsHead();
            return generation;
        } catch (error) {
            console.error('Error fetching current generation:', error);
            throw error;
        }
    }

    /**
     * Check if an address is biomapped in the current generation
     */
    async isBiomapped(address: string): Promise<boolean> {
        try {
            // Get the current generation
            const currentGeneration = await this.getCurrentGeneration();

            // Check biomapping for the address in current generation
            const biomappingPtr = await this.contract.lookupBiomappingPtr(
                address,
                currentGeneration
            );

            // If biomappingPtr is not 0, the address is biomapped
            return biomappingPtr !== 0n;
        } catch (error) {
            console.error('Error checking biomapping status:', error);
            throw error;
        }
    }

    /**
     * Get biomapping details for an address
     */
    async getBiomappingDetails(address: string): Promise<{
        isBiomapped: boolean;
        generation: bigint;
        biomappingPtr: bigint;
    }> {
        try {
            const currentGeneration = await this.getCurrentGeneration();
            const biomappingPtr = await this.contract.lookupBiomappingPtr(
                address,
                currentGeneration
            );

            return {
                isBiomapped: biomappingPtr !== 0n,
                generation: currentGeneration,
                biomappingPtr
            };
        } catch (error) {
            console.error('Error fetching biomapping details:', error);
            throw error;
        }
    }

    /**
     * Get the Biomapper App URL for the current network
     */
    getBiomapperAppUrl(): string {
        // You'll need to check with Humanode for the exact URLs
        return this.network === 'mainnet'
            ? 'https://biomapper.humanode.io'
            : 'https://testnet.biomapper.humanode.io';
    }
}

// Export a singleton instance for easy use
export const biomapper = new BiomapperService('mainnet');
export const biomapperTestnet = new BiomapperService('testnet');