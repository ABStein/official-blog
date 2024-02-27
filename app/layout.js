import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

const poppins = Poppins({weight: ['400', '700', '800'], subsets: ['latin'], display: 'swap'});

export const metadata = {
    title: 'Andrew Stein',
    description: 'Andrew Stein is a software engineer and web developer based in Chicago. He specializes in building web applications and websites using modern technologies like React, Next.js, and Node.js.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`background-gradient ${poppins.className}`}>
                <Navbar />
                <Banner />
                {children}
            </body>
        </html>
    );
}
