import { getPosts } from '../../lib/initSupabase';

export default async function Blog() {
    const posts = await getPosts();
    return (
        <div className='lg:pt-12 pt-8'>
            <div className='responsive-content-width'>
                <div className='lg:px-24 px-6'>
                    <div className='w-10/12 mx-auto'>
                        {posts.map((post) => (
                            <div key={post.id} className='lg:my-12 my-6'>
                                <h1 className='lg:text-3xl text-xl text-gray-900'>{post.title}</h1>
                                <p className='lg:text-lg text-base text-gray-600'>{post.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
