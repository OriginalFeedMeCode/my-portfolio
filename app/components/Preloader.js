import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';

const Preloader = ({ functionToCall }) => {
    const counter3Ref = useRef(null);
    useEffect(() => {
        const counter3 = counter3Ref.current;
        for (let j = 0; j < 2; j++) {
            for (let i = 0; i < 10; i++) {
                const div = document.createElement('div');
                div.className = 'num';
                div.textContent = i;
                counter3.appendChild(div);
            }
        }
        const finalDiv = document.createElement('div');
        finalDiv.className = 'num';
        finalDiv.textContent = '0';
        counter3.appendChild(finalDiv);
        function animate(counter, duration, delay = 0) {
            const numHeight = counter.querySelector('.num').clientHeight;
            const totalDistance = (counter.querySelectorAll('.num').length - 1) * numHeight;
            gsap.to(counter, { y: -totalDistance, duration: duration, delay: delay, ease: 'power2.inOut' });
        }
        animate(counter3, 5);
        animate(document.querySelector('.counter-2'), 6);
        animate(document.querySelector('.counter-1'), 2, 4);


        gsap.fromTo(".inner-circle",
            { scale: 0 },
            { scale: 1, delay: 1, duration: 1, ease: "power4.out" }
        );

        gsap.fromTo(".small-circle",
            { scale: 0 },
            { scale: 1, duration: 0.5, ease: "power4.out", delay: 1.5 }
        );

        gsap.to(".outer-circle", {
            rotation: 360,
            duration: 1.5,
            delay: 2,
            repeat: 2,
            ease: "power2.inOut",
        });

        gsap.to(".outer-circle", {
            scale: 0,
            delay: 6.5,
            ease: "power2.inOut",
        });



        gsap.to(".digit", {
            top: "-150px",
            stagger: {
                amount: 0.25
            },
            delay: 6,
            duration: 1,
            ease: "power4.inOut",
        });
        gsap.fromTo(".loader-1",
            { width: 0 },
            { width: "200px", duration: 5, ease: "power2.inOut" }
        );

        gsap.fromTo(".loader-2",
            { width: 0 },
            { width: "100px", duration: 5, delay: 1.9, ease: "power2.inOut" }
        );

        gsap.to(".loader", {
            background: "none",
            delay: 6,
            duration: 0.1,
        });

        gsap.to(".loader-1", {
            rotate: 90,
            y: -50,
            duration: 0.5,
            delay: 6,
        });
        gsap.to(".loader-2", {
            x: -75,
            y: 75,
            duration: 0.5,
            delay: 6,
        });

        gsap.to(".loader", {
            scale: 60,
            duration: 1,
            delay: 7,
            ease: "power2.inOut"
        });

        gsap.to(".loader", {
            rotate: 45,
            y: 700,
            x: 3000,
            duration: 1,
            delay: 7,
            ease: "power2.inOut",
            onComplete: (() => { functionToCall() })
        });




    }, []);

    const [index, setIndex] = useState(0);

    const words = [
        "Hello",
        "Hola",
        "Bonjour",
        "Ciao",
        "Konnichiwa",
        "Annyeong",
        "أسلم أ عليكم",
        "नमस्ते"
    ];

    useEffect(() => {
        if (index === words.length - 1) return;
        const duration = 6000 / (words.length - 1);
        const timer = setTimeout(() => {
            setIndex(index + 1);
        }, duration);
        return () => clearTimeout(timer);
    }, [index]);


    return (
        <div className='loading-screen fixed top-0 right-0 bg-white dark:bg-black w-screen h-[100svh] text-current cursor-wait'>
            <div className='outer-circle fixed left-2 top-2 w-36 md:w-48 h-36 md:h-48 rounded-full border dark:border-gray-700 flex items-center justify-center'>
                <div className=' inner-circle scale-0 w-1/2 h-1/2 rounded-full border dark:border-gray-700'></div>
                <div className=' small-circle scale-0 w-1/4 h-1/4 absolute top-0 rounded-full border dark:border-gray-700'></div>
            </div>
            <div className='px-2 border-y border-y-[0.5px] border-current top-4 md:top-[50px] right-4 md:right-[50px] text-gray-600 py-4 fixed text-end text-2xl md:text-3xl pointer-events-none w-[200px] md:w-[400px]'>
                <AnimatePresence mode='wait' >
                    <motion.h3 initial={{ opacity: 0, translateY: -10 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: 10 }} key={index}>
                        {words[index]}
                    </motion.h3>
                </AnimatePresence>
            </div>
            <h2 className='text-xs pointer-events-none bottom-2 right-2 text-current fixed'>Designed & Developed by Er Shoaib</h2>
            <div className="loader absolute top-1/2 left-1/2 w-[300px] h-[50px] r-t flex bg-[rgb(80,80,80)] ">
                <div className="loader-1 bar relative bg-black dark:bg-white h-[50px]"></div>
                <div className="loader-2 bar relative bg-black dark:bg-white h-[50px]"></div>
            </div>
            <div className="counter pointer-events-none font-normal fixed left-[50px] bottom-[50px] flex h-[100px] text-[100px] leading-[102px] polygon">
                <div className="counter-1 digit relative top-[-15px]">
                    <div className="num">0</div>
                    <div className="num num1offset1">1</div>
                </div>
                <div className="counter-2 digit relative top-[-15px]">
                    <div className="num">0</div>
                    <div className="num num1offset2">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                </div>
                <div className="counter-3 digit relative top-[-15px]" ref={counter3Ref}>
                    <div className="num">0</div>
                    <div className="num num1offset2 relative right-[-10px]">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
