import CoverImage from "../../assets/ic_cover.jpg"


function Hero() {
  return (
    <>
    <div className='w-full  bg-gray-100 dark:bg-gray-800'>
    <div className="relative w-full">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="mt-8 max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1 hidden">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">We&apos; hiring</p>
              </div>
              <p className="text-sm font-medium">Join our team &rarr;</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-pink-500 to-red-800 inline-block text-transparent bg-clip-text md:text-4xl lg:text-6xl">
              Student Development Council
            </h1>
            <p className="mt-8 text-lg text-gray-900 dark:text-gray-100">
            As a Student Body at IISER Bhopal, we have been working to help students realize their aspirations and guide them to the right career path based on their abilities and interests.
            </p>
            
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 mx-4">
            <img
              className="aspect-[4/3] mt-10 rounded-xl shadow-xl border-4 border-white"
              src={CoverImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero