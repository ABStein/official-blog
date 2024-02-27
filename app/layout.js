import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const poppins = Poppins({weight: ['400', '700', '800'], subsets: ['latin'], display: 'swap'});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`background-gradient ${poppins.className}`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
