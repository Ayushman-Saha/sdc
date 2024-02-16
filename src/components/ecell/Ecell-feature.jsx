import Works from '../home/Works'
import Vision from "../../assets/vision.png"
import Mission from "../../assets/mission.png"
import Overview from "../../assets/overview.png"
import EcellHistory from "../../assets/ecell-history.jpg"


export default function EcellFeature() {
  return (
    <>
    <Works
        id={0}
        image={EcellHistory}
        heading="History"
        body={<p className='mt-2 text-lg text-gray-800 dark:text-gray-400'>Established in 2023, E-Cell IISER Bhopal has rapidly grown into a dynamic and vibrant community of aspiring entrepreneurs, innovators, and changemakers. Since its inception, the E-Cell has organized numerous successful events and initiatives aimed at fostering entrepreneurship and innovation within Indian Institute of Science Education and Research, Bhopal, and beyond. From hosting inspiring talks by industry leaders to providing hands-on workshops and mentorship opportunities, E-Cell IISER Bhopal has played a pivotal role in nurturing the entrepreneurial ecosystem and empowering students to pursue their entrepreneurial dreams. As we look towards the future, we remain committed to our mission of inspiring and empowering the next generation of entrepreneurs and innovators.
        </p>}
    /> 
    <hr className="w-48 h-1 my-4 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

    <Works
        id={1}
        image={Mission}
        heading="Our Mission"
        body={<p className='mt-2 text-lg text-gray-800 dark:text-gray-400'>Our mission at E-Cell IISER Bhopal is to inspire, educate, and empower the next generation of entrepreneurs. We are committed to creating an inclusive and supportive environment where students can explore their entrepreneurial aspirations, develop essential skills, and access the resources needed to turn their ideas into reality. By fostering collaboration, creativity, and innovation, we aim to contribute to the growth and success of startups and the entrepreneurial ecosystem at large</p>}
    /> 
    <hr className="w-48 h-1 my-4 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

    <Works
        id={2}
        image={Vision}
        heading="Our Vision"
        body={<p className='mt-2 text-lg text-gray-800 dark:text-gray-400'>Our vision is to become a catalyst for entrepreneurial excellence and innovation, both within Indian Institute of Science Education and Research, Bhopal, and in the wider community. We envision a future where entrepreneurship is ingrained in the culture of the institute, where students are equipped with the mindset and skills to tackle real-world challenges, and where startups thrive and make meaningful contributions to society and the economy. Through our efforts, we aspire to create a vibrant ecosystem that nurtures and supports the entrepreneurial spirit in all its forms.</p>}
    /> 
    <hr className="w-48 h-1 my-4 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

    <Works
        id={3}
        image={Overview}
        heading="Overview"
        body={<p className='mt-2 text-lg text-gray-800 dark:text-gray-400'>E-Cell IISER Bhopal is a student-led organization dedicated to promoting entrepreneurship and innovation among students and the broader community. Since its inception, the E-Cell has been actively engaged in organizing a wide range of activities, including workshops, seminars, competitions, networking events, and startup incubation programs. Our initiatives are designed to provide students with opportunities to explore their entrepreneurial interests, develop valuable skills, and connect with mentors, industry experts, and fellow entrepreneurs. Whether you are a budding entrepreneur with a groundbreaking idea or simply curious about the world of startups, E-Cell IISER Bhopal welcomes you to join us on our journey of innovation and discovery.        </p>}
    /> 
    <hr className="w-48 h-1 my-4 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    
    </>
  )
}
