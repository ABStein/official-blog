function ArticleCard({ modifier, title, description, date }) {
    return (
        <div
            className={`${modifier} flex flex-col overflow-hidden rounded-xl bg-clip-border h-full lg:hover:bg-gray-300 lg:hover:bg-opacity-30`}
        >
            <div className='p-6'>
                <p className='block font-sans text-base antialiased font-normal leading-relaxed pb-4 text-indigo-500'>
                    {date}
                </p>
                <h4 className='block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-900'>
                    {title}
                </h4>
                <p className='block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-inherit text-gray-900'>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ArticleCard;
