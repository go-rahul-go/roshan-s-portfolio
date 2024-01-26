import React, { useState } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom'
import { FiSun } from "react-icons/fi";
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { IoMdClose } from "react-icons/io";


const Header = ({getColor,changeColor}) => {
  const theme=useContext(ThemeContext);
  const [style,changeStyle]=useState({display:"none"})
  // console.log(JSON.parse(localStorage.getItem("theme")))
  const changeTheme = ()=>{
    if(getColor==="black")
    {
      changeColor("white")
      localStorage.setItem("theme","white")
    }
     
    else{
      changeColor("black")
      localStorage.setItem("theme","black")
    }
  }
  const mobLinksStyle={
    width:"100%",
    display:"flex",
    flexDirection:"column",
    position:"absolute",
    top:"0px",
    left:"0px",
    zIndex:3,
    border:"2px solid grey"
  }
  
  const mobileMenu=()=>{
      changeStyle(mobLinksStyle)
    
  }
  const closeMenu=()=>{
    changeStyle({display:"none"})
  }
  return (
    <header className={theme==="black"?"header-dark":"header"}>
      <IoMenu className='menu' onClick={mobileMenu}/>
      <div id="header-icon">
        <div id="header-logo" style={theme==="black"?{borderColor:"white"}:{borderColor:"black"}}>
          <img src={require("../assests/hero-img.png")} alt="logo"/>
        </div>
        <h1>Roshan K.</h1>
      </div>

      <div className="links">
        <NavLink to="/" style={theme==="black"?{color:"white"}:{color:"black"}}>home</NavLink>
        <NavLink to="/services" style={theme==="black"?{color:"white"}:{color:"black"}}>services</NavLink>
        <NavLink to="/portfolio" style={theme==="black"?{color:"white"}:{color:"black"}}>portfolio</NavLink>
        <NavLink to="/contact" style={theme==="black"?{color:"white"}:{color:"black"}}>contact</NavLink>
        {/* <li>home</li>
        <li>services</li>
        <li>portfolio</li>
        <li>contact</li> */}
      </div>
      {getColor==="white"?<FaRegMoon onClick={changeTheme} className="theme-btn" />:<FiSun onClick={changeTheme} className="theme-btn"/>}

      <div className={theme==="black"?"mobile-links mobile-links-dark":"mobile-links mobile-links-white"} style={style}>
        <div id="close-div">
            <IoMdClose onClick={closeMenu} className='close-btn'/>
        </div>
      <NavLink to="/" className={theme==="black"?"link dark-link":" link light-link"}>home</NavLink>
        <NavLink to="/services" className={theme==="black"?"link dark-link":"link light-link"}>services</NavLink>
        <NavLink to="/portfolio" className={theme==="black"?"link dark-link":"link light-link"}>portfolio</NavLink>
        <NavLink to="/contact" className={theme==="black"?"link dark-link":"link light-link"}>contact</NavLink>
      </div>
    </header>
  )
}

export default Header;