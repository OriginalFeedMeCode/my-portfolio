"use client";
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import "./loco.css";

const Page = ({ children }) => {

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 1, duration: 1, ease: "backInOut" }}
        >
            {children}
        </motion.div>
    );
};

export default Page;
