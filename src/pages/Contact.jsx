import React, { useState, useContext } from 'react'
import emailjs from '@emailjs/browser';
import "./contact.css"
import { ThemeContext } from "../App"
import PopUp from '../components/PopUp';
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
const Contact = () => {

  const theme = useContext(ThemeContext)

  const [data, setData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, updateSubmitted] = useState(false)
  const submit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone,
      message: data.message
    }
    const serviceID = process.env.REACT_APP_SERVICE_ID
    const templateID = process.env.REACT_APP_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_PUBLIC_KEY

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("send")
        setData({ name: "", email: "", phone: "", message: "" })
      })
      .then((response) => {
        updateSubmitted(true)

      })
      .catch((error) => {
        console.log("something went wrong")
      })
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;

    setData((prevValue) => {
      switch (name) {
        case "user_name":
          return {
            name: val,
            email: prevValue.email,
            phone: prevValue.phone,
            message: prevValue.message

          }
        case "email":
          return {
            name: prevValue.name,
            email: val,
            phone: prevValue.phone,
            message: prevValue.message
          }
        case "phone":
          return {
            name: prevValue.name,
            email: prevValue.email,
            phone: val,
            message: prevValue.message
          }
        case "message":
          return {
            name: prevValue.name,
            email: prevValue.email,
            phone: prevValue.phone,
            message: val
          }
        default:

      }
    })
  }
  return (
    <>
      <div className={theme === "black" ? "contact-page contact-page-dark" : "contact-page"}>
        <div className={theme === "black" ? "form form-dark" : "form"}>
          <h1>Write Us</h1>
          <form onSubmit={(e) => submit(e)}>
            <label htmlFor='user_name'>your Name
            <input type="text" id="user_name" name="user_name" value={data.name} onChange={(e) => handleChange(e)} required className="inputs" maxLength={30}/></label>
            <label>Your E-mail
            <input type="email" id="email" name="email" value={data.email} onChange={(e) => handleChange(e)} required className="inputs" /></label>
            <label>Your Phone
            <input type="text" id="phone" name="phone" value={data.phone} onChange={(e) => handleChange(e)} required className="inputs" maxLength={10}/></label>
            <label htmlFor='message'>Message</label>

            <textarea id="message" name="message" value={data.message} onChange={(e) => handleChange(e)} required maxLength={200}></textarea>
            <button id="submit-btn">submit</button>
          </form>
        </div>
        <div className='contact-details'>
            <div id="detail-header">
              <h2>contact information</h2>
              <p>we're open for any suggestion or just to have a chat</p>
            </div>
            <div className='contact-point'>
              <MdLocationPin className={theme==="black"?"contact-icon contact-icon-dark":"contact-icon"}/>
              <p><span>Address: </span>New Delhi, India</p>
            </div>
            <div className='contact-point'>
              <FaPhone className={theme==="black"?"contact-icon contact-icon-dark":"contact-icon"}/>
              <p><span>phone: </span>+91  88515  65612</p>
            </div>
            <div className='contact-point'>
              <FaPaperPlane className={theme==="black"?"contact-icon contact-icon-dark":"contact-icon"}/>
              <p><span>Mail: </span>roshan27july@gmail.com</p>
            </div>
        </div>
        {submitted?<PopUp update={updateSubmitted}/>:""}
      </div>
    </>
  )
}

export default Contact