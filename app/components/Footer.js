"use client"
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react'

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import GridBackground from './GridBackground';

const Footer = () => {
    const [isInView, setIsInView] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                setIsInView(entry.isIntersecting);
            });
        };
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
        });
        if (footerRef.current) {
            observer.observe(footerRef.current);
        }
        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={footerRef}
            className='relative h-[100svh] z-[999] '
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-0 h-[100svh] left-0 right-0 w-full bg-black  '>
                <GridBackground />
                <AnimatePresence>
                    {isInView && (
                        <div className='absolute w-full h-full flex flex-col  z-[999999]'>
                            <div className='r-w flex-1 flex items-start justify-center flex-col'>
                                <div>
                                    <h3 className='text-5xl text-white'>Lets Build Something </h3>
                                </div>
                            </div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=' py-4 z-30 flex items-center gap-5 justify-start r-w border-t-2'>
                                <Link href={"https://www.youtube.com/@ershoaibans"}>
                                    <Youtube size={16} strokeWidth={1} className='stroke-gray-500 ' />
                                </Link>
                                <Link href={"https://www.facebook.com/ershoaibans/"}>
                                    <Facebook size={16} strokeWidth={1} className='stroke-gray-500 ' />
                                </Link>
                                <Link href={"https://www.instagram.com/ershoaibans/"}>
                                    <Instagram size={16} strokeWidth={1} className='stroke-gray-500 ' />
                                </Link>
                                <Link href={"https://x.com/ErShoaibAns"}>
                                    <Twitter size={16} strokeWidth={1} className='stroke-gray-500 ' />
                                </Link>
                                <Link href={"https://www.linkedin.com/in/er-shoaib/"}>
                                    <Linkedin size={16} strokeWidth={1} className='stroke-gray-500 ' />
                                </Link>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Footer
