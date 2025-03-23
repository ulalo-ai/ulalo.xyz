"use client"
import React, { useEffect } from 'react'
import Header from '@/components/global/Header'
import Herosection from '@/components/global/Ambassador/Herosection'
import TextSection from '@/components/global/Ambassador/TextSection'
import Footer from '@/components/global/Footer'
import Lenis from 'lenis'

const Page = () => {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <div>
            <Header />
            <Herosection />
            <TextSection />
            <Footer />
        </div>
    )
}

export default Page