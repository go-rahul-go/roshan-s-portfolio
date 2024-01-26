
import Hero from "../components/Hero";

import React,{useRef} from 'react'
import Logos from "../components/Logos";
import ProjectSlider from "../components/ProjectSlider";
import Qualifications from "../components/Qualifications";
import HomeFooter from "../components/HomeFooter";
const Home = () => {
  
  return (
    <>
    <Hero/>
    <Logos/>
    <ProjectSlider/>
    <Qualifications/>
    <HomeFooter/>
    </>
  )
}

export default Home;