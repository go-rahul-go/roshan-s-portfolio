import React, { useContext } from 'react'
import "./portfolio.css"
import { ThemeContext } from "../App"
import tutLogo from "../assests/tutorial.svg"
import { NavLink } from 'react-router-dom'
import car from "../assests/car.svg"
import phone from "../assests/iphone.svg"
import titanic from "../assests/titanic.svg"
import scrapping from "../assests/webscrapping.svg"
import customer from "../assests/customer.svg"
import githubLogo from "../assests/github-logo.svg"



const mobileCardInfo = [
  {
    url: tutLogo,
    alt: "logo",
    h2: "codingtribes.org",
    info: "offering accessible, interactive, and personalized learning experiences anytime, anywhere, fostering continuous knowledge growth.",
    link: "https://codingtribes.org/"
  },
  {
    url: car,
    alt: "logo",
    h2: "car prediction model",
    info: "A car price prediction project utilizes machine learning algorithms to analyze historical data and factors, forecasting accurate prices, aiding buyers and sellers in informed decisions",
    link: "https://github.com/iroshankumar/Cars-Price-prediction-Project"
  },
  {
    url: phone,
    alt: "logo",
    h2: "iphone web scrapping",
    info: "Web scraping iPhone data from an ecommerce site involves programmatically extracting information like prices, specifications, and reviews, providing valuable insights for analysis or comparison.",
    link: "https://github.com/iroshankumar/iphone-web-scrapping-from-flipkart"
  },
  {
    url: titanic,
    alt: "logo",
    h2: "titanic survivors prediction",
    info: "The Titanic survivor prediction ML model uses machine learning algorithms to analyze passenger data, predicting survival probabilities based on features like age, gender, and class, aiding historical analysis.",
    link: "https://github.com/iroshankumar/Titanic"
  },
  {
    url: scrapping,
    alt: "logo",
    h2: "web scrapping",
    info: "Web scraping is an automated technique for extracting data from websites. It involves fetching HTML code, parsing content, and collecting specific information, providing valuable data for analysis or storage.",
    link: "https://github.com/iroshankumar/Web-Scrapping"
  },
  {
    url: customer,
    alt: "logo",
    h2: "churn prediction model",
    info: "Churn prediction model analyzes customer behavior and historical data to forecast which customers are likely to leave a service. It helps businesses proactively retain customers by taking preventive measures.",
    link: "https://github.com/iroshankumar/CodeClause/blob/main/Churn%20Prediction%20in%20Telecom%20Industry%20using%20Logistic%20Regression.ipynb"
  }
]


