import Link from 'next/link';
import { databases } from './appwrite';

async function getPosts() {
    const req = await databases.listDocuments('65de2e37ed03e92b1de0', '65de2e45f20e6bd7518c');
    const posts = req.documents;
    return posts;
}

export default async function HomePage() {
    const postsData = getPosts();

    const [posts] = await Promise.all([postsData])
    return (
        <div className='lg:pt-12 pt-8'>
            <div className='responsive-content-width'>
                <div className='lg:px-24 px-6'>
                    <div className='w-10/12 mx-auto'>
                        <h1 className='md:text-center lg:text-6xl text-3xl text-gray-900'>
                            Hey there! I'm{' '}
                            <span className='font-bold text-indigo-500 hover:bg-indigo-500 hover:text-gray-50 nav-link'>Andrew</span>.
                        </h1>
                        <p className='md:text-left lg:text-4xl md:text-2xl sm:text-xl text-gray-900 md:pt-6 pt-3'>
                            a Web Developer from Chicago, Illinois. I am passionate about building accessible, performant, and responsive web experiences, but I am even more passionate about growing and learning on this journey through the wild world of web development.
                        </p>
                    </div>

                    <div className='pt-24'>
                        <div className='w-10/12 mx-auto'>
                            <h2 className='lg:text-2xl font-bold'>Latest Posts</h2>

                            <div className='mt-6 flex mx-auto lg:flex-row flex-col justify-around'>
                                {posts.slice(0, 3).map((post) => (
                                    <div key={post.$id} className='w-4/12'>
                                        <div className='p-8 shadow-2xl rounded-2xl hover:-translate-y-6 nav-link mx-2'>
                                            <Link href={`/blog/${post.slug}`}>
                                                <h2 className='text-xl'>{post.title}</h2>
                                                <p className='pt-4'>
                                                    {`${post.content.substring(
                                                        0,
                                                        100
                                                    )}...`}
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
