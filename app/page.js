import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from './lib/initSupabase';
// import styles from './Homepage.module.scss';
import dateFormatter from '@/app/lib/utils/dateFormatter';
import getLatestPosts from '@/app/lib/utils/getLatestPosts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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

export default async function HomePage() {
    // get all posts
    const posts = await getPosts();
    // get latest posts
    const latestPosts = getLatestPosts(posts);
    return (
        <main className='py-16 lg:py-24'>
            <div className='responsive-content-width'>
                <div className='grid lg:grid-cols-8 md:grid-cols-6'>
                    <div className='lg:col-span-6 md:col-span-4 pb-4'>
                        <h1 className='text-4xl font-semibold text-gray-900'>
                            Hey there! I'm <span className='text-indigo-500 font-bold'>Andrew</span>
                        </h1>
                        <p className='lg:text-xl text-lg text-gray-900 pt-6'>
                            A Web Developer from Chicago, Illinois. I am passionate about building accessible, performant, and responsive web experiences, but I am even more passionate about growing and learning on this journey through the wild world of web development.
                        </p>
                        <div className='mt-2 inline-block'>
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
                    </div>
                    <div className='lg:col-span-2 md:col-span-2 md:block hidden'>
                        <div className='inline-block'>
                            <Image
                                src='/headshot_full.png'
                                alt='Andrew Stein'
                                width={300}
                                height={300}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
                <div className='grid gap-12 lg:grid-cols-10'>
                    <div className='lg:col-span-7'>
                        <h3 className={`text-xl font-semibold my-2 underline`}>Recently posted</h3>
                        <div className='my-6 mx-auto grid grid-cols-1 gap-9'>
                            {latestPosts.slice(0, 4).map((post) => (
                                <div key={post.id} className='nav-link group border-b-gray-300 pb-4 border-b-2'>
                                    <Link href={`/blog/${post.slug}/`}>
                                        <p className='pb-4 text-gray-900'>{dateFormatter(post.created_at)}</p>
                                        <h3 className='group-hover:text-sky-600 text-lg font-semibold'>{post.title}</h3>
                                        <p className='pt-4'>
                                            {post.description}
                                        </p>
                                        <div className='flex items-center pt-4'>
                                            <span>Read more</span>
                                            <FontAwesomeIcon icon={faArrowRight} className='text-indigo-500 ml-2 transition-transform group-hover:translate-x-1' />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <Link href='/blog/' className='text-indigo-500 font-semibold inline-block group'>
                            <div className='flex justify-center items-center'>
                                <span>View all posts</span>
                                <FontAwesomeIcon icon={faArrowRight} className='text-indigo-500 ml-2 transition-transform group-hover:translate-x-1' />
                            </div>
                        </Link>
                    </div>

                    <aside className='lg:pt-14 lg:col-span-3'>
                        <h3 className='text-xl font-semibold my-2 underline'>Check out some of my work</h3>
                        <div className='my-6 mx-auto grid grid-cols-1 gap-9'>
                            <div className='nav-link group border-b-gray-300 pb-4 border-b-2'>
                                <Link href='/projects/careers-redesign'>
                                    <h3 className='group-hover:text-sky-400 text-lg font-semibold'>Sprout Social Careers Redesign</h3>
                                    <p className='pt-4'>
                                        Redesigned the Sprout Social careers site using React, Next.js, and Storybook.js to create a more modern and accessible experience for job seekers.
                                    </p>
                                    <div className='flex items-center pt-4'>
                                        <span>Check it out</span>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-indigo-500 ml-2 transition-transform group-hover:translate-x-1' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
