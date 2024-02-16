import image from "../../assets/SDC Logo.png"
function Contact() {
  return (
    <div className="rounded-lg bg-gray-100 dark:bg-gray-800">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

      <div className="py-20">
        <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
        <img
             className="aspect-[1/1] max-h-80"
             src={image}
             alt="Image"/>
          <div className="space-y-6 divide-y-2 mt-12">
            <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
              <p className="w-full text-2xl font-semibold  text-gray-900 dark:text-gray-50">
                Email
              </p>
              <a className="text-xl font-semibold text-gray-500 dark:text-gray-400" href="mailto:sdc@iiserb.ac.in">
                sdc@iiserb.ac.in
              </a>
            </div>
            <div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
              <p className="w-full text-2xl font-semibold  text-gray-900 dark:text-gray-50">
                Office
              </p>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                SDC Room, 1st Floor Mess 3, IISER Bhopal, Madhya Pradesh - 462066
              </p>
              <p className="w-full text-base  text-gray-500 dark:text-gray-400">Time: By Appointment (though email) </p>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact