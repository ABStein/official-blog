import postsData from '../../../components/mockData/index';

export default function Post(params) {
    return (
        <div className='lg:pt-12 pt-8'>
            <div className='responsive-content-width'>
                <div className='lg:px-24 px-6'>
                    <div className='w-10/12 mx-auto'>
                        <h1 className='md:text-center lg:text-6xl text-3xl text-gray-900'>Latest Posts</h1>
                        <div className='lg:my-12 my-6'>
                            <h2 className='lg:text-3xl text-xl text-gray-900'>{params.params.title}</h2>
                            <p className='lg:text-lg text-base text-gray-600'>{params.params.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function generateStaticParams() {
    const posts = postsData;

    return posts.map((post) => ({
        slug: post.id,
    }))
}

