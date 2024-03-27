import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const project = {
    title: 'Sprout Social Careers Redesign',
    description: 'I led the engineering efforts to restructure and redesign the Sprout Social Careers site using Next.js. The redesign was a collaborative effort between the engineering and design teams, and it was a great opportunity to learn more about the Next.js framework.',
    oldUrl: 'https://web.archive.org/web/20221029232535/https://sproutsocial.com/careers/',
    newUrl: 'https://sproutsocial.com/careers/',
};


export default function ProjectPage({ params }) {
    params = project
    return (
        <main className='py-16 lg:py-24'>
            <div className='responsive-content-width'>
                <div className='grid lg:grid-cols-8'>
                    <div className='lg:col-span-6'>
                        <h1 className='text-4xl font-semibold text-gray-900'>
                            {params.title}
                        </h1>
                        <p className='text-xl text-gray-900 pt-6'>
                            {params.description}
                        </p>
                        <div className='flex items-center'>
                            <div className='pt-6 pr-4'>
                                <Link href={params.oldUrl} className='text-indigo-500 font-semibold inline-block group' target='_blank'>
                                    <div className='flex justify-center items-center'>
                                        <span>Out with the old</span>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-indigo-500 ml-2 transition-transform group-hover:translate-x-1' />
                                    </div>
                                </Link>
                            </div>

                            <div className='pt-6 pr-4'>
                                <Link href={params.newUrl} className='text-indigo-500 font-semibold inline-block group' target='_blank'>
                                    <div className='flex justify-center items-center'>
                                        <span>In with the new</span>
                                        <FontAwesomeIcon icon={faArrowRight} className='text-indigo-500 ml-2 transition-transform group-hover:translate-x-1' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
