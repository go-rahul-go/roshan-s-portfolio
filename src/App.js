import "./style.css"

import {Routes,Route} from "react-router-dom";
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Home from "./pages/Home"
import Certifications from "./pages/Certifications.jsx"
import Header from "./components/Header"
import { createContext, useState } from "react";
import PythonCert from "./pages/PythonCert.jsx";
import SqlCert1 from "./pages/SqlCert1.jsx";
import SqlCert2 from "./pages/SqlCert2.jsx";
import Internship from "./pages/Internship.jsx";
import Cpp from "./pages/Cpp.jsx";
import DataEngg from "./pages/DataEngg.jsx";
import DataScienceIntern from "./pages/DataScienceIntern.jsx";
import Error from "./pages/Error.jsx"
export const ThemeContext=createContext();

function App() {

  const [theme,changeTheme]=useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "black";
});
  return(
    <>
    <ThemeContext.Provider value={theme}>
    <Header getColor={theme} changeColor={changeTheme}/>
    <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/services"  element={<Services/>}/>
          <Route path="/contact"  element={<Contact/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/certificates" element={<Certifications/>}/>
          <Route path="/python-cert" element={<PythonCert/>}/>
          <Route path="/sql1" element={<SqlCert1/>}/>
          <Route path="/sql2" element={<SqlCert2/>}/>
          <Route path="/intern-letter" element={<Internship/>}/>
          <Route path="/cpp-cert" element={<Cpp/>}/>
          <Route path="/data-engg-cert" element={<DataEngg/>}/>
          <Route path="/data-sci-intern" element={<DataScienceIntern/>}/>
          <Route path="*" element={<Error/>}/>
    </Routes>
    </ThemeContext.Provider>
    </>
  )
}

export default App;