const Portfolio = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <div className={theme === "black" ? "portfolio portfolio-black" : "portfolio portfolio-white"}>
        <h1>My Projects</h1>
        <div className={theme === "black" ? "p-box p-box-black" : "p-box p-box-white"}>
          <div className='p-container'>
            <div className='p-card'>
              <div className={theme === "black" ? "front front-black" : "front"}>
                <div className='project-img'>
                  <img src={tutLogo} alt={"card logo"} />

                </div>
                <h2>codingtribes.org</h2>
              </div>
              <div className='back'>
                <h2>codingtribes.org</h2>
                <p>offering accessible, interactive, and personalized learning experiences anytime, anywhere, fostering continuous knowledge growth."</p>
                <NavLink to="https://codingtribes.org/" target="_blank" className="visit-link">
                  <p>visit</p>

                </NavLink>
              </div>
            </div>
          </div>
          <div className='p-container'>
            <div className='p-card'>
              <div className={theme === "black" ? "front front-black" : "front"}>
                <div className='project-img'>
                  <img src={car} alt={"card logo"} />
                </div>
                <h2>Car price prediction</h2>
              </div>
              <div className='back'>
                <h2>car price prediction</h2>
                <p>"A car price prediction project utilizes machine learning algorithms to analyze historical data and factors, forecasting accurate prices, aiding buyers and sellers in informed decisions"</p>

                <NavLink to="https://github.com/iroshankumar/Cars-Price-prediction-Project" target="_blank" className='github-button'>
                  <div className='button-img'><img src={githubLogo} /></div>
                  <p>visit github</p>
                </NavLink>



              </div>
            </div>
          </div>
          <div className='p-container'>
            <div className='p-card'>
              <div className={theme === "black" ? "front front-black" : "front"}>
                <div className='project-img'>
                  <img src={phone} alt={"card logo"} />
                </div>
                <h2>iphone web scrapping</h2>
              </div>
              <div className='back'>
                <h2>iphone web scrapping</h2>
                <p>Web scraping iPhone data from an ecommerce site involves programmatically extracting information like prices, specifications, and reviews, providing valuable insights for analysis or comparison."</p>
                <NavLink to="https://github.com/iroshankumar/iphone-web-scrapping-from-flipkart" target="_blank" className='github-button'>
                  <div className='button-img'><img src={githubLogo} /></div>
                  <p>visit github</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='p-container'>
            <div className='p-card'>
              <div className={theme === "black" ? "front front-black" : "front"}>
                <div className='project-img'>
                  <img src={titanic} alt={"card logo"} />
                </div>
                <h2>titanic survivor prediction</h2>
              </div>
              <div className='back'>
                <h2>titanic survivor prediction</h2>
                <p>The Titanic survivor prediction ML model uses machine learning algorithms to analyze passenger data, predicting survival probabilities based on features like age, gender, and class, aiding historical analysis.</p>
                <NavLink to="https://github.com/iroshankumar/Titanic" target="_blank" className='github-button'>
                  <div className='button-img'><img src={githubLogo} alt={"github logo"} /></div>
                  <p>visit github</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='p-container'>
            <div className='p-card'>
              <div className={theme === "black" ? "front front-black" : "front"}>
                <div className='project-img'>
                  <img src={scrapping} alt={"card logo"} />
                </div>
                <h2>Web scrapping</h2>
              </div>
              <div className='back'>
                <h2>web scrapping</h2>
                <p>Web scraping is an automated technique for extracting data from websites. It involves fetching HTML code, parsing content, and collecting specific information, providing valuable data for analysis or storage.</p>
                <NavLink to="https://github.com/iroshankumar/Web-Scrapping" target="_blank" className='github-button'>
                  <div className='button-img'><img src={githubLogo} /></div>
                  <p>visit github</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className='p-container'>
            <div className='p-card'>
              <div className={theme === "black" ? "front front-black" : "front"}>
                <div className='project-img'>
                  <img src={customer} alt="" />

                </div>
                <h2>Churn prediction model</h2>
              </div>
              <div className='back'>
                <h2>Churn prediction model</h2>
                <p>Churn prediction model analyzes customer behavior and historical data to forecast which customers are likely to leave a service. It helps businesses proactively retain customers by taking preventive measures.</p>
                <NavLink to="https://github.com/iroshankumar/CodeClause/blob/main/Churn%20Prediction%20in%20Telecom%20Industry%20using%20Logistic%20Regression.ipynb" target="_blank" className='github-button'>
                  <div className='button-img'><img src={githubLogo} /></div>
                  <p>visit github</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className={theme === "black" ? "mob-port mob-port-black" : "mob-port mob-port-white"}>
        <h1>My projects</h1>



        {
          mobileCardInfo.map((item) => {
            return (
              <div className='mob-div'>
                <div className='mob-img'>
                  <img src={item.url} />
                </div>
                <div className="mob-txt"><h2>{item.h2}</h2>
                  <p>{item.info}</p>
                  <NavLink to={item.link} target='_black' className="mob-btn">visit</NavLink>
                </div>

              </div>
            )
          })
        }


      </div>
      <div className='foot-cert'>
        
          <NavLink to="/certificates" id="cert-link">show certifications</NavLink>
      </div>
    </>
  )
}

export default Portfolio