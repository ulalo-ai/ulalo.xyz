// components/BiomapperVerification.tsx
'use client';

import { useBiomapper } from '@/hooks/useBiomapper';
import {Contract, ethers} from "ethers";
import {biomapper} from "@/lib/biomapper";

interface BiomapperVerificationProps {
    address?: string;
    network?: 'mainnet' | 'testnet';
    onVerificationComplete?: (isBiomapped: boolean) => void;
}

export function BiomapperVerification({
                                          address,
                                          network = 'mainnet',
                                          // onVerificationComplete
                                      }: BiomapperVerificationProps) {
    const {
        isLoading,
        error,
        isBiomapped,
        generation,
        refetch
    } = useBiomapper(address, network);

    const biomapperAbi = [
        "function generationsHead() external view returns (uint256)",
        "function lookupBiomappingPtr(address account, uint256 generationPtr) external view returns (uint256)",
    ];

    const handleStartBiomapping = async () => {
        try {
            // Check if the user's address is biomapped
            if (address) {
                console.log("Checking biomapping for address:", address);

                // Use the service instead of creating a new contract
                const details = await biomapper.getBiomappingDetails(address);

                console.log("Biomapping details:", {
                    isBiomapped: details.isBiomapped,
                    generation: details.generation.toString(),
                    biomappingPtr: details.biomappingPtr.toString()
                });

                if (details.isBiomapped) {
                    console.log("✅ Address is biomapped!");
                } else {
                    console.log("❌ Address is not biomapped");
                    const biomapperUrl = await biomapper.getCurrentGeneration();
                    console.log(biomapperUrl)
                }
            }
        } catch (error) {
            console.error("Error checking biomapping status:", error);
        }
    };

    if (!address) {
        return (
            <div className="p-4 border rounded-lg bg-gray-50">
                <p className="text-gray-600">Please connect your wallet to check biomapping status</p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="p-4 border rounded-lg bg-blue-50">
                <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    <p className="text-blue-600">Checking biomapping status...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 border rounded-lg bg-red-50">
                <p className="text-red-600 mb-2">Error checking biomapping status</p>
                <p className="text-sm text-gray-600">{error.message}</p>
                <button
                    onClick={refetch}
                    className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                    Retry
                </button>
            </div>
        );
    }

    if (isBiomapped) {
        return (
            <div className="p-4 border rounded-lg bg-green-50">
                <div className="mb-2">
                    <p className="text-green-600 font-semibold">✓ Biomapped</p>
                    <p className="text-sm text-gray-600">
                        Your address is verified in generation {generation?.toString()}
                    </p>
                </div>
                <button
                    onClick={refetch}
                    className="mt-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                    Refresh Status
                </button>
            </div>
        );
    }

    return (
        <div className="p-4 border rounded-lg bg-yellow-50">
            <div className="mb-4">
                <p className="text-yellow-700 font-semibold">Biomapping Required</p>
                <p className="text-sm text-gray-600">
                    Your address is not biomapped in the current generation
                </p>
            </div>
            <div className="flex space-x-2">
                <button
                    onClick={handleStartBiomapping}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Start Biomapping
                </button>
                <button
                    onClick={refetch}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                    Check Again
                </button>
            </div>
        </div>
    );
}