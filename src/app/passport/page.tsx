"use client"

import React, {useState, useEffect, JSX} from 'react';
import { CheckCircle, Loader2, Wallet, XCircle, Shield, UserCheck, UserX, AlertTriangle } from 'lucide-react';

// Define specific types for Ethereum RPC methods
type EthereumRpcMethod =
    | 'eth_requestAccounts'
    | 'eth_accounts'
    | 'eth_chainId'
    | 'eth_getBalance'
    | 'eth_sendTransaction'
    | 'eth_sign'
    | 'personal_sign'
    | 'eth_signTypedData_v4'
    | string; // Allow other methods while maintaining some type safety

type EthereumRpcParams =
    | string[]           // For methods like eth_requestAccounts
    | [string]           // For methods with single address parameter
    | [string, string]   // For methods with address and block parameter
    | [TransactionRequest] // For eth_sendTransaction
    | unknown[];         // Fallback for other parameter types

interface TransactionRequest {
    to?: string;
    from?: string;
    value?: string;
    gas?: string;
    gasPrice?: string;
    data?: string;
    nonce?: string;
}

interface EthereumProvider {
    request: (args: {
        method: EthereumRpcMethod;
        params?: EthereumRpcParams;
    }) => Promise<unknown>; // Use unknown instead of any for return value
    isMetaMask?: boolean;
    // Add other common provider properties
    selectedAddress?: string | null;
    chainId?: string;
    networkVersion?: string;
}

// Define a more specific type for web3 if you know which library you're using
interface Web3Instance {
    version: string;
    eth: {
        getAccounts: () => Promise<string[]>;
        getBalance: (address: string) => Promise<string>;
        // Add other methods you use
    };
    // Add other web3 properties you use
}

interface WindowWithEthereum extends Window {
    ethereum?: EthereumProvider;
    web3?: Web3Instance; // More specific than any
}

declare const window: WindowWithEthereum;

// Define specific types for evidence based on your use case
interface PassportEvidence {
    type: string;
    rawScore: number;
    threshold: number;
    // Add other evidence properties you expect
}

interface HumanPassportScore {
    address: string;
    score: number;
    status: 'valid' | 'invalid' | 'pending' | string; // Be more specific if possible
    evidence?: PassportEvidence | Record<string, unknown>; // More specific than any
    error?: string;
    message?: { [key: string]: unknown };
}

// Real Supabase client
import { createClient } from '@supabase/supabase-js';
import {getDeviceId} from "@/lib/utils";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mgsybbcgfpqleqimaelv.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_JDbbK6HDvvfPQStykgo9JQ_FWpnWaXE";

// Human Passport API Configuration
const HUMAN_PASSPORT_API_KEY = process.env.NEXT_PUBLIC_HUMAN_PASSPORT_API_KEY || "42Q4PStg.il5xk9iP4K3yDJ4lGUdQZragEutgCC5Q";
const HUMAN_PASSPORT_SCORE_ID = process.env.NEXT_PUBLIC_HUMAN_PASSPORT_SCORE_ID || "11761";
const HUMAN_PASSPORT_API_BASE = "https://api.passport.xyz/v2";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
    const { error } = await supabase.from("ulalo_passport").select("*").limit(1);
    if (error) {
        console.error("❌ Database connection failed:", error.message);
    } else {
        console.log("✅ Database connected! Sample row:");
    }
}

testConnection()

type Step = 'loading' | 'welcome' | 'wallet-form' | 'human-passport-validation' | 'submitting-wallet' | 'success' | 'validation-failed' | 'error';


interface UserDeviceInfo {
    userAgent: string;
    platform: string;
    language: string;
    screen: {
        width: number;
        height: number;
        colorDepth: number;
    };
    timezone: string;
    cookieEnabled: boolean;
    onLine: boolean;
}

interface UserLocationInfo {
    latitude?: number;
    longitude?: number;
    accuracy?: number;
    error?: string;
}

interface UserInfo {
    location?: UserLocationInfo;
    deviceInfo: UserDeviceInfo;
    ipAddress?: string;
}

