import Link from 'next/link';
import { getPosts } from '../../lib/initSupabase';
import ArticleCard from '@/app/components/ArticleCard';

export default async function Blog() {
    const posts = await getPosts();
    const newDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', timezone: 'UTC'};
        const formatDate = new Date(date);
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(formatDate);
        return formattedDate;
    }
    return (
        <div className='lg:pt-12 pt-8'>
            <div className='responsive-content-width'>
                <div className='lg:px-24 px-6'>
                    <div className='w-11/12 mx-auto'>
                        <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4'>
                            {posts.map((post) => (
                                <Link href={`/blog/${post.slug}/`} key={post.id}>
                                    <ArticleCard
                                        modifier='lg:hover:-translate-y-2 nav-link shadow-2xl shadow-gray-900'
                                        image={post.hero_image }
                                        title={post.title}
                                        description={`${post.content.substring(
                                            0,
                                            100
                                        )}...`}
                                        date={newDate(post.created_at)}
                                        author={post.author}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
