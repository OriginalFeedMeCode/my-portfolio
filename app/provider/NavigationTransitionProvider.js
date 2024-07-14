"use client"
import Cursor from '@components/Cursor';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Preloader from '@components/Preloader';
import ScrollPercentage from '@components/ScrollPercentage';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const NavigationTransitionProvider = ({ children }) => {
    const [preloader, setPreloader] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        if (pathName && pathName !== "/") {
            setPreloader(false);
        }
    }, [pathName]);

    const closePreloader = () => {
        setPreloader(false);
    };

    return (
        <div>
            <Cursor />
            {preloader ? (
                <Preloader functionToCall={closePreloader} />
            ) : (
                <AnimatePresence mode='wait'>
                    <motion.div key={pathName}>
                        <motion.div
                            className='absolute top-0 z-[9999] left-0 w-screen h-[100svh] bg-black dark:bg-white origin-bottom'
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <motion.div
                            className='absolute top-0 z-[9999] left-0 w-screen h-[100svh] bg-black dark:bg-white origin-top'
                            initial={{ scaleY: 1 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 0 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <Header path={pathName} />
                        {children}
                        <Footer />
                        <ScrollPercentage />
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default NavigationTransitionProvider;
