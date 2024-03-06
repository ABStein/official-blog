function ArticleCard({ modifier, title, description, image, date }) {
    return (
        <div
            className={`${modifier} flex flex-col overflow-hidden rounded-xl bg-clip-border text-gray-900 shadow-md h-full`}
        >
            <div className='m-0 overflow-hidden bg-transparent rounded-none shadow-none bg-clip-border'>
                <img src={image} alt='' />
            </div>
            <div className='p-6'>
                <h4 className='block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
                    {title}
                </h4>
                <p className='block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-inherit'>
                    {description}
                </p>
            </div>
            <div className='flex items-center justify-between p-6 mt-auto'>
                <div className='flex items-center -space-x-3'>
                    {/* <img alt='Andrew'
                        src=''
                        className='relative inline-block h-9 w-9 !rounded-full border-2 border-white object-cover object-center' /> */}
                </div>
                <p className='block font-sans text-base antialiased font-normal leading-relaxed text-inherit'>
                    {date}
                </p>
            </div>
        </div>
    );
}

export default ArticleCard;
