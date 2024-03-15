export default function Works({heading, body, image, href, id}) {
  return (
    <section className="mt-16">
    <div className='w-full  bg-gray-100 dark:bg-gray-800'>
        <div className="relative w-full">
            <div className="mx-auto align-middle max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            {(id%2 == 0 && window.innerWidth > 1024) ? 
            <>
            <div className="flex flex-col justify-center px-4 py-12 ml-10 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                
                <a className="mt-8 text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 underline" href={href} target="blank">
                  {heading}
                </a>
                <ul className="mt-2">
                    {body}
                </ul>
            </div>
            <div className="relative lg:col-span-2 lg:-mr-8 xl:col-span-6 mx-4">
                <img
                className=" mt-24 rounded-xl shadow-xl border-4 border-white"
                src={image}
                alt="Image"
                />
            </div>
            </> :
            <>
            <div className="relative lg:col-span-2 lg:-mr-8 xl:col-span-6 mx-4">
                <img
                className="mt-24 rounded-xl shadow-xl border-4 border-white"
                src={image}
                alt="Image"
                />
            </div>
            <div className="flex flex-col justify-center px-4 py-12 ml-10 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                
                <a className="mt-8 mb-4 text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 underline" href={href} target="blank">
                  {heading}
                </a>
                <ul className="mt-2">
                    {body}
                </ul>
            </div>
            
            </>
            }
            
            </div>
        </div>
    </div>
    </section>
  )
}
