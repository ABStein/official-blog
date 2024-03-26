'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

const icons = [
    {
        href: 'https://github.com/ABStein',
        icon: faGithub,
        alt: 'Check out my Github'
    },
    {
        href: 'https://www.linkedin.com/in/andrew-stein-755b8b11a',
        icon: faLinkedin,
        alt: 'Connect with me on LinkedIn'
    },
]

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
        <header className='mx-auto pt-10 mb-6'>
            <div className='flex justify-center items-center px-6 md:px-14 lg:px-24 w-full'>
                <div className='flex flex-row'>
                    {links.map(({ href, label}) => (
                        <Link key={href} className={`${isActive(href) ? styles['active'] : styles['inactive']} md:text-lg text-sm text-gray-900 inline-block px-2 cursor-pointer mx-2`} href={href}>
                            {label}
                        </Link>
                    ))}
                </div>
                <Link className='bg-gray-900 text-gray-50 hover:bg-indigo-500 hover:text-gray-50 mx-2 p-2 inline-block cursor-pointer md:text-lg text-sm rounded-md nav-link' href='https://drive.google.com/file/d/1NRiEVTDCSEcLudo95zl7Nzces14OUURf/view?usp=drive_link' target='_blank' rel='noreferrer'>
                    Resume
                </Link>

                {icons.map(({icon, href, alt}, index) => (
                    <Link
                        href={href}
                        className='nav-link hover:text-indigo-500 text-gray-900 text-xl px-2 py-1 '
                        target='_blank'
                        key={index}
                        alt={alt}
                    >
                        <FontAwesomeIcon size='lg' icon={icon} />
                    </Link>
                ))}
            </div>
        </header>
    );
}
