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
                <div className='flex flex-row gap-4'>
                    {links.map(({ href, label}) => (
                        <Link key={href} className={`${isActive(href) ? styles['active'] : styles['inactive']} lg:text-lg text-base font-bold text-gray-900 inline-block py-1 cursor-pointer`} href={href}>
                            {label}
                        </Link>
                    ))}
                </div>
                <Link className={`inline-block cursor-pointer lg:text-lg text-base p-1 rounded-md text-gray-900 bg-gradient-to-r from-cyan-400 to-indigo-500 ${styles['background-animate']}`} href='https://drive.google.com/file/d/1NRiEVTDCSEcLudo95zl7Nzces14OUURf/view?usp=drive_link' target='_blank' rel='noreferrer'>
                    <div className='bg-gray-200 rounded-sm p-1'>
                        Resume
                    </div>
                </Link>
            </div>
        </header>
    );
}
