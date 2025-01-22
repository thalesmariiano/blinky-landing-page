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
            },
            dropShadow: {
                'blinkyIcon': '0 0 35px rgba(0, 238, 254, 0.25)',
            }
        }
    }
}