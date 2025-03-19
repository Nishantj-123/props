import React, { useState } from "react";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function DarkMode () {
 const[DarkMode , setDarkMode] = useState (false);

 const toggle = ()=>{
    setDarkMode((prevstate)=>!prevstate)
  }

 return (
   
      <div className={`${DarkMode ?"black":"white"}`}>
        <button onClick={toggle}>{DarkMode ? <CiSun /> : <FaMoon />}</button>
        <p className="text-5xl">my name is nishant</p>
      </div>

 )
}

export default DarkMode;
