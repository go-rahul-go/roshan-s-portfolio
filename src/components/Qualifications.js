import React, { useContext } from 'react'
import { ThemeContext } from '../App';
import school from "../assests/school.svg"
import student1 from "../assests/student1.svg"
import student2 from "../assests/student2.svg"
import teacher from "../assests/teacher.svg";
import techie from "../assests/techie.svg";



import "./qualifications.css"
const icons = [
    {
        id: 0,
        url: school,
        alt: "school"
    },
    {
        id: 1,
        url: student1,
        alt: "student 1"
    },
    {
        id: 2,
        url: student2,
        alt: "student 2"
    }
]

const jobicons = [
    {
        id:0,
        url:teacher,
        alt:"a teacher",
        desc:"a logo of a teacher"
    },
    {
        id:1,
        url:techie,
        alt:"tech logo",
        desc:"logo of an IT guy"
    }
]
const Qualifications = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme==="black"?"qualities q-dark":"qualities q-white"}>
            <div className={theme==="black"?"schooling s-dark":"schooling s-white"}>
                <h2 className="h2">Education</h2>
                <div className={theme==="black"?"inner-card dark-inner-card":"inner-card white-inner-card"}>
                    <div className={theme==="black"?"school-logo dark-logo":"school-logo"}>
                        <img src={icons[0].url} alt={"logo hai"} />
                    </div>
                    <div className={theme==="black"?"school-name dark-school-name":"school-name"}>
                    <h3>Guru harkrishan public school (New Delhi)</h3>
                        <i>class 10</i>
                    </div>
                </div>
                <div className={theme==="black"?"inner-card dark-inner-card":"inner-card white-inner-card"}>
                    <div className={theme==="black"?"school-logo dark-logo":"school-logo"}>
                        <img src={icons[1].url} alt={"logo hai"} />
                    </div>
                    <div className={theme==="black"?"school-name dark-school-name":"school-name"}>
                        <h3>Dr. N Jha college, (Darbhanga)</h3>
                        <i>class 12</i>
                    </div>
                </div>
                <div  className={theme==="black"?"inner-card dark-inner-card":"inner-card white-inner-card"}>
                    <div className={theme==="black"?"school-logo dark-logo":"school-logo"}>
                        <img src={icons[2].url} alt={"logo hai"} />
                    </div>
                    <div className={theme==="black"?"school-name dark-school-name":"school-name"}>
                        <h3>Maharishi Dayanand University (Rohtak)</h3>
                        <i>Bachlore of Technology (CSE)</i>
                    </div>
                </div>
            </div>
            <div className={theme==="black"?"job job-black":"job job-white"}>
                <h2 className="h2">Jobs</h2>
                <div className={theme==="black"?"visible visible-dark":"visible visible-white"}>
                    <div className={theme==="black"?"job-logo dark-logo":"job-logo"}>
                        <img src={jobicons[1].url} alt={"logo hai"} />
                    </div>
                    <div className="job-name">
                        <h3 className="job-profile">Network Engineer</h3>
                        <h4 className='comp-name'>Tejays Dynamics Ltd.</h4>
                        <i className='duration'>May 2021 - July 2021</i>
                    </div>
                </div>
                <div className={theme==="black"?"visible visible-dark":"visible visible-white"}>
                <div className={theme==="black"?"job-logo dark-logo":"job-logo"}>
                        <img src={icons[0].url} alt={"logo hai"} />
                    </div>
                    <div className="job-name">
                    <h3 className="job-profile">Data Scientist</h3>
                        <h4 className='comp-name'>codingtribes.org</h4>
                        <i className='duration'>March 2023 - Present</i>
                    </div>
                </div>
                <div className='hidden'>
                    
                </div>
            </div>

           
        </div>
    )
}

export default Qualifications;

