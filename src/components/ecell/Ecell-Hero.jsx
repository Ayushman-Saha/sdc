import EcellLogoLight from "../../assets/ecell-logo-light.png"
import EcellLogoDark from "../../assets/ecell-logo-dark.png"
import EcellGroup from "../../assets/ecell-group.png"
import {useOutletContext} from "react-router-dom"

export default function EcellHero() {

    const [theme] = useOutletContext()
  return (
    <div className="relative w-full bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <div className="inline-flex items-center">
            <img src={(theme === "dark") ? EcellLogoLight : EcellLogoDark} className="h-12"/>
            <span className="ml-4 text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">E-Cell IISER Bhopal</span>
          </div>
          <div className="rounded-lg bg-gray-200 my-4">
          <img
            className="aspect-auto h-[400px] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src = {EcellGroup}
            alt="E-cell group photo"
          />
        </div>    
          <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl lg:text-6xl">
            Igniting Innovation, Fostering Futures
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
          Welcome to E-Cell IISER Bhopal, the entrepreneurial hub of Indian Institute of Science Education and Research, Bhopal. Founded with the aim of fostering an entrepreneurial ecosystem within the institute and beyond, E-Cell IISER Bhopal is dedicated to nurturing the spirit of innovation, creativity, and entrepreneurship among students and the broader community. Through a range of initiatives, events, and programs, we strive to empower aspiring entrepreneurs, provide them with the necessary resources and support, and facilitate the transformation of innovative ideas into successful ventures.
          </p>
        </div>
      </div>
      
    </div>
  )
}
