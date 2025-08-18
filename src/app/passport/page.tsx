"use client"

import React, {useState, useEffect, JSX} from 'react';
import { Fingerprint, CheckCircle, Loader2, Wallet, XCircle } from 'lucide-react';

// --- Types ---
interface CaptchaOption {
    color: string;
    hex: string;
}


// Real Supabase client
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://drxnffnqfmaanmxbvlym.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyeG5mZm5xZm1hYW5teGJ2bHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4Nzc0MzQsImV4cCI6MjA1NDQ1MzQzNH0.tPvqhh0NpSjARmstJKdOk61ZGLFKKLrfblAuaxCtwBc";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

type Step = 'loading' | 'welcome' | 'passport-creation' | 'submitting-passport' | 'wallet-form' | 'submitting-wallet' | 'success' | 'already-verified' | 'error';

// The main component of the application.
export default function App(): JSX.Element {
    // --- State Management ---
    const [step, setStep] = useState<Step>('loading');
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [passportId, setPassportId] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    // --- Authentication and Initialization ---
    useEffect(() => {
        // This function handles the anonymous sign-in process.
        const signInAnonymously = async (): Promise<void> => {
            try {
                const { data, error } = await supabase.auth.signInAnonymously();
                if (error) throw error;

                // Once signed in, get the user's ID and check for an existing passport.
                const user = data!.user;
                if(user){
                    setUserId(user.id);
                    await checkForExistingPassport(user.id);
                }
            } catch (error) {
                console.error("Auth Error:", error);
                setStep('error');
            }
        };

        signInAnonymously();
    }, []);

    // Check database for a user's existing passport.
    const checkForExistingPassport = async (uid: string): Promise<void> => {
        try {
            const { data, error } = await supabase
                .from('ulalo_passport')
                .select('passport_id')
                .eq('id', uid)
                .single();

            if (error && error.code !== 'PGRST116') { // PGRST116 means 'No rows found'
                throw error;
            }

            if (data) {
                setPassportId(data.passport_id);
                setStep('already-verified');
            } else {
                setStep('welcome');
            }
        } catch (error) {
            console.error('Error checking for passport:', error);
            setStep('error');
        }
    };

    // Save the newly created passport to the database.
    const savePassportToDatabase = async (newPassportId: string): Promise<void> => {
        if (!userId) {
            console.error('User ID not available.');
            setStep('error');
            return;
        }
        try {
            const { data, error } = await supabase
                .from('ulalo_passport')
                .insert([
                    {
                        id: userId,
                        passport_id: newPassportId,
                        created_at: new Date().toISOString(),
                        claimed_airdrop: false
                    }
                ]);

            if (error) throw error;
            console.log("Passport created successfully:", data);
        } catch (error) {
            console.error('Error saving passport:', error);
            setStep('error');
        }
    };

    // Update the database with the wallet address.
    const saveWalletToDatabase = async (address: string): Promise<void> => {
        if (!userId) {
            console.error('User ID not available.');
            setStep('error');
            return;
        }
        try {
            const { data, error } = await supabase
                .from('ulalo_passport')
                .update({ address: address, claimed_airdrop: true })
                .eq('id', userId);

            if (error) throw error;
            console.log("Wallet address submitted successfully:", data);
        } catch (error) {
            console.error('Error saving wallet address:', error);
            setStep('error');
        }
    };

    // Renders the correct component based on the current step.
    const renderStep = (): JSX.Element | null => {
        switch (step) {
            case 'loading':
                return <LoadingScreen />;
            case 'welcome':
                return <WelcomeScreen onStart={() => setStep('passport-creation')} />;
            case 'passport-creation':
                return <PassportCreationScreen onPassportCreated={async (id: string) => {
                    setPassportId(id);
                    setStep('submitting-passport');
                    await savePassportToDatabase(id);
                    setStep('wallet-form');
                }} />;
            case 'wallet-form':
                return <WalletForm passportId={passportId!} onSubmitted={async (address: string) => {
                    setWalletAddress(address);
                    setStep('submitting-wallet');
                    await saveWalletToDatabase(address);
                    setStep('success');
                }} />;
            case 'submitting-passport':
                return <SubmittingScreen message="Creating your Ulalo Passport..." />;
            case 'submitting-wallet':
                return <SubmittingScreen message="Submitting your wallet address..." />;
            case 'success':
                return <SuccessScreen walletAddress={walletAddress} passportId={passportId!} />;
            case 'already-verified':
                return <AlreadyVerifiedScreen passportId={passportId!} />;
            case 'error':
                return <ErrorScreen />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-4 flex items-center justify-center">
            <div className="bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl border-2 border-gray-700">
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

interface PassportCreationScreenProps {
    onPassportCreated: (id: string) => void;
}

interface WalletFormProps {
    passportId: string;
    onSubmitted: (address: string) => void;
}

interface SuccessScreenProps {
    walletAddress: string;
    passportId: string;
}

interface AlreadyVerifiedScreenProps {
    passportId: string;
}

interface SubmittingScreenProps {
    message: string;
}

// --- Component for the Loading Screen ---
const LoadingScreen: React.FC = () => (
    <div className="text-center">
        <Loader2 className="w-16 h-16 text-teal-400 mx-auto mb-6 animate-spin" />
        <h2 className="text-2xl font-bold">Loading...</h2>
        <p className="text-gray-400 mt-2">Connecting to the Ulalo Passport network.</p>
    </div>
);

// --- Component for the Initial Welcome Screen ---
const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => (
    <div className="text-center">
        <Fingerprint className="w-16 h-16 text-teal-400 mx-auto mb-6 animate-pulse" />
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
            Ulalo Passport Airdrop
        </h1>
        <p className="text-gray-400 text-lg mb-8">
            Welcome to the Ulalo Passport verification. To ensure a fair airdrop and prevent bots from claiming tokens, you must first create a unique Ulalo Passport.
        </p>
        <button
            onClick={onStart}
            className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
            Create My Passport
        </button>
    </div>
);

// --- Component for creating the passport via a CAPTCHA ---
const PassportCreationScreen: React.FC<PassportCreationScreenProps> = ({ onPassportCreated }) => {
    const [, setCaptchaValue] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const captchaOptions: CaptchaOption[] = [
        { color: 'Red', hex: '#ef4444' },
        { color: 'Blue', hex: '#3b82f6' },
        { color: 'Green', hex: '#22c55e' },
        { color: 'Yellow', hex: '#eab308' },
    ];

    const [captcha, setCaptcha] = useState<CaptchaOption>(
        captchaOptions[Math.floor(Math.random() * captchaOptions.length)]
    );

    const handleVerify = (selectedColor: string): void => {
        if (selectedColor.toLowerCase() === captcha.color.toLowerCase()) {
            setIsLoading(true);
            setError('');
            // Simulate API call and ID generation.
            setTimeout(() => {
                setIsLoading(false);
                const newPassportId = `ULP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`.toUpperCase();
                onPassportCreated(newPassportId);
            }, 1500);
        } else {
            setError('Incorrect color. Please try again.');
            setCaptchaValue('');
            setCaptcha(captchaOptions[Math.floor(Math.random() * captchaOptions.length)]);
        }
    };

    return (
        <div className="text-center">
            <Fingerprint className="w-16 h-16 text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Passport Creation</h2>
            <p className="text-gray-400 mb-6">
                To create your unique passport, please match the color name to the color displayed.
            </p>

            <div className="bg-gray-700 p-6 rounded-2xl mb-6 shadow-inner">
                <p className="text-2xl font-bold mb-4">
                    Click the button with the color: <span style={{ color: captcha.hex }}>{captcha.color}</span>
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {captchaOptions.map((option: CaptchaOption) => (
                        <button
                            key={option.color}
                            onClick={() => {
                                if (!isLoading) {
                                    handleVerify(option.color);
                                }
                            }}
                            className="py-3 px-4 rounded-xl font-semibold text-white transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ backgroundColor: option.hex }}
                            disabled={isLoading}
                        >
                            {option.color}
                        </button>
                    ))}
                </div>
                {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}
            </div>

            <p className="text-sm text-gray-500">
                Note: Your passport ID will be automatically generated upon successful verification.
            </p>
        </div>
    );
};

// --- Component for the Wallet Address Form ---
const WalletForm: React.FC<WalletFormProps> = ({ passportId, onSubmitted }) => {
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e?: React.SyntheticEvent): Promise<void> => {
        e?.preventDefault();
        if (walletAddress.trim() === '') {
            setError('Please enter a valid wallet address.');
            return;
        }
        setIsLoading(true);
        onSubmitted(walletAddress);
    };

    return (
        <div className="text-center">
            <Wallet className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Airdrop Registration</h2>
            <p className="text-gray-400 mb-6">
                Your Ulalo Passport has been created. Now, please enter your wallet address to receive your tokens.
            </p>

            <div className="bg-gray-700 p-4 rounded-xl text-sm font-mono mb-6 break-all">
                <p className="text-gray-400 mb-2">Your Passport ID:</p>
                <p className="text-teal-300">{passportId}</p>
            </div>

            <div>
                <div className="mb-6">
                    <input
                        type="text"
                        value={walletAddress}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWalletAddress(e.target.value)}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') {
                                handleSubmit(e);
                            }
                        }}
                        className="w-full bg-gray-700 border-2 border-gray-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter your wallet address"
                        disabled={isLoading}
                    />
                    {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
                </div>
                <button
                    onClick={(e) => handleSubmit(e)}
                    disabled={isLoading}
                    className="relative w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                        </div>
                    ) : (
                        'Submit Wallet'
                    )}
                </button>
            </div>
        </div>
    );
};

