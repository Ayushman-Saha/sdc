import TeamCard from "./TeamCard"
import {useOutletContext} from "react-router-dom"
import TeamData from "../../../data/team.json"
import CommaBreak from "../utils/CommaBreak"

function Team() {
    const [theme] = useOutletContext()
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