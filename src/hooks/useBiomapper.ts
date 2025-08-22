// hooks/useBiomapper.ts
import { useState, useEffect } from 'react';
import { biomapper, biomapperTestnet } from '@/lib/biomapper';

interface BiomappingStatus {
    isLoading: boolean;
    error: Error | null;
    isBiomapped: boolean;
    generation: bigint | null;
    biomappingPtr: bigint | null;
}

export function useBiomapper(
    address: string | undefined,
    network: 'mainnet' | 'testnet' = 'mainnet'
): BiomappingStatus & { refetch: () => void } {
    const [status, setStatus] = useState<BiomappingStatus>({
        isLoading: false,
        error: null,
        isBiomapped: false,
        generation: null,
        biomappingPtr: null
    });

    const service = network === 'mainnet' ? biomapper : biomapperTestnet;

    const checkBiomapping = async () => {
        if (!address) {
            setStatus({
                isLoading: false,
                error: null,
                isBiomapped: false,
                generation: null,
                biomappingPtr: null
            });
            return;
        }

        setStatus(prev => ({ ...prev, isLoading: true, error: null }));

        try {
            const details = await service.getBiomappingDetails(address);
            setStatus({
                isLoading: false,
                error: null,
                isBiomapped: details.isBiomapped,
                generation: details.generation,
                biomappingPtr: details.biomappingPtr
            });
        } catch (error) {
            setStatus({
                isLoading: false,
                error: error as Error,
                isBiomapped: false,
                generation: null,
                biomappingPtr: null
            });
        }
    };

    useEffect(() => {
        checkBiomapping();
    }, [address, network]);

    return {
        ...status,
        refetch: checkBiomapping
    };
}