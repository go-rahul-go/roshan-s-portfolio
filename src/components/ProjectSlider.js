


import React, { useContext } from 'react'
import { ThemeContext } from "../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./projectSlider.css"
import { RxDotFilled } from "react-icons/rx";
const ProjectSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: function (i) {
      return (
        <RxDotFilled className='dot' />
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const theme=useContext(ThemeContext)
  return (
    <div className={theme==="black"?"main main-black":"main main-white"}>
      <div className={theme==="black"?"container container-black":"container"}>
        <h2 className='slider-h2'>My projects</h2>
        <Slider {...settings} className='slider'>
          <div className='card'>
            <div className={theme==="black"?"project-card project-card-black":'project-card project-card-white'}>
              <div className='image-card'>
                <img src={require("../assests/elearning.jpg")} alt={"logo"}/>
              </div>
              <div className={theme==="black"?"desc-card desc-card-black":"desc-card desc-card-white"}>
                <h2>CodingTribes.org</h2>
                <p>An online Education platform where anyone can purchase courses
                  and learning web developement and data science.
                </p>
              </div>
              <div className={theme==="black"?"tech-stack tech-stack-black":"tech-stack tech-stack-white"}>
                  <div>html</div>
                  <div>css</div>
                  <div>javascript</div>
                  <div>Bootstrap</div>
              </div>
            </div>
          </div>
          <div className='card'>

            <div className={theme==="black"?"project-card project-card-black":'project-card project-card-white'}>
              <div className='image-card'>
              <img src={require("../assests/cars.jfif")} alt={"logo"}/>
              </div>
              <div className={theme==="black"?"desc-card desc-card-black":"desc-card desc-card-white"}>
                <h2>Car price Prediction</h2>
                <p>Developed Python-based car price prediction model using machine learning for informed automotive market insights.
                </p>
              </div>
              <div className={theme==="black"?"tech-stack tech-stack-black":"tech-stack tech-stack-white"}>
                  <div>python</div>
                  <div>AI</div>
                  <div>ML</div>
                  <div>Statistics</div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className={theme==="black"?"project-card project-card-black":'project-card project-card-white'}>
              <div className='image-card'>
              <img src={require("../assests/iphone.jfif")} alt={"logo"}/>
              </div>
              <div className={theme==="black"?"desc-card desc-card-black":"desc-card desc-card-white"}>
                <h2>Iphone Web Scrapping</h2>
                <p>Web scraping iPhone data using Python for insights, leveraging requests and BeautifulSoup for efficient extraction.
                </p>
              </div>
              <div className={theme==="black"?"tech-stack tech-stack-black":"tech-stack tech-stack-white"}>
                  <div>python</div>
                  <div>AI</div>
                  <div>ML</div>
                  <div>Statistics</div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className={theme==="black"?"project-card project-card-black":'project-card project-card-white'}>
              <div className='image-card'>
              <img src={require("../assests/webscrapping.jpg")} alt={"logo"}/>
              </div>
              <div className={theme==="black"?"desc-card desc-card-black":"desc-card desc-card-white"}>
                <h2>Web scrapping</h2>
                <p>Automated data extraction from websites using code for analysis or storage purposes.
                </p>
              </div>
              <div className={theme==="black"?"tech-stack tech-stack-black":"tech-stack tech-stack-white"}>
                  <div>python</div>
                  <div>AI</div>
                  <div>ML</div>
                  <div>Statistics</div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className={theme==="black"?"project-card project-card-black":'project-card project-card-white'}>
              <div className='image-card'>
              <img src={require("../assests/Titanic.jpg")} alt={"logo"}/>
              </div>
              
              <div className={theme==="black"?"desc-card desc-card-black":"desc-card desc-card-white"}>
                <h2>titanic surviour prediction</h2>
                <p>The Titanic survivor prediction ML model uses machine learning algorithms to analyze passenger data, predicting survival probabilities.
                </p>
              </div>
              <div className={theme==="black"?"tech-stack tech-stack-black":"tech-stack tech-stack-white"}>
                  <div>python</div>
                  <div>AI</div>
                  <div>ML</div>
                  <div>Statistics</div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className={theme==="black"?"project-card project-card-black":'project-card project-card-white'}>
              <div className='image-card'>
              <img src={require("../assests/churn.png")} alt={"logo"}/>
              </div>
              <div className={theme==="black"?"desc-card desc-card-black":"desc-card desc-card-white"}>
                <h2>Churn Prediction</h2>
                <p>Churn prediction model analyzes customer behavior and historical data to forecast which customers are likely to leave a service.
                </p>
              </div>
              <div className={theme==="black"?"tech-stack tech-stack-black":"tech-stack tech-stack-white"}>
                  <div>python</div>
                  <div>AI</div>
                  <div>ML</div>
                  <div>Statistics</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>

  );
}

export default ProjectSlider;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:"50%"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}