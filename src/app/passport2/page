"use client"

import React, {JSX, useState} from 'react';
import { CheckCircle, Loader2, Rocket, ShieldCheck, Wallet } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Type definitions for our components
type Step = 'welcome' | 'verification' | 'wallet-form' | 'success';

interface WelcomeScreenProps {
    onStart: () => void;
}

interface VerificationScreenProps {
    onVerified: () => void;
}

interface WalletFormProps {
    onSubmitted: (address: string) => void;
}

interface SuccessScreenProps {
    walletAddress: string;
}

interface Captcha {
    question: string;
    answer: number;
}

// This is the main component of our application.
// It manages the state and renders the appropriate view based on the current step.
export default function App(): JSX.Element {
    const [step, setStep] = useState<Step>('welcome');
    const [walletAddress, setWalletAddress] = useState<string>('');

    // We'll use a simple switch statement to render the correct component for each step.
    // This is a clean way to manage "pages" or views in a single-page application without a router.
    const renderStep = (): JSX.Element | null => {
        switch (step) {
            case 'welcome':
                return <WelcomeScreen onStart={() => setStep('verification')} />;
            case 'verification':
                return <VerificationScreen onVerified={() => setStep('wallet-form')} />;
            case 'wallet-form':
                return <WalletForm onSubmitted={(address: string) => {
                    setWalletAddress(address);
                    setStep('success');
                }} />;
            case 'success':
                return <SuccessScreen walletAddress={walletAddress} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-4 flex items-center justify-center">
            <div className="bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl border-2 border-gray-700">
                <AnimatePresence mode="wait">
                    {/* AnimatePresence and motion from framer-motion are used to add smooth transitions
              when switching between the different steps. */}
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderStep()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

// --- Component for the Initial Welcome Screen ---
const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => (
    <div className="text-center">
        <Rocket className="w-16 h-16 text-teal-400 mx-auto mb-6 animate-bounce" />
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
            Airdrop Human Verification
        </h1>
        <p className="text-gray-400 text-lg mb-8">
            Welcome! To participate in our airdrop and receive your tokens, you must first complete a quick human verification. This helps us prevent bots and ensure a fair distribution.
        </p>
        <button
            onClick={onStart}
            className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
            Start Verification
        </button>
    </div>
);

// --- Component for the Verification Step (CAPTCHA) ---
const VerificationScreen: React.FC<VerificationScreenProps> = ({ onVerified }) => {
    const [captchaValue, setCaptchaValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    // Generate a simple CAPTCHA question (e.g., a basic math problem).
    const generateCaptcha = (): Captcha => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        return {
            question: `${num1} + ${num2}`,
            answer: num1 + num2
        };
    };

    const [captcha, setCaptcha] = useState<Captcha>(generateCaptcha());

    const handleVerify = (): void => {
        // Basic form validation for the CAPTCHA answer.
        if (parseInt(captchaValue) === captcha.answer) {
            setIsLoading(true);
            setError('');
            // Simulate a network request or processing time with a timeout.
            setTimeout(() => {
                setIsLoading(false);
                onVerified();
            }, 1500);
        } else {
            setError('Incorrect answer. Please try again.');
            setCaptchaValue('');
            setCaptcha(generateCaptcha()); // Generate a new CAPTCHA on failure.
        }
    };

    return (
        <div className="text-center">
            <ShieldCheck className="w-16 h-16 text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Human Verification</h2>
            <p className="text-gray-400 mb-6">
                Please solve the following problem to prove you&#39;re not a robot.
            </p>

            {/* CAPTCHA card with a clean design */}
            <div className="bg-gray-700 p-6 rounded-2xl mb-6 shadow-inner">
                <p className="text-2xl font-mono font-bold mb-4">{captcha.question} = ?</p>
                <input
                    type="text"
                    value={captchaValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCaptchaValue(e.target.value)}
                    className="w-full bg-gray-600 border-2 border-gray-500 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 text-center text-xl"
                    placeholder="Your Answer"
                    disabled={isLoading}
                />
                {error && <p className="text-red-400 mt-4 text-sm">{error}</p>}
            </div>

            <button
                onClick={handleVerify}
                disabled={isLoading}
                className="relative w-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="flex items-center justify-center"
                    >
                        <Loader2 className="w-5 h-5 mr-2" />
                        Verifying...
                    </motion.div>
                ) : (
                    'Verify'
                )}
            </button>
        </div>
    );
};

// --- Component for the Wallet Address Form ---
const WalletForm: React.FC<WalletFormProps> = ({ onSubmitted }) => {
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // Simple wallet address validation (e.g., check for a non-empty string).
        // In a real app, you would add more robust validation here.
        if (walletAddress.trim() === '') {
            setError('Please enter a valid wallet address.');
            return;
        }

        setIsLoading(true);
        setError('');

        // Simulate a submission to a backend API.
        // In a real application, this would be an API call (e.g., using `fetch`).
        setTimeout(() => {
            setIsLoading(false);
            onSubmitted(walletAddress);
        }, 2000);
    };

    return (
        <div className="text-center">
            <Wallet className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Airdrop Registration</h2>
            <p className="text-gray-400 mb-6">
                Verification complete! Now, please enter your wallet address to receive your tokens.
            </p>

            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <input
                        type="text"
                        value={walletAddress}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWalletAddress(e.target.value)}
                        className="w-full bg-gray-700 border-2 border-gray-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter your wallet address"
                        disabled={isLoading}
                    />
                    {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="flex items-center justify-center"
                        >
                            <Loader2 className="w-5 h-5 mr-2" />
                            Submitting...
                        </motion.div>
                    ) : (
                        'Submit Wallet'
                    )}
                </button>
            </form>
        </div>
    );
};

