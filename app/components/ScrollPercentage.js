'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const ScrollPercentage = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div initial={{ opacity: 0, translateY: 100, rotate: -90 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 1, duration: .4, type: 'tween' }} className='text-xs fixed -right-9 bottom-24 h-max w-24  text-white mix-blend-difference '>
            Scroll: {scrollPercentage < 10 && 0}{Math.round(scrollPercentage)}%
        </motion.div>
    );
};

export default ScrollPercentage;
