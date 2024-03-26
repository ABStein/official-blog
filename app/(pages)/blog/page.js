import Link from 'next/link';
import { getPosts } from '../../lib/initSupabase';
import ArticleCard from '@/app/components/ArticleCard';
import dateFormatter from '@/app/lib/utils/dateFormatter';

export default async function Blog() {
    // get all posts
    const posts = await getPosts();
    // display latest posts helper function
    const getLatestPosts = (posts) => {
        posts.sort((a, b) => {
            const postA = new Date(a.created_at);
            const postB = new Date(b.created_at);
            return postB - postA;
        });
        return posts;
    }
    // get latest posts
    const latestPosts = getLatestPosts(posts);
    return (
        <div className='lg:pt-12 pt-8'>
            <div className='responsive-content-width'>
                <div className='grid gap-4 grid-cols-1'>
                    {latestPosts.map((post) => (
                        <Link href={`/blog/${post.slug}/`} key={post.id}>
                            <ArticleCard
                                modifier='nav-link'
                                image={post.hero_image }
                                title={post.title}
                                description={post.description}
                                date={dateFormatter(post.created_at)}
                                author={post.author}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
