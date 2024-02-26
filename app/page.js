import Layout from './layout';
import Image from 'next/image';
import computerSvg from '../public/programming.svg';

export default function HomePage() {
    return (
            <section className='lg:pt-12 pt-8 pb-40'>
                <div className='mx-auto lg:py-12 max-w-7xl'>
                    <div className='flex lg:flex-row flex-col justify-between'>
                        <div className='flex flex-col px-6 self-center lg:text-left lg:pt0 pt-8 max-w-xl'>
                            <h2 className='lg:text-5xl text-3xl font-bold text-neutral-50'>
                                Hi, I am Andrew, Software Developer
                            </h2>
                            <p className='text-neutral-50 pt-6'>
                                I am is passionate Software Engineer who lives
                                in Chicago. Some of my favorite things in tech
                                are Node.js, Ruby, and a passion for all things React and Next.js.
                            </p>
                            <a
                                className='nav-link bg-neutral-50 text-slate-800 lg:text-xl mt-10 mb-4 lg:w-64 sm:w-48 py-4 px-4 rounded text-center block hover:bg-slate-900 hover:text-neutral-50'
                                href='https://drive.google.com/file/d/1Eyzk_0yh3L02jvqIwty2K03oAK09CcPD/view?usp=sharing'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Checkout My Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    );
}
