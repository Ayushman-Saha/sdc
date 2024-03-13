import React, { useEffect, useState } from 'react'
import {useOutletContext} from "react-router-dom"
import {Hourglass} from "react-loader-spinner"

export default function Resources() {

  const [resources, setResouces] = useState([])
  const [theme] = useOutletContext()

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzMxsVUu8e_JFxi7tQHwIWafBH35vrTbIjFAuepA0ZW1M7_jo4pCZWOYnswD4_wG-wH/exec?type=resource")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setResouces(data['data'])
        })
  },[])

  const data = resources
  const keys = Object.keys(data)
  return (

    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 my-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Resources</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              All the resources provided by SDC are listed as under.
            </p>
          </div>
          
        </div>
        
        {resources.length === 0 ?
         <>
         <div className="my-16">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{margin : "auto"}}
            wrapperClass=""
            colors={theme != "dark"? ['#fafafa', '#fafafa']: ["#121212", "#121212"]}
            />
        </div>
         </> : 
        <>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Description
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">View</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {keys.map((type) => (
                      <React.Fragment key={data[type].title }>
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan={3}
                            scope="col"
                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-medium text-gray-500"
                          >
                            {type}
                          </th>
                        </tr>
                        {data[type].map((resource) => (
                          <tr key={resource.title}>
                            <td className="whitespace-nowrap px-12 py-4">
                              <div className="text-sm text-gray-900">{resource.title}</div>
                            </td>
                            
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                              {resource.description}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                              <a href={resource.href} className="text-gray-500">
                                View
                              </a>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </>
    }
        
        {/* <div className="mt-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>previous</span>
          </a>

          <div className="hidden items-center gap-x-3 md:flex">
            <a href="#" className="rounded-md bg-gray-100 px-2 py-1 text-sm">
              1
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              2
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              3
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              ...
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              12
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              13
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              14
            </a>
          </div>
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div> */}
      </section>
    </>
  )
}
