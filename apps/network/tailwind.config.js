module.exports = {
    prefix: "network--",
    purge: [],
    darkMode: false, // or 'media' or 'class'
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // JS/TS 파일 경로
        "./src/styles/**/*.{css}", // CSS 파일 경로 추가
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
