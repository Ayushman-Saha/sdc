
function TeamCard({name, designation, mugshot, theme, linkedIn, email}) {
  return (
    <div className="mx-auto my-12 w-[300px] rounded-md border-4 border-gray-100 dark:border-white shadow-xl lg:basis-3/12">
    <img
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="Laptop"
      className=" aspect-[1/1] w-full rounded-t-md object-cover"
    />
    <div className="p-4">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h1>
      <h6 className="mt-3 font-medium text-gray-900 dark:text-gray-100">{designation}</h6>
      <p className="mt-3 text-sm text-gray-800 dark:text-gray-200">
        {mugshot}
      </p>
      <div className="mt-4 flex flex-wrap">
        {linkedIn ? (
        <>
        <div className="w-auto p-1.5">
          <a href={linkedIn} target="_blank">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                  fill={theme === "dark" ? "black" : "white"}
                ></path>
              </svg>
            </div>
          </a>
        </div>  
        </>
        ) : <></>}

        {email ? 
        <>
        <div className="w-auto p-1.5">
          <a href={`mailto:${email}`} target="_blank">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
              <svg
                width="15"
                height="16"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"
                  fill={theme === "dark" ? "black" : "white"}
                ></path>
              </svg>
            </div>
          </a>
        </div>
        </> 
        : <></>}  
      </div>
    </div>
  </div>
    )
}

export default TeamCard