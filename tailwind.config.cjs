const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],

    theme: {
        fontFamily: {
            'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
            'serif': [...defaultTheme.fontFamily.serif],
            'mono': [...defaultTheme.fontFamily.mono]
        },

        extend: {
            colors: {
                'red-vibrant': '#ff0000'
            },
            
            typography: {
                DEFAULT: {
                    css: {
                        'code::before': {
                            content: '',
                        },
                        'code::after': {
                            content: '',
                        },
                    },
                },
            },
        }
    },
    
    // extend: {
    //     typography: {
    //         DEFAULT: {
    //             css: {
    //                 img: {
    //                     margin: 'auto'
    //                 },
    //                 'code::before': {
    //                     content: '',
    //                 },
    //                 'code::after': {
    //                     content: '',
    //                 },
    //                 code: {
    //                     // TODO: Ask on tailwind typography repo how you access these properly.
    //                     // backgroundColor: colors.gray[100]
    //                     // fontWeight: '16px',
    //                     fontSize: '16px'
    //                 },
    //             },
    //         },
    //     },
    // },

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};