"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export default function Paragraph({ paragraph, className }) {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <motion.p
            ref={container}
            className={className + " flex flex-wrap leading-none"}
            style={{ opacity }}
        >
            {paragraph}
        </motion.p>
    )
}