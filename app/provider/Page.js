"use client";
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import "./loco.css";
import ScrollPercentage from '@components/ScrollPercentage';

const Page = ({ children }) => {

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: 'linear' }}
        >
            {children}
            <ScrollPercentage />
        </motion.div>
    );
};

export default Page;
