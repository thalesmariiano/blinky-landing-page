import type { Config } from 'tailwindcss';

export default<Partial<Config>> {
    theme: {
        extend: {
            colors: {
                blinkyBlue: '#00EEFE',
                blinkyGreen: '#00FEA6',
                blinkyDark: '#121212',
                blinkyLittleDark: '#191919',
                blinkyBege: '#EEECEA',
                blinkyLittleBege: '#F5F2F2'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            }
        }
    }
}