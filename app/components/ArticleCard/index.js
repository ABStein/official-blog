function ArticleCard({ modifier, title, description, date }) {
    return (
        <div
            className={`${modifier} flex flex-col overflow-hidden rounded-xl bg-clip-border h-full lg:hover:bg-gray-300 lg:hover:bg-opacity-30`}
        >
            <div className='p-6'>
                <p className='block lg:text-lg text-base leading-relaxed pb-4 text-indigo-500'>
                    {date}
                </p>
                <h4 className='block lg:text-xl text-lg font-semibold leading-snug tracking-normal text-gray-900'>
                    {title}
                </h4>
                <p className='block lg:text-lg text-base mt-3 leading-relaxed text-inherit text-gray-900'>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ArticleCard;
