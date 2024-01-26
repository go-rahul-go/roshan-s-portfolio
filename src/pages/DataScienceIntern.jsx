import React,{useContext}from 'react'
import "./CertPage.css";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';

const DataScienceIntern = () => {
  const nav = useNavigate();
  const theme = useContext(ThemeContext)
  return (
    <>
      <div className={theme === "black" ? "cert-page cert-page-black" : "cert-page cert-page-white"}>
        <img src={require("../assests/certificate-images/internship.png")} alt={"logo"} title="right click to view image"/>

      </div>
      <div className="go-back">
        <button onClick={() => nav("/certificates")}>go back</button>
      </div>
    </>
  )

}

export default DataScienceIntern;