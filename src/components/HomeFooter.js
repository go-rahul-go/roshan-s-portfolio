import React, { useContext } from 'react'
import "./HomeFooter.css";
import { ThemeContext } from "../App";
import { NavLink } from 'react-router-dom';
import footLogo from "../assests/hero-img-modified.png";
import hackerrank from "../assests/hackerrank icon.png"
import facebook from "../assests/facebook.svg"
import linkedin from "../assests/linkedin.svg"
import github from "../assests/github.svg";
import { FaRegCopyright } from "react-icons/fa";

const socialMediaLogos = [
    {
        id: 0,
        url: linkedin,
        alt: "an icon of linkedin"
    },
    {
        id: 1,
        url: facebook,
        alt: "an icon of facebook",

    },
    {
        id: 2,
        url: hackerrank,
        alt: "instagram icon"
    },
    {
        id: 3,
        url: github,
        alt: "github icon"
    }
]

const HomeFooter = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme === "black" ? "home-foot home-foot-dark" : "home-foot home-foot-white"}>
            <div className={theme === "black" ? "foot-logo foot-logo-black" : "foot-logo foot-logo-white"}>
                <div className={theme === "black" ? " foot-pic foot-pic-black" : "foot-pic foot-pic-white"}>
                    <img src={require("../assests/avataar.png")} alt="logo" />
                </div>
                <h2>Roshan Kumar.</h2>
            </div>
            <div className={theme === "black" ? "foot-links foot-links-black" : "foot-links foot-links-white"}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className={theme === "black" ? "social social-black" : "social social-white"}>
                <NavLink to="https://www.linkedin.com/in/iroshan" className={theme === "black" ? "social-icons social-icons-black" : "social-icons social-icons-white"} target="_black" title="visit my linkedIn profile">
                    <img src={socialMediaLogos[0].url} alt={"p"} />
                </NavLink>
                <NavLink to="https://www.facebook.com/" className={theme === "black" ? "social-icons social-icons-black" : "social-icons social-icons-white"} target="_black" title="visit my facebook profile">
                    <img src={socialMediaLogos[1].url} alt={"p"} />
                </NavLink>
                <NavLink to="https://www.hackerrank.com/profile/IROSHAN2" className={theme === "black" ? "social-icons social-icons-black" : "social-icons social-icons-white"} target="_black" title="visit my hackerrank profile">
                    <img src={socialMediaLogos[2].url} alt={"p"} />
                </NavLink>
                <NavLink to="https://github.com/iroshankumar" className={theme === "black" ? "social-icons social-icons-black" : "social-icons social-icons-white"} target="_black" title="visit my github profile">
                    <img src={socialMediaLogos[3].url} alt={"p"} />
                </NavLink>
            </div>
            <div className={theme === "black" ? "copyright copyright-black" : "copyright copyright-white"}>
                <div className="copyright-logo">
                <FaRegCopyright className='c-logo'/>
                <span>Roshan K.</span>
                  <p>2024-Present</p>
                
                </div>
                <div className="rights">
                       <p> All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter;