import { getPostBySlug } from '../../../lib/initSupabase';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeSnippet from '@/app/components/CodeSnippet';

export default async function Post({ params: { slug }}) {
    const post = await getPostBySlug(slug);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(`${post.created_at}`);
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return (
        <div className='lg:pt-12 pt-8'>
            <div className='responsive-content-width'>
                <div className='lg:px-24 px-6'>
                    <div className='w-11/12 mx-auto px-4'>
                        <h1 className='md:text-center lg:text-6xl text-3xl text-gray-900'>{post.title}</h1>
                        <div className='lg:my-12 my-6'>
                            <span className='text-xl text-gray-900'>
                                <MDXRemote
                                    source={post.content}
                                    components={{
                                        pre: CodeSnippet,
                                        p: (props) => <p {...props} className='pb-4' />,
                                    }}
                                />
                            </span>
                            <p className='text-gray-900 text-base py-8'>Posted: {formattedDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
