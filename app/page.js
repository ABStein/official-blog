import Link from 'next/link';
import { getPosts } from './lib/initSupabase';
import styles from './Homepage.module.scss';
import formattedDate  from './lib/dateFormatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default async function HomePage() {
    // get all posts
    const posts = await getPosts();
    // display latest posts
    const getLatestPosts = (posts) => {
        posts.sort((a, b) => {
            const postB = new Date(b.created_at);
            const postA = new Date(a.created_at);
            return postB - postA;
        });
        return posts;
    }
    // get latest posts
    const latestPosts = getLatestPosts(posts);
    return (
        <main className={`py-16 lg:py-24 ${styles['blob-desktop']}`}>
            <div className='responsive-content-width'>
                <div className='max-w-2xl w-full'>
                    <h1 className='text-4xl font-semibold text-gray-900'>
                        Hey there! I'm <span className='text-indigo-500 font-bold'>Andrew</span>
                    </h1>
                    <p className='text-xl text-gray-900 pt-6'>
                        a Web Developer from Chicago, Illinois. I am passionate about building accessible, performant, and responsive web experiences, but I am even more passionate about growing and learning on this journey through the wild world of web development.
                    </p>
                </div>

                <div className='pt-14 max-w-2xl'>
                    <h2 className='text-xl font-medium my-2'>Recently posted</h2>
                    <div className='my-6 mx-auto grid grid-cols-1 gap-4'>
                        {latestPosts.slice(0, 4).map((post) => (
                            <div key={post.id} className='rounded-2xl p-4 lg:hover:bg-gray-300 lg:hover:bg-opacity-30 nav-link'>
                                <Link href={`/blog/${post.slug}/`}>
                                    <p className='pb-4 text-indigo-500'>{formattedDate(post.created_at)}</p>
                                    <h3 className='text-xl font-semibold'>{post.title}</h3>
                                    <p className='pt-4'>
                                        {post.description}
                                    </p>
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
            </div>
        </main>
    );
}
