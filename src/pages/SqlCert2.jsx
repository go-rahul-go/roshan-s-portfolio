import React,{useContext}from 'react'
import "./CertPage.css";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';

const SqlCert2 = () => {
  const nav = useNavigate();
  const theme = useContext(ThemeContext)
  return (
    <>
      <div className={theme === "black" ? "cert-page cert-page-black" : "cert-page cert-page-white"}>
      <div className='cert-img-box'>
        <img src={require("../assests/certificate-images/sql2.png")} alt={"logo"} title="right click to view image"/>
        </div>

      </div>
      <div className="go-back">
        <button onClick={() => nav("/certificates")}>go back</button>
      </div>
    </>
  )

}
export default SqlCert2;