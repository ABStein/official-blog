import { databases } from '../../../appwrite';

export async function generateStaticParams({params}) {
    const postData = await databases.getDocument('65de2e37ed03e92b1de0', '65de2e45f20e6bd7518c', params.$id);
    return {
        props: {
            postData
        }
    };
}

// where params.$id is the post ID from the URL path

// async function getPostData(id) {
//     const req = await databases.getDocument('65de2e37ed03e92b1de0', '65de2e45f20e6bd7518c', id);
//     return  {
//         title: req.title,
//         slug: req.slug,
//         content: req.content
//     };
// }

export default async function Post() {
    // const [postsData] = await Promise.all([postData]);
    // console.log(postsData);
    return (
        <div className='lg:pt-12 pt-8'>
            <div className='responsive-content-width'>
                <div className='lg:px-24 px-6'>
                    <div className='w-10/12 mx-auto'>
                        <h1 className='md:text-center lg:text-6xl text-3xl text-gray-900'>Latest Posts</h1>
                        <div className='lg:my-12 my-6'>
                            {/* <h2 className='lg:text-3xl text-xl text-gray-900'>{post.title}</h2>
                            <p className='lg:text-lg text-base text-gray-600'>{post.content}</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
