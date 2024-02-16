import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import CarmaCover from "../../assets/carma.jpg"

export default function CarmaCard({ body, id}) {
    return (
        <div className="mx-auto my-12 w-[200px] rounded-md border-4 border-gray-100 dark:border-white shadow-xl lg:basis-3/12">
        <img
          src={CarmaCover}
          alt="Laptop"
          className=" aspect-[5/7] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg my-4 font-semibold text-gray-900 dark:text-gray-100">{body}</h1>
          <NavLink to={`/carma/read/${id}`}>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/80"
           >
            Read Now
            <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </NavLink> 
         </div>
      </div>
    )
  }