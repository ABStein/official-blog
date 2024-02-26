import Link from 'next/link';
import Image from 'next/image';
import computerSvg from '../../../public/programming.svg';

export default function Navbar() {
    return (
        <header className='mx-auto py-6 text-neutral-50'>
            <div className='flex justify-between items-center px-6 md:px-14 lg:px-24 w-full'>
                <Link href='/'>
                    <div className='text-lg font-bold nav-link hover:text-red-500 block px-2 py-1 cursor-pointer'>
                        <Image src={computerSvg} alt='computer' width={80} height={80} className='rounded-full bg-secondary' />
                    </div>
                </Link>
                <div className='flex flex-row'>
                    <Link href='/projects'>
                        <span className='nav-link text- hover:text-red-500 block px-2 py-1 cursor-pointer'>
                            Projects
                        </span>
                    </Link>
                    <Link href='/blog/posts'>
                        <span className='nav-link hover:text-red-500 block px-2 py-1 cursor-pointer'>
                            Blog
                        </span>
                    </Link>
                    <Link href='/contact'>
                        <span className='nav-link hover:text-red-500 block px-2 py-1 cursor-pointer'>
                            Contact
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
