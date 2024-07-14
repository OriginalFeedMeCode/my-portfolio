/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {};
export const plugins = [require('daisyui')];
export const daisyui = {
  themes: ["light", "black"],
  darkTheme: "black",
}
export const darkMode = ['class', '[data-theme="black"]']
