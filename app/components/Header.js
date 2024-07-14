"use client";

import { Facebook, Instagram, Linkedin, PlusIcon, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import ThemeChanger from './ThemeChanger';
import { motion, AnimatePresence } from 'framer-motion';
import GridBackground from './GridBackground';

const Header = ({ path }) => {

    const [isOpen, setIsOpen] = useState(false);

    const menuLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Work",
            path: "/work"
        },
        {
            name: "Contact",
            path: "/contact"
        },
    ]

    return (
        <div className={`${isOpen ? 'flex flex-col h-screen w-screen' : ''}  fixed top-0 right-0 left-0 z-50`}>
            <div className='r-w backdrop-blur-sm h-max z-40 flex relative items-center justify-between gap-10 py-4 px-2  '>
                <PlusIcon size={18} className='absolute -bottom-[8.7px] z-40 -left-2' />
                <PlusIcon size={18} className='absolute -bottom-[8.7px] z-40 -right-2' />
                <div className='h-[1px] w-full bg-gray-200 dark:bg-gray-800 absolute bottom-0 left-0 right-0  '></div>
                <Link href={"/"} className=' duration-300 backdrop-blur-sm py-1 border-[1px] px-4 shadow-sm dark:shadow-white/10 border-gray-300 hover:shadow-xl dark:border-gray-700'>
                    <h2 className='text-xl font-thin'>Shoaib</h2>
                </Link>
                <div className='flex gap-5 items-center'>
                    <ThemeChanger />
                    <label className="swap swap-rotate">
                        <input
                            type="checkbox"
                            checked={isOpen}
                            onChange={() => setIsOpen(!isOpen)}
                        />
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                </div>
            </div>
            <AnimatePresence >
                {
                    isOpen && <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className='origin-bottom bg-white dark:bg-black relative w-full z-30 flex-1 backdrop-blur flex flex-col'>
                        <div className='flex-1 r-w z-30 py-4 h-max overflow-y-auto'>
                            {
                                menuLinks.map((item, index) => {
                                    return (

                                        <motion.div initial={{ opacity: 0, translateY: 100 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0 }} transition={{ delay: index * 0.1 }} className='py-4 border-b-2 mb-4' key={index}>
                                            <Link className={`${(path === item.path) ? 'text-blue-400' : 'hover:text-blue-800 duration-300'} text-5xl `} href={item.path}>{item.name}</Link>
                                        </motion.div>
                                    )
                                })
                            }


                        </div>
                        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0 }} className=' py-4 z-30 flex items-center gap-5 justify-start r-w border-t-2'>
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
                        <GridBackground />
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

export default Header;
