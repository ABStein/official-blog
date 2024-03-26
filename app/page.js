import Link from 'next/link';
import { getPosts } from './lib/initSupabase';
import AnimatedComponent from './components/AnimatedComponent';
import styles from './Homepage.module.scss';

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
        <div className={`lg:pt-12 pt-8 ${styles['blob-desktop']}`}>
            <div className='responsive-content-width'>
                <div className='lg:px-24 px-6'>
                    <section className='max-w-10/12 mx-auto'>
                        <h1 className='md:text-center lg:text-6xl text-3xl text-gray-900'>
                            Hey there! I'm <AnimatedComponent word='Andrew.' />
                        </h1>
                        <p className='md:text-left lg:text-4xl md:text-2xl sm:text-xl text-gray-900 md:pt-6 pt-3'>
                            a Web Developer from Chicago, Illinois. I am passionate about building accessible, performant, and responsive web experiences, but I am even more passionate about growing and learning on this journey through the wild world of web development.
                        </p>
                    </section>

                    <section className='pt-10'>
                        <div className='xl:w-10/12 xl:mx-auto'>
                            <h2 className='lg:text-2xl font-bold my-2'>Recently posted</h2>
                            <div className='mt-6 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                                {latestPosts.slice(0, 3).map((post) => (
                                    <div key={post.id} className='p-8 shadow-xl shadow-gray-400 rounded-2xl lg:hover:-translate-y-2 nav-link'>
                                        <Link href={`/blog/${post.slug}/`}>
                                            <h2 className='text-xl font-semibold'>{post.title}</h2>
                                            <p className='pt-4'>
                                                {`${post.content.substring(
                                                    0,
                                                    100
                                                )}...`}
                                            </p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
