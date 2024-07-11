'use client';

import React, { useState, useEffect } from 'react';

const ThemeChanger = () => {

    const [isBlackTheme, setIsBlackTheme] = useState(false);

    useEffect(() => {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsBlackTheme(prefersDarkScheme);
        document.documentElement.setAttribute('data-theme', prefersDarkScheme ? 'black' : 'light');
    }, []);

    const toggleTheme = () => {
        const newTheme = isBlackTheme ? 'light' : 'black';
        setIsBlackTheme(!isBlackTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };
    return (
        <label className="flex cursor-pointer items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={toggleTheme}
                className={`theme-icon one ${isBlackTheme ? 'active' : ''}`}>
                <circle cx="12" cy="12" r="5" />
                <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                />
            </svg>
            <input
                type="checkbox"
                checked={isBlackTheme}
                onChange={toggleTheme}
                className="toggle theme-controller one"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={toggleTheme}
                className={`theme-icon one ${!isBlackTheme ? 'active' : ''}`}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        </label>
    );
};

export default ThemeChanger;
