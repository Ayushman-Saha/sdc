import TeamCard from "./TeamCard"
import {useOutletContext} from "react-router-dom"
import CommaBreak from "../utils/CommaBreak"
import { useEffect, useState } from "react"
import {Hourglass} from "react-loader-spinner"

function Team() {
    const [theme] = useOutletContext()
    const [TeamData, setTeamData] = useState([]) 

    useEffect(() => {
        fetch("https://script.google.com/macros/s/AKfycbzMxsVUu8e_JFxi7tQHwIWafBH35vrTbIjFAuepA0ZW1M7_jo4pCZWOYnswD4_wG-wH/exec")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setTeamData(data['data'])
        })
    },[])

  return (
    <>
    <div className="mx-auto mt-10 max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-3xl text-center content-center items-center self-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight">
            The Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-800 dark:text-gray-300">
            The faces behind SDC
          </p>
        </div>
        </div>

        <CommaBreak/>

        {TeamData.length === 0 ? 
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
        {Object.keys(TeamData).map((position)=> {
            return (
                <>
                <div className="mx-auto mt-4 mb-12 max-w-7xl px-2 lg:px-0">
                <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight underline">
                    {TeamData[position]["position"]}
                </h2>
                </div>
                </div>

                <div className="mt-8 gap-6 flex flex-wrap justify-center">
                    {TeamData[position]["members"].map((secData)=> {
                     return(
                        <TeamCard key={secData.email}
                        name={secData.name}
                        designation={secData.designation}
                        mugshot={secData.mugshot}
                        theme = {theme}
                        linkedIn={secData.linkedIn}
                        email={secData.email}
                        image={secData.image}
                        />           
                     )
                })}  
                </div>
                 <CommaBreak/>
                </>
            )
        })}
        </>
        }

       


        {/* <div className="mx-auto mt-4 mb-12 max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight underline">
            Secretary
          </h2>
        </div>
        </div>

        <div className="mt-8 gap-6 flex flex-wrap justify-center">
            {TeamData.secretary.map((secData)=> {
                return(
                        <TeamCard key={secData.email}
                        name={secData.name}
                        designation={secData.designation}
                        mugshot={secData.mugshot}
                        theme = {theme}
                        linkedIn={secData.linkedIn}
                        email={secData.email}
                        image={secData.image}
                        />            )
            })}  
        </div>
        <CommaBreak/>
        <div className="mx-auto mt-4 mb-12 max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight underline">
            Vice-Secretary
          </h2>
        </div>
        </div>

        <div className="mt-8 gap-6 flex flex-wrap justify-center">
            {TeamData["vice-secretary"].map((secData)=> {
                return(
                        <TeamCard key={secData.email}
                        name={secData.name}
                        designation={secData.designation}
                        mugshot={secData.mugshot}
                        theme = {theme}
                        linkedIn={secData.linkedIn}
                        email={secData.email}
                        image={secData.image}
                        />            )
            })}  
        </div>

        <CommaBreak/>
        <div className="mx-auto mt-4 mb-12 max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight underline">
            Core-Committee
          </h2>
        </div>
        </div>

        <div className={`mt-8 gap-6 flex flex-wrap justify-center mx-8`}>
            {TeamData["core-comittee"].map((secData)=> {
                return(
                        <TeamCard key={secData.email}
                        name={secData.name}
                        designation={secData.designation}
                        mugshot={secData.mugshot}
                        theme = {theme}
                        linkedIn={secData.linkedIn}
                        email={secData.email}
                        image={secData.image}
                        />            )
            })}  
        </div>

        <CommaBreak/>
        <div className="mx-auto mt-4 mb-12 max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight underline">
            Core-Committee
          </h2>
        </div>
        </div>

        <div className={`mt-8 gap-6 flex flex-wrap justify-center mx-8`}>
            {TeamData["core-team"].map((secData)=> {
                return(
                        <TeamCard key={secData.email}
                        name={secData.name}
                        designation={secData.designation}
                        mugshot={secData.mugshot}
                        theme = {theme}
                        linkedIn={secData.linkedIn}
                        email={secData.email}
                        image={secData.image}
                        />            )
            })}  
        </div>

        <CommaBreak/>
        <div className="mx-auto mt-4 mb-12 max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight underline">
            Trainee Team
          </h2>
        </div>
        </div>

        <div className={`mt-8 gap-6 flex flex-wrap justify-center mx-8`}>
            {TeamData["trainee-team"].map((secData)=> {
                return(
                        <TeamCard key={secData.email}
                        name={secData.name}
                        designation={secData.designation}
                        mugshot={secData.mugshot}
                        theme = {theme}
                        linkedIn={secData.linkedIn}
                        email={secData.email}
                        image={secData.image}
                        />            )
            })}  
        </div> */}

    </>
  )
}

export default Team