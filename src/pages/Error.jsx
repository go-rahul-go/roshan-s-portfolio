import React,{useContext} from 'react'
import "./Error.css"
import {ThemeContext} from "../App"
import notFound from "../assests/logo/not-found.svg"
import { NavLink } from 'react-router-dom'
const Error = () => {
    const theme=useContext(ThemeContext)
  return (
    <div className={theme==="black"?"error-page error-page-dark":"error-page"}>
        <div className='cloud1'></div>
        <div className={theme==="black"?"satelite moon":"satelite sun"}>
            <div className='crater' id="crater1"></div>
            <div className='crater' id="crater2"></div>
            <div className='crater' id="crater3"></div>
        </div>
        <span className={theme==="black"?"not-found not-found-dark":"not-found"}>
            <div className='not-found-logo'>
                <img src={notFound} alt=" nahi hai" />
            </div>
            <h1>Page Not Found</h1>
            <NavLink to="/" className="go-home-error">Go Home</NavLink>
        </span>
        <div className='cloud2'></div>
    </div>
  )
}

export default Error;