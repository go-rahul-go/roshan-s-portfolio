import React, { useContext } from 'react'
import { ThemeContext } from "../App";
import "./certifications.css"
import { NavLink } from 'react-router-dom';
import python from "../assests/cert-logo/python.svg"
import sql1 from "../assests/cert-logo/sql1.svg"
import cpp from "../assests/cert-logo/cpp.svg"
import data from "../assests/cert-logo/data.svg"
import intern from "../assests/cert-logo/intern.svg"


const Certifications = () => {
  const theme = useContext(ThemeContext);

  return (
    <section className={theme === "black" ? "cert-section cert-section-black" : "cert-section cert-section-white"}>
      <h1>Certificates</h1>
      <div className={theme === "black" ? "cert-box cert-box-black" : "cert-box cert-box-white"}>

        <ul id='cert-cards'>
          <li className='cert-card' id="cert-card1">
            <div className={theme === "black" ? 'cert-card-body cert-card-body-black' : "cert-card-body"}>
              <h2 className='cert-h2'>Data Science Internship</h2>
              <div className='cert-logo-link'>
                <img src={intern} alt="logo" />
              </div>
              <div className={theme === "black" ? "card-num card-num-black" : "card-num"}><span>0405</span> <span>2023 </span> <span>1002 </span> <span>1998</span></div>
              <NavLink to="/intern-letter" className="cert-btn">View Certificate</NavLink>
              <h3 className='issuer'>Issued By: <span className='institute'>Code Clause</span></h3>

            </div>
          </li>
          <li className='cert-card' id="cert-card2">
            <div className={theme === "black" ? 'cert-card-body cert-card-body-black' : "cert-card-body"}>
              <h2 className='cert-h2'>SQL certificate</h2>
              <div className='cert-logo-link'>
                <img src={sql1} alt="python logo" />
              </div>
              <div className={theme === "black" ? "card-num card-num-black" : "card-num"}><span>2811</span> <span>2022</span> <span>1002 </span> <span>1998</span></div>
              <NavLink to="/sql1" className="cert-btn">View Certificate</NavLink>
              <h3 className='issuer'>Issued By: <span className='institute'>internshala</span></h3>

            </div>
          </li>
          <li className='cert-card' id="cert-card3">
            <div className={theme === "black" ? 'cert-card-body cert-card-body-black' : "cert-card-body"}>
              <h2 className='cert-h2'>SQL certificate 2</h2>
              <div className='cert-logo-link'>
                <img src={sql1} alt="python logo" />
              </div>
              <div className={theme === "black" ? "card-num card-num-black" : "card-num"}><span>2811</span> <span>2022</span> <span>1002 </span> <span>1998</span></div>
              <NavLink to="/sql2" className="cert-btn">View Certificate</NavLink>
              <h3 className='issuer'>Issued By: <span className='institute'>HackerRank</span></h3>

            </div>
          </li>
          <li className='cert-card' id="cert-card4">
          <div className={theme==="black"?'cert-card-body cert-card-body-black':"cert-card-body"}>
              <h2 className='cert-h2'>Data Engineering</h2>
              <div className='cert-logo-link'>
                <img src={data} alt="python logo" />
              </div>
              <div className={theme==="black"?"card-num card-num-black":"card-num"}><span>0412</span> <span>2022</span> <span>1002 </span> <span>1998</span></div>
              <NavLink to="/data-engg-cert" className="cert-btn">View Certificate</NavLink>
              <h3 className='issuer'>Issued By: <span className='institute'>LinkedIn</span></h3>
            </div>
          </li>
          <li className='cert-card' id="cert-card5">
          <div className={theme==="black"?'cert-card-body cert-card-body-black':"cert-card-body"}>
              <h2 className='cert-h2'>Python Certificate</h2>
              <div className='cert-logo-link'>
                <img src={python} alt="python logo" />
              </div>
              <div className={theme==="black"?"card-num card-num-black":"card-num"}><span>0104</span> <span>2021</span> <span>1002 </span> <span>1998</span></div>
              <NavLink to="/python-cert" className="cert-btn">View Certificate</NavLink>
              <h3 className='issuer'>Issued By: <span className='institute'>LinkedIn</span></h3>
            </div>
          </li>
          <li className='cert-card' id="cert-card6">
          <div className={theme==="black"?'cert-card-body cert-card-body-black':"cert-card-body"}>
              <h2 className='cert-h2'>C/C++ Certificate</h2>
              <div className='cert-logo-link'>
                <img src={cpp} alt="cpp logo" />
              </div>
              <div className={theme==="black"?"card-num card-num-black":"card-num"}><span>1601</span> <span>2022</span> <span>1002 </span> <span>1998</span></div>
              <NavLink to="/cpp-cert" className="cert-btn">View Certificate</NavLink>
              <h3 className='issuer'>Issued By: <span className='institute'>internshala</span></h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Certifications;