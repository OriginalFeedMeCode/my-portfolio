import React, { useEffect, useState, useRef } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0, sx: 0, sy: 0 });
    const requestRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const animate = () => {
            setCurrentPosition((prevPos) => {
                const dx = position.x - prevPos.x;
                const dy = position.y - prevPos.y;
                return {
                    x: prevPos.x + dx * 0.1,
                    y: prevPos.y + dy * 0.1,
                    sx: prevPos.x + dx * 0.3,
                    sy: prevPos.y + dy * 0.3,
                };
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [position]);

    return (
        <>
            <div
                className='hidden md:flex fixed w-20 h-20 rounded-full z-0 pointer-events-none border dark:border-gray-800'
                style={{ top: currentPosition.y, left: currentPosition.x, transform: 'translate(-50%, -50%)' }}
            ></div>
            <div
                className='hidden md:flex fixed rounded-full w-1 h-1 z-0 bg-current mix-blend-difference pointer-events-none'
                style={{ top: currentPosition.sy, left: currentPosition.sx, transform: 'translate(-50%, -50%)' }}
            ></div>
        </>
    );
};

export default Cursor;
