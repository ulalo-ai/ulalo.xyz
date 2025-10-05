"use client"
import React, { useEffect } from 'react'
import Header from '@/components/global/Header'
import Herosection, {Herosection2, Herosection3, JoinForm} from '@/components/global/Ambassador/Herosection'
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
            <Herosection2 />
            <Herosection3 />
            <JoinForm />
            <Footer />
        </div>
    )
}

export default Page