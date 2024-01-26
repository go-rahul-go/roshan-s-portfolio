import React, { useContext, useRef } from 'react'
import "./Services.css";
import { ThemeContext } from "../App";
import { useEffect } from 'react';
import data1 from "../assests/data-cleaning.png"
import data2 from "../assests/data-collection.png"
import data3 from "../assests/predictive-models.png"
import data4 from "../assests/web-analytics.png"
const Services = () => {
    const theme = useContext(ThemeContext)
    return (
        <section className={theme === "black" ? "service service-black" : "service service-white"}>
            <h1>my services</h1>
            <div className={theme === "black" ? 'service-container sc-black' : "service-container sc-white"}>
                <div className={theme==="black"?"service-card service-card-black ":"service-card"}>
                    <div className='service-img'>
                        <img src={data2} alt={"data collection"} />
                    </div>
                    <div className='s-content'>
                        <h3>Data collection</h3>
                        <p>Gathering and compiling data from various sources, which may include databases, spreadsheets, surveys, and other data repositories.</p>
                    </div>
                </div>
                <div className={theme==="black"?"service-card service-card-black ":"service-card"}>
                    <div className='service-img'>
                        <img src={data1} alt={"data collection"} />
                    </div>
                    <div className='s-content'>
                        <h3>Data cleaning</h3>
                        <p>Cleaning and organizing raw data to remove errors, inconsistencies, and irrelevant information. This may involve handling missing values, standardizing formats, and ensuring data quality.</p>
                    </div>
                </div>
                <div className={theme==="black"?"service-card service-card-black ":"service-card"}>
                <div className='service-img'>
                        <img src={data3} alt={"data collection"} />
                    </div>
                    <div className='s-content'>
                        <h3>predictive Modeling</h3>
                        <p>Building statistical or machine learning models to make predictions about future trends or outcomes based on historical data.</p>
                    </div>
                </div>
                <div className={theme==="black"?"service-card service-card-black ":"service-card"}>
                <div className='service-img'>
                        <img src={data4} alt={"data collection"} />
                    </div>
                    <div className='s-content'>
                        <h3>Data analysis</h3>
                        <p>Building statistical or machine learning models to make predictions about future trends or outcomes based on historical data.</p>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Services;