import reports from "../../../data/reports.json"
export default function Reports() {
    const data = reports.report.reverse()
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
                    {data.map((report) => (
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
      </section>
    </>
  )
}
