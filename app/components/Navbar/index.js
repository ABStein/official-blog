'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.scss';

const links = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/blog',
        label: 'Blog',
    }
]

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (href) => {
        // Special case for blog links to include all blog subpaths
        if (href.startsWith('/blog') && pathname.startsWith('/blog')) {
            return true;
        }
        // Special case for home page
        return pathname === href;
    };
    return (
        <header className='responsive-content-width pt-4'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-row'>
                    {links.map(({ href, label}) => (
                        <Link key={href} className={`${isActive(href) ? styles['active'] : styles['inactive']} lg:text-lg md:text-base text-sm text-gray-900 inline-block p-2 cursor-pointer`} href={href}>
                            {label}
                        </Link>
                    ))}
                </div>
                <Link className={`inline-block cursor-pointer lg:text-lg md:text-base text-sm rounded-md bg-gradient-to-r from-green-500 to-indigo-500 hover:from-indigo-500 hover:to-green-500 ${styles['background-animate']} p-2 text-white`} href='https://drive.google.com/file/d/1NRiEVTDCSEcLudo95zl7Nzces14OUURf/view?usp=drive_link' target='_blank' rel='noreferrer'>
                    Resume
                </Link>
            </div>
        </header>
    );
}
