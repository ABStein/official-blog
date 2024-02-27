export default function Banner() {
    const closeBanner = () => {
        // close the banner
        document.querySelector('.close').closest('div').style.display = 'none';
    }

    return (
        <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p class="text-sm leading-6 text-gray-900">
                <strong class="font-semibold">Please mind the dust</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>A new experience is coming soon!
                </p>
            </div>
            <div class="flex flex-1 justify-end">
                <button className='close' type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                <span class="sr-only">Dismiss</span>
                <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
                </button>
            </div>
        </div>
    )
}