// --- Component for the Success Screen ---
const SuccessScreen: React.FC<SuccessScreenProps> = ({ walletAddress }) => (
    <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
        <p className="text-gray-400 text-lg mb-6">
            Your wallet address has been successfully submitted. You will receive your airdrop tokens shortly.
        </p>
        <div className="bg-gray-700 p-4 rounded-xl text-sm font-mono break-all">
            <p className="text-gray-400 mb-2">Submitted Address:</p>
            <p className="text-teal-300">{walletAddress}</p>
        </div>
    </div>
);



// "use client"
// import React, { useEffect } from 'react'
// import Lenis from 'lenis'
// import { PassportScoreWidget, usePassportScore } from "@passportxyz/passport-embed";
//
// const PASSPORT_API_KEY = "CFoiotZJ.pXXUvVhVBTx9nZUAvuCeryCF1hzFToDG";
// const PASSPORT_SCORER_ID = "11752";
//
// const Page = () => {
//     useEffect(() => {
//         const lenis = new Lenis();
//         function raf(time: number) {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         }
//         requestAnimationFrame(raf);
//     }, []);
//
//     const isDarkMode = true;
//
//     const userAddress= "0xA8F678cF2311e8575cd8b51E709e0B234896d75F";
//
//     const { passingScore } = usePassportScore({
//         apiKey: PASSPORT_API_KEY,
//         scorerId: PASSPORT_SCORER_ID,
//         address: userAddress
//     });
//
//     const signMessage = async (message: string): Promise<string> => {
//         const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//         return await window.ethereum.request({
//             method: "personal_sign",
//             params: [message, accounts[0]]
//         });
//     };
//
//     return (
//         <PassportScoreWidget
//             apiKey={PASSPORT_API_KEY}
//             scorerId={PASSPORT_SCORER_ID}
//             address={userAddress}
//             generateSignatureCallback={signMessage}
//             theme={{
//                 colors: { primary: "34, 197, 94", background: "255, 255, 255" },
//                 font: { family: { body: "Inter, sans-serif" } },
//                 radius: { widget: "12px", button: "8px" },
//                 transition: { speed: "0.2s" }
//             }}
//         />
//     )
// }
//
// export default Page