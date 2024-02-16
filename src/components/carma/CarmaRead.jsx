import {useParams} from "react-router-dom"
function CarmaRead() {
    const {id} = useParams()
    const url = `https://drive.google.com/file/d/${id}/preview`
  return (
    <div className="mt-8 text-center text-gray-800 dark:text-gray-100">
        <iframe src={url} allow="autoplay" className="w-full h-[600px]"/>
    </div>
  )
}

export default CarmaRead