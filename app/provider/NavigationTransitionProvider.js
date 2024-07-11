"use client"
import Cursor from '@components/Cursor';
import Preloader from '@components/Preloader';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const NavigationTransitionProvider = ({ children }) => {
    const [preloader, setPreloader] = useState(true);
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
                            className='absolute top-0 z-10 left-0 w-screen h-[100svh] bg-black origin-bottom'
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <motion.div
                            className='absolute top-0 z-10 left-0 w-screen h-[100svh] bg-black dark:bg-white origin-top'
                            initial={{ scaleY: 1 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        />
                        {children}
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default NavigationTransitionProvider;
