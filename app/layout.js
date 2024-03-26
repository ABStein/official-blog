import { Poppins } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
//https://fontawesome.com/docs/web/use-with/react/use-with
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const poppins = Poppins({weight: ['100', '200', '300', '400','500', '600', '700', '800', '900',], subsets: ['latin'], display: 'swap'});

export const metadata = {
    title: 'Andrew Stein',
    description: 'Andrew Stein is a software engineer and web developer based in Chicago. He specializes in building web applications and websites using modern technologies like React, Next.js, and Node.js.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${poppins.className}`}>
                <NextTopLoader
                    // color is gray-900
                    color='#212121'
                    height={4}
                    showSpinner={false}
                />
                <Navbar />
                {children}
                <Analytics />
                <Footer />
            </body>
        </html>
    );
}
