'use client'
import { useRef, useEffect } from 'react';
export default function CurvedLine() {
    const path = useRef(null);
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId = null;
    useEffect(() => {
        setPath(progress);
    }, [])
    const setPath = (progress) => {
        const width = window.innerWidth * 0.7;
        path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
    }
    const lerp = (x, y, a) => x * (1 - a) + y * a
    const manageMouseEnter = () => {
        if (reqId) {
            cancelAnimationFrame(reqId)
            resetAnimation()
        }
    }
    const manageMouseMove = (e) => {
        const { movementY, clientX } = e;
        const pathBound = path.current.getBoundingClientRect();
        x = (clientX - pathBound.left) / pathBound.width;
        progress += movementY
        setPath(progress);
    }
    const manageMouseLeave = () => {
        animateOut();
    }
    const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        progress = lerp(progress, 0, 0.025);
        time += 0.2;
        setPath(newProgress);
        if (Math.abs(progress) > 0.75) {
            reqId = requestAnimationFrame(animateOut);
        }
        else {
            resetAnimation();
        }
    }
    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    }
    return (
        <div className="flex flex-col items-end w-full">
            <div className="h-[1px] relative w-full">
                <div onMouseEnter={() => { manageMouseEnter() }} onMouseMove={(e) => { manageMouseMove(e) }} onMouseLeave={() => { manageMouseLeave() }} className="h-10 w-full relative -top-5 one hover:h-[500px] hover:-top[250px]"></div>
                <svg className='w-full h-[500px] absolute -top-[250px]'>
                    <path className='stroke-current fill-none' ref={path}></path>
                </svg>
            </div>
        </div >
    )
}