// --- Component for the Success Screen ---
const SuccessScreen: React.FC<SuccessScreenProps> = ({ walletAddress, passportId }) => (
    <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
        <p className="text-gray-400 text-lg mb-6">
            Your wallet address has been successfully submitted and linked to your Ulalo Passport. You&#39;ll receive your airdrop tokens shortly.
        </p>
        <div className="bg-gray-700 p-4 rounded-xl text-sm font-mono break-all mb-4">
            <p className="text-gray-400 mb-2">Submitted Address:</p>
            <p className="text-teal-300">{walletAddress}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-xl text-sm font-mono break-all">
            <p className="text-gray-400 mb-2">Your Passport ID:</p>
            <p className="text-teal-300">{passportId}</p>
        </div>
    </div>
);

// --- Component for when a user has already created a passport ---
const AlreadyVerifiedScreen: React.FC<AlreadyVerifiedScreenProps> = ({ passportId }) => (
    <div className="text-center">
        <XCircle className="w-16 h-16 text-red-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Verification Complete</h2>
        <p className="text-gray-400 text-lg mb-6">
            It looks like you have already created a Ulalo Passport. To ensure a fair distribution, each human is only eligible to claim the airdrop once.
        </p>
        <div className="bg-gray-700 p-4 rounded-xl text-sm font-mono break-all">
            <p className="text-gray-400 mb-2">Your Existing Passport ID:</p>
            <p className="text-teal-300">{passportId}</p>
        </div>
    </div>
);

// --- Screen for a general error state ---
const ErrorScreen: React.FC = () => (
    <div className="text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-gray-400 mt-2">
            An error occurred during authentication or data submission. Please try again later.
        </p>
    </div>
);

// --- Placeholder screen for async operations ---
const SubmittingScreen: React.FC<SubmittingScreenProps> = ({ message }) => (
    <div className="text-center">
        <Loader2 className="w-16 h-16 text-sky-400 mx-auto mb-6 animate-spin" />
        <h2 className="text-2xl font-bold">{message}</h2>
        <p className="text-gray-400 mt-2">
            Please wait, this will only take a moment...
        </p>
    </div>
);