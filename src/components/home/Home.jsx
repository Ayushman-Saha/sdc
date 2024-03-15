// import { CheckCircle, ChevronDown, ChevronUp, Star} from 'lucide-react'
import CommaBreak from '../utils/CommaBreak'
import Hero from './Hero'
import Works from './Works'
import CCDIllust from '../../assets/ccd.png'
import Carma from "../../assets/carma.jpg"
import SDCBlog from "../../assets/sdc_blog.png"
import MUN from "../../assets/MUN.jpg"
import Ecell from "../../assets/ecell.png"
import Compendium from "../../assets/compendium.png"
import AluminiTalks from "../../assets/Alumini Talks.jpg"
import Volunteer from "../../assets/volunteer.jpg"
import Orientation from "../../assets/orientation.jpg"
import Outreach from "../../assets/outreach.png"


const data = [
    {
        "heading" : "Placements and Internships",
        "image" : CCDIllust,
        "href" : "https://icdpc.iiserb.ac.in/",
        "body" : [
            "A large part of the SDC’s work is in association with the Centre for Career Development (CCD), which is the official institute body for all matters related to placements, careers and so on.",
            "A team is dedicated to work with the CCD to communicate with the industry and negotiate jobs, internships and MOUs for IISERB and its students. Before communication with the industry, a list of prospective companies and organizations which can offer employment and industrial internships is developed. This involves a significant amount of research on what courses are offered, what skills companies look for in candidates, if any skill development workshops could be organized, etc.",
        ]
    },
    {
        "heading" : "CarMa -The SDC’s Career Magazine",
        "image" : Carma,
        "href" : "",
        "body" : [
            "The SDC utilizes and brings out students' writing and editorial skills, and also designing skills, through working on the semesterly Career-focused newsletter, CarMa. The process of publishing the newsletter involves interviews with faculty, alumni and accomplished students. This is followed by a thorough vetting, editing and designing procedure."
        ]
    },
    {
        "heading" : "SDC Blog Page",
        "image" : SDCBlog,
        "href" : "",
        "body" : [
            "The SDC publishes articles on their WordPress blog. The articles range from CV Making to the Importance of Upskilling. The process of creating a blogpost involves writing as well as gathering resources, as seen in our blog posts on Opportunities for Women in STEM and The Importance of Upskilling."
        ]   
    },
    {
        "heading" : "Model United Nations (MUN)",
        "image" : MUN,
        "href" : "",
        "body" : [
            "A MUN is organized under the SDC. It simulates the actual running of the United Nations. A separate committee is selected independently of the working team, which oversees the organization of this conference. As a part of the organizing committee, members are involved in the various aspects of its smooth operation. Organizers are be involved in research, social media and outreach handling, logistics, and equity."
        ]   
    },
    {
        "heading" : "Entrepreneurship Cell",
        "image" : Ecell,
        "href" : "",
        "body" : [
            "Our aim is to instil an entrepreneurial culture within the IISER Bhopal community and guide young entrepreneurs in their journey. We empower creators to transform their groundbreaking research into impactful ventures and foster a culture of entrepreneurship, collaboration, and sustainability within the institute and beyond. Lastly, we will always nurture the spirit of doing something new by providing invaluable opportunities and relentless support to those ideas that have a potential impact on society."
        ]   
    },
    {
        "heading" : "Managing and updation of compendium",
        "image" : Compendium,
        "href" : "",
        "body" : [
            "The primary goal of SDC is to help the student community of IISER Bhopal and provide them with all the relevant information they need to succeed in their journey. Data for internships and scholarship opportunities is hard to come by, so we take up this task and maintain the compendium. We actively and regularly update the information and share it with the community to give them an edge over other applicants in this competitive world, as they say, early bird gets the worm."
        ]   
    },
    {
        "heading" : "Alumini talks/Symposium",
        "image" : AluminiTalks,
        "href" : "",
        "body" : [
            "The SDC is also actively involved in conducting interviews with alumni. It could be written interviews, as in the CarMa Magazine or Interviews over video conferences open for all students of the institute, as in the Alumnating Talks. We also recently organized an Alumni Symposium titled ‘A Window to Corporate’ where we had five alumni share their experiences working in their respective fields and conduct workshops on developing professional skills."
        ]   
    },
    {
        "heading" : "Student Mentorship and Volunteer Programme",
        "image" : Volunteer,
        "href" : "",
        "body" : [
            "The SDC organises a mentorship programme for freshers where they are assigned student mentors to guide them with balancing academics and campus life. Students from the general body are invited to mentor freshers. Freshers arriving on campus are assisted by volunteers across the campus during their arrival to ensure they settle in smoothly under the Volunteer Programme that is run in collaboration with SAC."
        ]   
    },
    {
        "heading" : "Orientations and Student Interaction sessions",
        "image" : Orientation,
        "href" : "",
        "body" : [
            "The SDC, in association with several institute bodies, organises several orientations and interaction sessions with experienced students for the purpose of spreading knowledge and awareness about several opportunities and disseminating information that may be useful to students’ careers and professional lives. These include but are not limited to orientations on academics, internships, academic CV making, email writing and so forth. These orientations are conducted to provide students’ perspectives on these topics as a supplement to professional workshops organised at the institute level."
        ]   
    },
    {
        "heading" : "Professional and Social Media",
        "image" : Outreach,
        "href" : "",
        "body" : [
            "We work on maintaining the outreach on the Quora, Facebook and LinkedIn accounts of the SDC. Each of these social media platforms is dedicated to various purposes.  LinkedIn is mainly for marketing to the industry. At the same time, Quora and Facebook helps to reach a wider audience among high-schoolers who could be prospective students of IISER-B. We are also involved in social media outreach to students of IISERB to disseminate information relating to the activities of the SDC. "
        ]   
    }
]


export default function Home() {
  return (
    <div className="w-full">
      <Hero/>    
      <CommaBreak/>
      <div className="mx-auto max-w-7xl px-2 lg:px-0 my-4 mb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight">
            What we do?
          </h2>
          <p className="mx-auto my-4 max-w-2xl text-xl text-gray-800 dark:text-gray-400">
          From resume formatting to career planning, SDC is your swiss army knife for navigating student life.
          </p>
        </div>
        <div/>
        </div>
        <hr className="w-48 h-1 mx-auto my- bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <ul>

            {data.map(item => {
                return (
                <li key={data.indexOf(item)}>
                    <Works 
                    id = {data.indexOf(item)}
                    heading={item.heading} 
                    body={item.body.map(para => {
                        return (<li key={item.body.indexOf(para)}><p className="mt-8 text-lg text-gray-800 dark:text-gray-400">{para}</p></li>)
                    })}
                    image={item.image} 
                    href={item.href}/> 
                    <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                </li> )            
            })}

        </ul>
    </div>
  )
}

 


