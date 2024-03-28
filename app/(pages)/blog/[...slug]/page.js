import { getPostBySlug } from '../../../lib/initSupabase';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeSnippet from '@/app/components/CodeSnippet';
import dateFormatter from '@/app/lib/utils/dateFormatter';

export default async function Post({ params: { slug }}) {
    const post = await getPostBySlug(slug);
    return (
        <div className='lg:pt-12 pt-8'>
            <div className='responsive-content-width'>
                <div className='max-w-3xl mx-auto'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl text-center font-semibold text-gray-900'>{post.title}</h1>
                    <div className='lg:my-12 my-6'>
                        <span className='text-gray-900'>
                            <MDXRemote
                                source={post.content}
                                components={{
                                    pre: CodeSnippet,
                                    p: (props) => <p {...props} className='pb-4 lg:text-xl text-lg' />,
                                    a: (props) => <a {...props} className='font-semibold decoration-indigo-500 underline hover:underline-offset-2 text-indigo-500' />,
                                    h3: (props) => <h3 {...props} className='text-2xl text-gray-900 font-semibold pb-4' />,
                                }}
                            />
                        </span>
                        <p className='text-gray-900 text-base py-8'>Posted: {dateFormatter(post.created_at)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
