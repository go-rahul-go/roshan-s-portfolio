import React,{useContext} from 'react'
import "./popup.css"
import { FaCheckCircle } from "react-icons/fa";
import { ThemeContext } from '../App';
const PopUp = ({ update }) => {
    const theme=useContext(ThemeContext)
    return (
        <div className='popup'>
            <div className={theme==="black"?"popupinfo popupinfo-dark":"popupinfo"}>
                <div className='pop-up-greet'>
                    <FaCheckCircle className="check-icon" />
                    <p id="p1">thanks for your message</p>
                    <p>we will get back to you</p>
                </div>

                <button onClick={() => update(false)} className='pop-up-btn'>ok</button>
            </div>

        </div>
    )
}

export default PopUp;