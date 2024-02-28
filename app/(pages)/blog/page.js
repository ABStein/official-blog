import { getPosts } from '../../lib/appwrite';

export default async function Blog() {
    const posts = await getPosts();
    // format date to be readible from ISO 8601 format.

    return (
        <div className='lg:pt-12 pt-8'>
            <div className='responsive-content-width'>
                <div className='lg:px-24 px-6'>
                    <div className='w-10/12 mx-auto'>
                        <h1 className='md:text-center lg:text-6xl text-3xl text-gray-900'>Latest Posts</h1>
                        {posts.map((post) => (
                            <div key={post.$id} className='lg:my-12 my-6'>
                                <h2 className='lg:text-3xl text-xl text-gray-900'>{post.title}</h2>
                                <p className='lg:text-lg text-base text-gray-600'>{post.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
