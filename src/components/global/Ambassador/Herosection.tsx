"use client";
import React, {useEffect, useState} from "react";
import { createClient } from '@supabase/supabase-js';
import {useTranslations} from "next-intl";
import Link from "next/link";

type AvailabilityOption = "Daily" | "Weekly" | "Monthly";

interface FormData {
    email: string;
    location: string;
    reason: string;
    note: string;
    availability: AvailabilityOption;
}

interface FormErrors {
    email?: string;
    location?: string;
    reason?: string;
    availability?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mgsybbcgfpqleqimaelv.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_JDbbK6HDvvfPQStykgo9JQ_FWpnWaXE";

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const JoinForm = () => {
    const t = useTranslations("");
    const [, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [selected, setSelected] = useState<AvailabilityOption>("Daily");
    const [formData, setFormData] = useState<FormData>({
        email: '',
        location: '',
        reason: '',
        note: '',
        availability: 'Daily'
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const options: AvailabilityOption[] = ["Daily", "Weekly", "Monthly"];

    // Validation function
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Email validation (mandatory)
        if (!formData.email.trim()) {
            newErrors.email = t('feature.joinForm.errors.emailRequired') || 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('feature.joinForm.errors.emailInvalid') || 'Invalid email format';
        }

        // Location validation (mandatory)
        if (!formData.location.trim()) {
            newErrors.location = t('feature.joinForm.mandatory') || 'Location is required';
        }

        // Reason validation (mandatory)
        if (!formData.reason.trim()) {
            newErrors.reason = t('feature.joinForm.mandatory') || 'Reason is required';
        } else if (formData.reason.trim().length < 10) {
            newErrors.reason = t('feature.joinForm.errors.reasonTooShort') || 'Please provide at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setSubmitStatus('idle');

        try {
            const { data, error } = await supabase
                .from('ulalo_ambassador')
                .insert([
                    {
                        email: formData.email.trim(),
                        location: formData.location.trim(),
                        reason: formData.reason.trim(),
                        note: formData.note.trim() || null, // Optional field
                        availability: selected
                    }
                ])
                .select();

            if (error) {
                console.error('Supabase error:', error);
                setSubmitStatus('error');
                throw error;
            }

            console.log('Successfully submitted:', data);
            setSubmitStatus('success');

            // Reset form
            setFormData({
                email: '',
                location: '',
                reason: '',
                note: '',
                availability: 'Daily'
            });
            setSelected('Daily');
            setErrors({});

            // Optional: Show success message for a few seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            id="token"
            className="w-full relative bg-[#02A72B] h-auto"
        >
            <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-[#02A72B] to-transparent z-10"/>
            <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-[#02A72B] to-transparent z-10"/>

            <form
                onSubmit={handleSubmit}
                className={'container mx-auto max-w-[88rem] px-5 md:px-8 py-[48px] md:py-[100px] relative flex h-full flex-col items-start justify-center gap-y-5 z-20'}
            >
                <h1 className={'text-white font-[900] text-[32px] md:!text-[72px]'}>
                    <b>{t("feature.joinTitle")}</b>
                </h1>
                <p className={'text-white font-[500] text-[16px] mb-[32px] md:!text-[24px]'}>
                    {t("feature.joinSubtitle")}
                </p>

                {/* Email Field (Mandatory) */}
                <label className={'text-white'}>
                    {t('feature.joinForm.email')} <span className="text-red-300">*</span>
                </label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full md:w-[50%] bg-white border-2 border-gray-100 text-gray-800 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005716] text-sm"
                    placeholder="your@email.com"
                    disabled={isLoading}
                />
                {errors.email && (
                    <span className="text-red-300 text-sm">{errors.email}</span>
                )}

                {/* Location Field (Mandatory) */}
                <label className={'text-white'}>
                    {t('feature.joinForm.location')} <span className="text-red-300">*</span>
                </label>
                <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full md:w-[50%] bg-white border-2 border-gray-100 text-gray-800 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005716] text-sm"
                    placeholder=""
                    disabled={isLoading}
                />
                {errors.location && (
                    <span className="text-red-300 text-sm">{errors.location}</span>
                )}

                {/* Reason Field (Mandatory) */}
                <label className={'text-white'}>
                    {t('feature.joinForm.reason')} <span className="text-red-300">*</span>
                </label>
                <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    className="w-full md:w-[50%] bg-white border-2 border-gray-100 text-gray-800 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005716] text-sm"
                    placeholder={t('feature.joinForm.explain')}
                    rows={7}
                    disabled={isLoading}
                />
                {errors.reason && (
                    <span className="text-red-300 text-sm">{errors.reason}</span>
                )}

                {/* Note Field (Optional) */}
                <label className={'text-white'}>
                    {t('feature.joinForm.note')} <span className="text-gray-300 text-sm">({t('feature.joinForm.optional') || 'Optional'})</span>
                </label>
                <textarea
                    value={formData.note}
                    onChange={(e) => setFormData({...formData, note: e.target.value})}
                    className="w-full md:w-[50%] bg-white border-2 border-gray-100 text-gray-800 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005716] text-sm"
                    placeholder={t('feature.joinForm.explain')}
                    rows={7}
                    disabled={isLoading}
                />

                {/* Availability Selection (Mandatory) */}
                <div className="w-full md:w-[25vw] border mt-7 rounded-xl shadow-sm overflow-hidden">
                    <div className="p-4 border-b bg-gray-50">
                        <h2 className="font-semibold text-lg">
                            {t('feature.joinForm.availability') || 'Availability to Attend Meetings'} <span className="text-red-500">*</span>
                        </h2>
                    </div>

                    <div className="divide-y">
                        {options.map((option) => (
                            <label
                                key={option}
                                className={`flex items-center justify-between px-4 py-3 cursor-pointer ${
                                    selected === option ? "bg-white" : "bg-gray-100 hover:bg-gray-50"
                                }`}
                            >
                                <span className="text-gray-800 font-medium">{option}</span>
                                <input
                                    type="radio"
                                    name="availability"
                                    value={option}
                                    checked={selected === option}
                                    onChange={() => {
                                        setSelected(option);
                                        setFormData({...formData, availability: option});
                                    }}
                                    className="form-radio text-green-600 focus:ring-green-500"
                                    disabled={isLoading}
                                />
                            </label>
                        ))}
                    </div>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                    <div className="w-full md:w-[50%] bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
                        {t('feature.success') || 'Application submitted successfully!'}
                    </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                    <div className="w-full md:w-[50%] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
                        {t('feature.error') || 'Something went wrong. Please try again.'}
                    </div>
                )}

                <button
                    type={'submit'}
                    disabled={isLoading}
                    className="bg-[#fff] text-[#005716] text-[12px] md:text-[16px] font-openSans_Medium leading-[23.856px] px-3 py-2 rounded-[12px] mt-24 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                >
                    {isLoading ? (t("feature.loading") || 'Submitting...') : t("feature.joinAction")}
                </button>
            </form>

            <section
                style={{backgroundImage: `url(/image/bg.png)`, backgroundSize: "cover", opacity: 0.7}}
                className="top-0 left-0 absolute w-full h-full bg-[#02A72B]"
            />
        </section>
    );
};

export const Herosection3 = () => {
    const t = useTranslations("");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        console.log(isMobile)
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            id="token" className="w-full relative bg-[#005716] h-auto">
            <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-[#005716] to-transparent z-10"/>
            <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-[#005716] to-transparent z-10"/>
            <div
                className={'container mx-auto max-w-[88rem]  px-5 md:px-8 py-[48px] md:py-[100px] relative flex h-full flex-col items-start justify-center gap-y-5 z-20'}>

                <h1 className={'text-white font-[900] text-[32px] md:!text-[72px]'}>
                    <b>
                        {t("feature.heroTitle")}
                    </b>
                </h1>
                <p className={'text-white font-[500] text-[16px] md:!text-[24px]'}>
                    {t("feature.heroSubtitle")}
                </p>

                <div className={'md:mt-10 mt-0 flex flex-col space-y-10 items-center justify-between !py-10 w-full'}>
                    <div
                        className={'flex md:flex-row flex-col gap-y-16 md:gap-y-0 items-center gap-x-24 justify-between w-full'}>
                        <CardItem
                            index={1}
                            title={t('feature.item1Title')}
                            text={t('feature.item1Text')}
                        />
                        <CardItem
                            index={2}
                            title={t('feature.item2Title')}
                            text={t('feature.item2Text')}
                        />
                        <CardItem
                            index={3}
                            title={t('feature.item3Title')}
                            text={t('feature.item3Text')}
                        />
                    </div>
                </div>


            </div>
            <section style={{backgroundImage: `url(/image/bg.png)`, backgroundSize: "cover", opacity: 0.7}}
                     className="top-0 left-0 absolute w-full h-full bg-[#005716]">
            </section>
        </section>
    );
};

export const Herosection2 = () => {
    const t = useTranslations("");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        console.log(isMobile)
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            id="token" className="w-full relative bg-[#02A72B] h-auto">
            <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-[#02A72B] to-transparent z-10"/>
            <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-[#02A72B] to-transparent z-10"/>
            <div
                className={'container mx-auto max-w-[88rem]  px-5 md:px-8 py-[48px] md:py-[100px] relative flex h-full flex-col items-start justify-center gap-y-5 z-20'}>

                <h1 className={'text-white font-[900] text-[32px] md:!text-[72px]'}>
                    <b>
                        {t("feature.ambassador.hero2Title")}
                    </b>
                </h1>
                <p className={'text-white font-[500] text-[16px] md:!text-[24px]'}>
                    {t("feature.ambassador.hero2Subtitle")}
                </p>

                <div className={'md:mt-10 mt-0 flex flex-col space-y-10 items-center justify-between !py-10 w-full'}>
                    <div
                        className={'flex md:flex-row flex-col gap-y-16 md:gap-y-0 items-center gap-x-24 justify-between'}>
                        <CartItem
                            text={t('feature.ambassador.why1')}
                        />
                        <CartItem
                            text={t('feature.ambassador.why2')}
                        />
                    </div>
                    <div
                        className={'flex md:mt-0 !mt-12 md:mb-0 !mb-6 md:flex-row flex-col gap-y-16 md:gap-y-0 items-center  gap-x-12 justify-between'}>
                        <img src={'/image/ulalo-token.png'} alt="Logo" className={'w-[132px] h-auto'}/>
                    </div>
                    <div
                        className={'flex md:flex-row flex-col gap-y-16 md:gap-y-0 items-center  gap-x-24 justify-between'}>
                        <CartItem
                            text={t('feature.ambassador.why3')}
                        />
                        <CartItem
                            text={t('feature.ambassador.why4')}
                        />
                    </div>
                </div>


            </div>
            <section style={{backgroundImage: `url(/image/bg.png)`, backgroundSize: "cover", opacity: 0.7}}
                     className="top-0 left-0 absolute w-full h-full bg-[#02A72B]">
            </section>
        </section>
    );
};

interface CartItemProps {
    text: string;
    width?: number;
}

interface ItemProps {
    title: string;
    text: string;
    index: number;
}

export function CardItem({title, text, index}: ItemProps) {
    return <div
        className="p-[3px] rounded-[1rem] flex-1"
        style={{
            background: "linear-gradient(90deg, #05931F 0%, #22D243 100%)",
            display: "inline-block",
        }}
    >
        <div
            className="flex flex-col items-start gap-y-5 bg-[#02831D] text-white font-semibold px-3 py-5 rounded-[calc(1rem-3px)] w-full h-full transition-transform hover:scale-[1.02]"
        >
            <div className={'flex items-center justify-start gap-x-4'}>
                <div
                    className={'p-4 bg-white text-[#02831D] flex font-bold items-center justify-center rounded-[8px] w-12 h-12'}>
                    {index}
                </div>
                <b>
                    {title}
                </b>
            </div>
            <span className={`text-[1rem] flex-1 text-start font-normal leading-tight`}
                  dangerouslySetInnerHTML={{__html: text}}/>
        </div>
    </div>;
}

export function CartItem({text, width = 330}: CartItemProps) {
    return <div
        className="p-[3px] rounded-[1rem]"
        style={{
            width: width + "px",
            background: "linear-gradient(90deg, #05931F 0%, #22D243 100%)",
            display: "inline-block",
        }}
    >
        <button
            className="flex items-center gap-y-3 gap-x-5 bg-[#02831D] text-white font-semibold p-2 rounded-[calc(1rem-3px)] w-full h-full transition-transform hover:scale-[1.02]"
        >
            <span className={`text-[1.12rem] flex-1 text-center leading-tight`}
                  dangerouslySetInnerHTML={{__html: text}}/>
        </button>
    </div>;
}

const Herosection = () => {
    const t = useTranslations("");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        console.log(isMobile)
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            id="token" className="w-full relative bg-[#005716] h-[100vh]">
            <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-[#005716] to-transparent z-10"/>
            <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-[#005716] to-transparent z-10"/>
            <div
                className={'container mx-auto max-w-[88rem]  px-5 md:px-8 py-[48px] md:py-[100px] relative flex h-full flex-col items-start justify-center gap-y-5 z-20'}>

                <h1 className={'text-white font-[900] text-[36px] md:!text-[72px]'}>
                    <b>
                        {t("feature.ambassador.heroTitle")}
                    </b>
                </h1>
                <p className={'text-white font-[500] text-[18px] md:!text-[24px]'}>
                    {t("feature.ambassador.heroSubtitle")}
                </p>

                <img src={'/image/ambassador.png'} className={'mt-24 !w-[2690px] h-auto'} alt={''} />

                <Link
                    href={"https://ulalo.gitbook.io/ulalo-whitepaper"}
                    target="_blank"
                    className="bg-[#1BE866] text-[#005716] text-[16px] md:text-[24px] font-openSans_Medium leading-[23.856px] px-[32px] py-[24px] rounded-[12px] mt-24"
                >
                    {t("feature.join")}
                </Link>


            </div>
            <section style={{backgroundImage: `url(/image/bg.png)`, backgroundSize: "cover", opacity: 0.7}}
                     className="top-0 left-0 absolute w-full h-full bg-[#005716]">
            </section>
        </section>
    );
};

export default Herosection;

