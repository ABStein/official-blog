import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const icons = [
    {
        href: 'https://github.com/ABStein',
        icon: faGithub,
    },
    {
        href: 'https://medium.com/@ABStein',
        icon: faMedium,
    },
    {
        href: 'https://www.linkedin.com/in/andrew-stein-755b8b11a',
        icon: faLinkedin,
    },
]

export default function Footer() {
    return (
        <footer className='py-4 mx-auto px-4 md:px-12'>
            <div className='mx-auto w-full max-w-sm'>
                <div className='contact-info px-4 pt-4 pb-4 flex justify-center items-center flex-col mx-2 my-2'>
                    <div className='flex flex-row mt-8'>
                        {icons.map(({icon, href}, index) => (
                            <Link
                                href={href}
                                className='nav-link hover:text-indigo-500 text-gray-900 text-xl px-2 py-1 '
                                target='_blank'
                                key={index}
                            >
                                <FontAwesomeIcon icon={icon} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
