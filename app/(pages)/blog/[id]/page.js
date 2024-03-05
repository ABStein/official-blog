import { getPost } from '../../../lib/initSupabase';

export default async function Post({ params }) {
    const post = await getPost(params.id);
    console.log(post);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(`${post.created_at}`);
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return (
        <div className='lg:pt-12 pt-8'>
            <div className='responsive-content-width'>
                <div className='lg:px-24 px-6'>
                    <div className='w-10/12 mx-auto'>
                        <h1 className='md:text-center lg:text-6xl text-3xl text-gray-900'>{post.title}</h1>
                        <div className='lg:my-12 my-6'>
                            <p className='text-2xl text-gray-900'>{post.content}</p>
                            <p className='text-gray-900 text-base py-8'>Posted: {formattedDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
