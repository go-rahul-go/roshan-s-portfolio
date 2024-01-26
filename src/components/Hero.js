import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../App'
import { PiBrainLight } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import cv from "../assests/cv.pdf"
import { FaComputer } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";


const Hero = () => {
  const theme = useContext(ThemeContext);
  // console.log(theme)
  return (
    <>
      <div className='hero' style={theme === "black" ? { backgroundColor: "#1C2826", color: "white" } : { backgroundColor: "#FFF9FB" }}>
        <div id="hero-intro" >
          <h2 style={theme === "black" ? { color: "white" } : { color: "#4E4D5C" }}>welcome to my world</h2>
          <h3 style={theme === "black" ? { color: "white" } : { color: "#4E4D5C" }}>Hi! i am <span>roshan kumar</span></h3>
          <div className='hero-bio'>
            <h3>data scientist</h3>
            <p>I am proficient in extracting, analyzing, and interpreting complex datasets to drive informed business decisions.
              Skilled in statistical analysis, data visualization, and utilizing cutting-edge tools to uncover actionable insights, contributing to organizational success through data-driven strategies.</p>
            <a href={cv} download="roshan's resume" target="_blank" id="download-cv" rel="noreferrer">Download CV<IoDownloadOutline /></a>
          </div>
        </div>
        <div id="hero-img">
          <img src={require("../assests/hero2.png")} alt=" " />
        </div>
      </div>
      <div className={theme === "black" ? " experience experience-black" : " experience experience-white"}>
        <div className={theme === "black" ? "year-box year-box-black" : "year-box year-box-white"}>
          <p id="years">01+</p>
          <p id="year-txt">Years of experience</p>
          <div id="satisfaction-box">
            <p>100% clients satisfied</p>
          </div>
        </div>
        <div className={theme === "black" ? "myself myself-black" : "myself myself-wnite"}>
          <h2>About Myself</h2>
          <p>Detail-oriented data analyst skilled in extracting insights from complex datasets. Proficient in analytics tools, programming, and effective communication for impactful results.</p>
          <div className='cards'>
            <div className={theme === "black" ? "hero-inner-card hero-inner-card-black" : "hero-inner-card hero-inner-card-white"}>
              <div className='card-icon-box' >
                <PiBrainLight className='card-icon' />
              </div>

              <div className='card-txt'>
                <h3>Artifical Intelligence</h3>
                <p>
                  AI revolutionizes industries, automating tasks, enhancing decision-making. Its learning ability evolves, shaping a future of innovation and efficiency.
                </p>
              </div>




            </div>
            <div className={theme === "black" ? "hero-inner-card hero-inner-card-black" : "hero-inner-card hero-inner-card-white"}>
              <div className='card-icon-box' >
                <FaBusinessTime className='card-icon' />
              </div>

              <div className='card-txt'>
                <h3>Data analysis</h3>
                <p>
                  AI revolutionizes industries, automating tasks, enhancing decision-making. Its learning ability evolves, shaping a future of innovation and efficiency.
                </p>
              </div>
            </div>
            <div className={theme === "black" ? "hero-inner-card hero-inner-card-black" : "hero-inner-card hero-inner-card-white"}>
              <div className='card-icon-box' >
                <FaComputer className='card-icon' />
              </div>

              <div className='card-txt'>
                <h3>Machine learning</h3>
                <p>
                  AI subset, teaches computers to learn patterns from data. Enables predictions, automation, and smarter systems. Transformative technology.
                </p>
              </div>


            </div>
            <div className={theme === "black" ? "hero-inner-card hero-inner-card-black" : "hero-inner-card hero-inner-card-white"}>
              <div className='card-icon-box' >
                <FaPython className='card-icon' />
              </div>

              <div className='card-txt'>
                <h3>Python</h3>
                <p>
                  Python, versatile programming language, powers web development, data science.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero