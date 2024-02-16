import EcellHero from "./Ecell-Hero"
import CommaBreak from "../utils/CommaBreak"
import EcellFeature from "./Ecell-feature"
import EcellContact from "./Ecell-Contact"


function Ecell() {
  return (
    <>
    <EcellHero/>
    <CommaBreak/>
      <div className="mx-auto px-2 lg:px-0 mt-4">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight">
            Our Mission
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-800 dark:text-gray-400">
            Our mission at E-Cell IISER Bhopal is to inspire, educate, and empower the next generation of entrepreneurs. We are committed to creating an inclusive and supportive environment where students can explore their entrepreneurial aspirations, develop essential skills, and access the resources needed to turn their ideas into reality. By fostering collaboration, creativity, and innovation, we aim to contribute to the growth and success of startups and the entrepreneurial ecosystem at large.
          </p>
        </div>
    </div>
    <CommaBreak/>
    <EcellFeature/>
    <EcellContact/>
    </>
  )
}

export default Ecell