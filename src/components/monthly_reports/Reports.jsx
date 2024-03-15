import { useEffect, useState } from 'react'
import {useOutletContext} from "react-router-dom"
import {Hourglass} from "react-loader-spinner"

export default function Reports() {

    const [reports, setReports] = useState({"report" : []})
    const [theme] = useOutletContext()

    useEffect(() => {
        fetch("https://script.google.com/macros/s/AKfycbzMxsVUu8e_JFxi7tQHwIWafBH35vrTbIjFAuepA0ZW1M7_jo4pCZWOYnswD4_wG-wH/exec?type=report")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setReports(data['data'])
            })
      },[])

    const data = reports.report


  return (
    <>
      <section className="mx-auto my-10 w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Monthly Reports</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              This is a list of all the monthly Reports of SDC.
            </p>
          </div>
        </div>
        {data.length === 0 ? 
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
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Title
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Read</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.toReversed().map((report) => (
                      <tr key={report.title}>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{report.title}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a href={report.href} className="text-gray-700">
                            Read
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
         </>
         }
        
      </section>
    </>
  )
}