// Add these helper functions before the main App component (around line 100)

// Get user device information
const getUserDeviceInfo = (): UserDeviceInfo => {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: {
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth
        },
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine
    };
};

// Get user location (optional, non-blocking)
const getUserLocation = (): Promise<UserLocationInfo> => {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve({ error: 'Geolocation not supported' });
            return;
        }

        const timeoutId = setTimeout(() => {
            resolve({ error: 'Location request timeout' });
        }, 5000); // 5 second timeout

        navigator.geolocation.getCurrentPosition(
            (position) => {
                clearTimeout(timeoutId);
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                });
            },
            (error) => {
                clearTimeout(timeoutId);
                resolve({ error: error.message });
            },
            {
                enableHighAccuracy: false,
                timeout: 4000,
                maximumAge: 300000 // 5 minutes
            }
        );
    });
};

// Get user IP address
const getUserIP = async (): Promise<string | undefined> => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error getting IP address:', error);
        return undefined;
    }
};

// Collect all user information
const collectUserInfo = async (): Promise<UserInfo> => {
    const deviceInfo = getUserDeviceInfo();

    // Get location (non-blocking)
    const location = await getUserLocation();

    // Get IP address
    const ipAddress = await getUserIP();

    return {
        location,
        deviceInfo,
        ipAddress
    };
};


const VALID_SCORE = 3;


