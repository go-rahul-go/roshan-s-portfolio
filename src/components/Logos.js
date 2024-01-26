import { logoData } from "../logoData";
import "./logo.css";
import React, { useContext } from 'react'
import { ThemeContext } from "../App";
const Logos = () => {
    const theme=useContext(ThemeContext)
  return (
    <div className={theme==="black"?"logo-div black-logo-div":"logo-div white-logo-div"}>
        <div className="logo-box">
            {
                logoData.map((item,index,key)=>{
                    if(index<7){
                    return(
                        <div className="logo" title={item.alt} key={index}>
                            <img src={item.url} alt={item.alt} />
                        </div>
                    )
                    }
                    return null;
                })
               

            }
        </div>
        <div className={theme==="black"?"middle-picture dark-middle-picture":" middle-picture light-middle-picture"}>
            <span>developement</span>
            <span>technology</span>
        </div>
        <div className="logo-box">
        {
                logoData.map((item,index)=>{
                    if(index>6){
                    return(
                        <div className="logo logo2" title={item.alt} key={index}>
                            <img src={item.url} alt={item.alt} />
                        </div>
                    )
                    }
                    return null;
                })
               

            }
        </div>
    </div>
  )
}

export default Logos;