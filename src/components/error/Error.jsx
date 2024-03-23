import { ArrowLeft } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className="flex items-center justify-center px-2 md:px-0 mx-auto my-48">
      <div>
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-gray-100 md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-gray-400">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 flex items-center space-x-3">
            <NavLink to="/">
                <button
                type="button"
                className="inline-flex items-center rounded-md border border-black dark:border-gray-100 dark:text-gray-100 px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                <ArrowLeft size={16} className="mr-2 dark:text-gray-100" />
                Home
            </button>
            </NavLink>
          
          <NavLink to="/contact">
            <button
                type="button"
                className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                Contact us
            </button>
          </NavLink>
          
        </div>
      </div>
    </div>
  )
}
