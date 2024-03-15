import { useEffect, useState } from "react"
import CarmaCard from "./CarmaCard"
import {useOutletContext} from "react-router-dom"
import {Hourglass} from "react-loader-spinner"

function Carma() {
    const[carmaData, setCarmaData] = useState([])
    const[theme] = useOutletContext()
   
    useEffect(() => {
        fetch("https://script.google.com/macros/s/AKfycbzMxsVUu8e_JFxi7tQHwIWafBH35vrTbIjFAuepA0ZW1M7_jo4pCZWOYnswD4_wG-wH/exec?type=carma")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setCarmaData(data['data'])
            })
      },[])

      let data = carmaData
  
  return (
   <>
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
   <div className="mt-8 gap-6 flex flex-wrap justify-center">
     {data.toReversed().map((carma, index) => {
        let id = carma.href.substring(carma.href.indexOf("d/")+2, carma.href.indexOf("/view"))
         return <CarmaCard key={index} body={carma.title} id={id} image={carma.coverimage}/>
     })}
    </div>
   </>
   } 
   
   </>
  )
}

export default Carma