// Check Human Passport score for wallet address
const checkHumanPassportScore = async (walletAddress: string): Promise<HumanPassportScore> => {
    try {
        const response = await fetch(`${HUMAN_PASSPORT_API_BASE}/stamps/${HUMAN_PASSPORT_SCORE_ID}/score/${walletAddress}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'X-API-Key': HUMAN_PASSPORT_API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return {
            address: data.address || walletAddress,
            score: parseFloat(data.score) || 0,
            status: data.score >= VALID_SCORE ? 'valid' : 'invalid',
            message: data
        };
    } catch (error) {
        console.error('Error checking Human Passport score:', error);
        return {
            address: walletAddress,
            score: 0,
            status: 'error',
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
};

// The main component of the application.
export default function App(): JSX.Element {
    // --- State Management ---
    const [step, setStep] = useState<Step>('loading');
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [userId, setUserId] = useState<string | null>(null);
    const [humanPassportScore, setHumanPassportScore] = useState<HumanPassportScore | null>(null);

    // --- Authentication and Initialization ---
    useEffect(() => {
        const initialize = async (): Promise<void> => {
            try {
                // Sign in anonymously
                const { data, error } = await supabase.auth.signInAnonymously();
                if (error) throw error;

                const user = data!.user;
                if(user){
                    setUserId(user.id);
                }

                setStep('welcome');
            } catch (error) {
                console.error("Initialization Error:", error);
                setStep('error');
            }
        };

        initialize();
    }, []);

    // Update or insert wallet validation data in the database
    const saveWalletValidation = async (address: string, isValidated: boolean, record: HumanPassportScore): Promise<void> => {
        if (!userId) {
            console.error('User ID not available.');
            setStep('error');
            return;
        }

        const {
            location,
            deviceInfo,
            ipAddress
        } = await collectUserInfo();

        console.log("Session Init", userId)

        try {
            const { data, error } = await supabase
                .from('ulalo_passport')
                .upsert([{
                    address: address,
                    validated: record.score >= VALID_SCORE,
                    score: record.score,
                    claimed_airdrop: false,
                    device_id: getDeviceId(),
                    ip_address: ipAddress,
                    device_info: deviceInfo,
                    claimed_at: record.message?.last_score_timestamp,
                    location_data: location,
                    passport: record,
                    last_attempt_at: new Date().toISOString()
                }], {
                    onConflict: 'address'
                });
            if (error) throw error;
            console.log("New wallet validation record created:", data);

        } catch (error) {
            console.error('Error saving wallet validation:', error);
            setStep('error');
        }
    };

    // Handle Human Passport validation
    const handleHumanPassportValidation = async (address: string) => {
        setStep('human-passport-validation');

        try {
            const scoreData = await checkHumanPassportScore(address);
            setHumanPassportScore(scoreData);

            const score = scoreData.score;
            const isValidated = score >= VALID_SCORE;

            setStep('submitting-wallet');
            await saveWalletValidation(address, isValidated, scoreData);

            if (isValidated) {
                setStep('success');
            } else {
                setStep('validation-failed');
            }
        } catch (error) {
            console.error('Error validating Human Passport:', error);
            setStep('error');
        }
    };

    // Renders the correct component based on the current step
    const renderStep = (): JSX.Element | null => {
        switch (step) {
            case 'loading':
                return <LoadingScreen />;
            case 'welcome':
                return <WelcomeScreen onStart={() => setStep('wallet-form')} />;
            case 'wallet-form':
                return <WalletForm
                    onSubmitted={(address: string) => {
                        setWalletAddress(address);
                        handleHumanPassportValidation(address);
                    }}
                />;
            case 'human-passport-validation':
                return <HumanPassportValidationScreen walletAddress={walletAddress} />;
            case 'submitting-wallet':
                return <SubmittingScreen message="Saving validation results..." />;
            case 'success':
                return <SuccessScreen
                    walletAddress={walletAddress}
                    humanPassportScore={humanPassportScore}
                />;
            case 'validation-failed':
                return <ValidationFailedScreen
                    walletAddress={walletAddress}
                    humanPassportScore={humanPassportScore}
                    onRetry={() => setStep('wallet-form')}
                />;
            case 'error':
                return <ErrorScreen onRetry={() => setStep('welcome')} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100 p-4 flex items-center justify-center">
            <div className="bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl border border-purple-500/30">
                <div className="transition-all duration-300 ease-in-out">
                    {renderStep()}
                </div>
            </div>
        </div>
    );
}

// --- Component Interfaces ---
interface WelcomeScreenProps {
    onStart: () => void;
}

interface WalletFormProps {
    onSubmitted: (address: string) => void;
}

interface HumanPassportValidationScreenProps {
    walletAddress: string;
}

interface SuccessScreenProps {
    walletAddress: string;
    humanPassportScore: HumanPassportScore | null;
}

interface ValidationFailedScreenProps {
    walletAddress: string;
    humanPassportScore: HumanPassportScore | null;
    onRetry: () => void;
}

interface SubmittingScreenProps {
    message: string;
}

interface ErrorScreenProps {
    onRetry: () => void;
}

// --- Component for the Loading Screen ---
const LoadingScreen: React.FC = () => (
    <div className="text-center">
        <Loader2 className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-spin" />
        <h2 className="text-2xl font-bold">Initializing...</h2>
        <p className="text-gray-400 mt-2">Setting up Human Passport validation...</p>
    </div>
);

// --- Component for the Initial Welcome Screen ---
const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => (
    <div className="text-center">
        <div className="relative">
            <Shield className="w-20 h-20 text-purple-400 mx-auto mb-6 animate-pulse" />
            <UserCheck className="w-8 h-8 text-cyan-400 absolute top-0 right-1/3 animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Human Passport Validator
        </h1>
        <p className="text-gray-300 text-lg mb-6">
            Verify your wallet&#39;s humanity score using Gitcoin Passport
        </p>
        <div className="bg-gray-700/50 rounded-xl p-6 mb-6 text-left backdrop-blur">
            <h3 className="text-lg font-semibold mb-3 text-purple-300">How it works:</h3>
            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <Wallet className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-300">Enter your wallet address</span>
                </div>
                <div className="flex items-center gap-3">
                    <UserCheck className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-300">Check Human Passport score</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-300">Validated if score ≥ 20</span>
                </div>
            </div>
        </div>
        <button
            onClick={onStart}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-purple-500/25"
        >
            Start Validation
        </button>
        <p className="text-xs text-gray-500 mt-4">
            Powered by Gitcoin Passport • Human verification • Sybil resistance
        </p>
    </div>
);

// --- Component for the Wallet Address Form ---
const WalletForm: React.FC<WalletFormProps> = ({ onSubmitted }) => {
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isConnecting, setIsConnecting] = useState<boolean>(false);

    // Check if Web3 wallet is available
    const hasWeb3Wallet = typeof window !== 'undefined' &&
        (typeof window.ethereum !== 'undefined' ||
            typeof window.web3 !== 'undefined');

    const connectWallet = async () => {
        if (!hasWeb3Wallet) {
            setError('Please install MetaMask or another Web3 wallet');
            return;
        }

        setIsConnecting(true);
        try {
            const ethereum = window.ethereum;
            if (!ethereum) {
                throw new Error('No Ethereum provider found');
            }

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' }) as string[];

            if (accounts && accounts.length > 0) {
                setWalletAddress(accounts[0]);
                setError('');
            }
        } catch (err) {
            console.error('Error connecting wallet:', err);
            setError('Failed to connect wallet. Please try again.');
        }
        setIsConnecting(false);
    };

    const validateWalletAddress = (address: string): boolean => {
        // Ethereum address validation
        if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
            return false;
        }
        return true;
    };

    const handleSubmit = async (e?: React.SyntheticEvent): Promise<void> => {
        e?.preventDefault();

        if (!validateWalletAddress(walletAddress)) {
            setError('Please enter a valid Ethereum wallet address (0x...)');
            return;
        }

        setIsLoading(true);
        setError('');
        onSubmitted(walletAddress);
    };

    return (
        <div className="text-center">
            <Wallet className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Enter Wallet Address</h2>
            <p className="text-gray-300 mb-6">
                Provide your Ethereum wallet address to check your Human Passport score
            </p>

            <div className="space-y-4">
                {hasWeb3Wallet && (
                    <button
                        onClick={connectWallet}
                        disabled={isConnecting || isLoading}
                        className="w-full bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105 disabled:opacity-50"
                    >
                        {isConnecting ? (
                            <div className="flex items-center justify-center">
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                Connecting...
                            </div>
                        ) : (
                            <>
                                <Wallet className="inline w-5 h-5 mr-2" />
                                Connect MetaMask
                            </>
                        )}
                    </button>
                )}

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-800 text-gray-400">OR</span>
                    </div>
                </div>

                <div>
                    <input
                        type="text"
                        value={walletAddress}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWalletAddress(e.target.value)}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') {
                                handleSubmit(e);
                            }
                        }}
                        className="w-full bg-gray-700 border-2 border-gray-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 font-mono text-sm"
                        placeholder="0x0000000000000000000000000000000000000000"
                        disabled={isLoading}
                    />
                    {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
                </div>

                <button
                    onClick={(e) => handleSubmit(e)}
                    disabled={isLoading || !walletAddress}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Validating...
                        </div>
                    ) : (
                        'Check Human Passport'
                    )}
                </button>
            </div>
        </div>
    );
};

// --- Component for Human Passport Validation Loading Screen ---
const HumanPassportValidationScreen: React.FC<HumanPassportValidationScreenProps> = ({ walletAddress }) => (
    <div className="text-center">
        <UserCheck className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl font-bold mb-4">Checking Human Passport</h2>
        <p className="text-gray-300 mb-6">
            Validating your humanity score with Gitcoin Passport...
        </p>

        <div className="bg-gray-700/50 rounded-xl p-4 mb-6 backdrop-blur">
            <p className="text-gray-400 mb-2 text-sm">Checking Address:</p>
            <p className="text-cyan-300 font-mono text-xs break-all">{walletAddress}</p>
        </div>

        <div className="flex justify-center">
            <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
        </div>
    </div>
);

// --- Component for the Success Screen ---
const SuccessScreen: React.FC<SuccessScreenProps> = ({ walletAddress, humanPassportScore }) => (
    <div className="text-center">
        <div className="relative">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-green-400/20 rounded-full animate-ping"></div>
            </div>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-green-400">Validation Successful!</h2>
        <p className="text-gray-300 text-lg mb-6">
            Your wallet has been validated with Human Passport
        </p>

        <div className="space-y-4">
            <div className="bg-green-900/30 rounded-xl p-4 border border-green-500/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <UserCheck className="w-6 h-6 text-green-400" />
                    <span className="text-green-400 font-semibold">Human Passport Score</span>
                </div>
                <p className="text-3xl font-bold text-green-300">
                    {humanPassportScore?.score || 'N/A'}
                </p>
                <p className="text-green-400 text-sm mt-1">Score ≥ 20 required for validation</p>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 backdrop-blur">
                <p className="text-gray-400 mb-2 text-sm">Wallet Address:</p>
                <p className="text-purple-300 font-mono text-xs break-all">{walletAddress}</p>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 backdrop-blur">
                <p className="text-gray-400 mb-2 text-sm">Status:</p>
                <p className="text-green-400 font-semibold">{humanPassportScore?.status || 'Validated'}</p>
            </div>
        </div>

        <div className="mt-6 bg-green-900/20 rounded-lg p-4">
            <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <p className="text-green-400 font-semibold">Validated: True</p>
            <p className="text-gray-400 text-sm mt-1">Record saved to database</p>
        </div>
    </div>
);

// --- Component for Validation Failed Screen ---
const ValidationFailedScreen: React.FC<ValidationFailedScreenProps> = ({ walletAddress, humanPassportScore, onRetry }) => (
    <div className="text-center">
        <div className="relative">
            <UserX className="w-20 h-20 text-red-400 mx-auto mb-6" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-red-400">Validation Failed</h2>
        <p className="text-gray-300 text-lg mb-6">
            Your wallet did not meet the minimum Human Passport score requirement
        </p>

        <div className="space-y-4">
            <div className="bg-red-900/30 rounded-xl p-4 border border-red-500/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <span className="text-red-400 font-semibold">Human Passport Score</span>
                </div>
                <p className="text-3xl font-bold text-red-300">
                    {humanPassportScore?.score || '0'}
                </p>
                <p className="text-red-400 text-sm mt-1">Minimum score of 20 required</p>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 backdrop-blur">
                <p className="text-gray-400 mb-2 text-sm">Wallet Address:</p>
                <p className="text-purple-300 font-mono text-xs break-all">{walletAddress}</p>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-4 backdrop-blur">
                <p className="text-gray-400 mb-2 text-sm">Status:</p>
                <p className="text-red-400 font-semibold">{humanPassportScore?.status || 'Failed'}</p>
            </div>
        </div>

        <div className="mt-6 space-y-3">
            <div className="bg-red-900/20 rounded-lg p-4">
                <XCircle className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <p className="text-red-400 font-semibold">Validated: False</p>
                <p className="text-gray-400 text-sm mt-1">Record saved to database</p>
            </div>

            <div className="bg-amber-900/20 rounded-lg p-4">
                <AlertTriangle className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                <p className="text-amber-400 text-sm">
                    To improve your score, visit{' '}
                    <a
                        href="https://passport.gitcoin.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-amber-300"
                    >
                        Gitcoin Passport
                    </a>
                    {' '}and complete more stamps
                </p>
            </div>

            <button
                onClick={onRetry}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
                Try Another Address
            </button>
        </div>
    </div>
);

// --- Screen for a general error state ---
const ErrorScreen: React.FC<ErrorScreenProps> = ({ onRetry }) => (
    <div className="text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold">Validation Error</h2>
        <p className="text-gray-300 mt-4">
            An error occurred during the validation process.
        </p>
        <p className="text-gray-400 mt-2 text-sm">
            Please try again or check your connection.
        </p>
        <button
            onClick={onRetry}
            className="mt-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105"
        >
            Try Again
        </button>
    </div>
);

// --- Placeholder screen for async operations ---
const SubmittingScreen: React.FC<SubmittingScreenProps> = ({ message }) => (
    <div className="text-center">
        <Loader2 className="w-16 h-16 text-purple-400 mx-auto mb-6 animate-spin" />
        <h2 className="text-2xl font-bold">{message}</h2>
        <p className="text-gray-400 mt-2">
            Please wait while we process your request...
        </p>
    </div>
);