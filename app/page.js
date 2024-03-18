import Link from 'next/link';
import { getPosts } from './lib/initSupabase';
import AnimatedComponent from './components/AnimatedComponent';

export default async function HomePage() {
    // get all posts
    const posts = await getPosts();
    // display latest posts
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
                <div className='lg:px-24 px-6'>
                    <div className='max-w-10/12 mx-auto relative'>
                        <h1 className='md:text-center lg:text-6xl text-3xl text-gray-900'>
                            Hey there! I'm <AnimatedComponent word='Andrew.' />
                        </h1>
                        <p className='md:text-left lg:text-4xl md:text-2xl sm:text-xl text-gray-900 md:pt-6 pt-3'>
                            a Web Developer from Chicago, Illinois. I am passionate about building accessible, performant, and responsive web experiences, but I am even more passionate about growing and learning on this journey through the wild world of web development.
                        </p>
                        <svg
                            className='absolute -z-10 -top-80 right-0 md:-top-80 lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 max-w-md lg:max-w-lg'
                            viewBox='0 0 823 868'
                            xmlns="http://www.w3.org/2000/svg"
                            width={823}
                            height={868}
                            fill="none"
                        >
                            <g filter="url(#a)">
                                <ellipse
                                    cx={333.641}
                                    cy={250.287}
                                    fill="#6366F1"
                                    rx={124.5}
                                    ry={136}
                                    transform="rotate(-90.333 333.641 250.287)"
                                />
                            </g>
                            <g filter="url(#b)">
                                <path
                                    fill="#4ADE80"
                                    d="M316.699 597.364c-81.438 31.448-158.319-14.081-145.306-154.873 0 0-84.81-74.744-23.945-76.068 60.864-1.324 57.542-37.755 57.542-37.755 113.858-24.151 269.754 25.717 223.835 147.732 87.874-233.498 127.421-46.659 66.932-25.414-60.489 21.245 120.536 30.028-50.706 154.127-23.959 153.939-136.91 166.416-158.474 97.11-13.983-44.941-62.339-57.037 30.122-104.859Z"
                                />
                            </g>
                            <g filter="url(#c)">
                                <path
                                    fill="#7DD3FC"
                                    d="M559.902 355.016c50.951 68.437 28.31 153.283-108.419 181.092l-112.347 26.653c-55.988-102.04-57.846-141.666 72.229-132.922-180.055-189.553-87.741-213.494-49.94-161.713 37.802 51.782-1.482-169.1 166.765-40.968 154.302-21.497 209.876-11.982 138.721 123.696-2.512 91.924-30.59 86.518-107.009 4.162Z"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="a"
                                    width={521.999}
                                    height={499.001}
                                    x={72.641}
                                    y={0.787}
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur
                                        result="effect1_foregroundBlur_0_1"
                                        stdDeviation={62.5}
                                    />
                                </filter>
                                <filter
                                    id="b"
                                    width={649.357}
                                    height={669.795}
                                    x={0.461}
                                    y={197.75}
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur
                                        result="effect1_foregroundBlur_0_1"
                                        stdDeviation={62.5}
                                    />
                                </filter>
                                <filter
                                    id="c"
                                    width={644.613}
                                    height={626.19}
                                    x={177.912}
                                    y={61.57}
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur
                                        result="effect1_foregroundBlur_0_1"
                                        stdDeviation={62.5}
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    <div className='pt-10'>
                        <div className='xl:w-10/12 xl:mx-auto'>
                            <h2 className='lg:text-2xl font-bold my-2'>Recently posted</h2>
                            <div className='mt-6 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                                {latestPosts.slice(0, 3).map((post) => (
                                    <div key={post.id} className='p-8 shadow-xl shadow-gray-400 rounded-2xl lg:hover:-translate-y-2 nav-link'>
                                        <Link href={`/blog/${post.slug}/`}>
                                            <h2 className='text-xl font-semibold'>{post.title}</h2>
                                            <p className='pt-4'>
                                                {`${post.content.substring(
                                                    0,
                                                    100
                                                )}...`}
                                            </p>
                                        </Link>
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
