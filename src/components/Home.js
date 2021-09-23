import React, { useEffect, useRef } from 'react'
import HomeStyle from './HomeStyle.css'
import profile from '../images/Group 1.png'
import { init } from 'ityped'
const Home = () => {
    const textRef = useRef();
    useEffect(()=>{
      init(textRef.current,{
          showCursor: false,
          strings: ["Developer","Designer"]
      });
    },[]);
    return (
        <div className="homeScreen">
        <div className="Title-bar">
            <div className="Logo"><h1>KBPR</h1></div>
            <div className="menu">
           <h1>&lt;Menu&#x2215;&gt;</h1>
            </div>
        </div>
        <div className="Profile_deatail">
            <div className="profle_intro">
            <h3>Hey, I’m  </h3>
            <h1>bharath</h1><br />
            <span>Frontend <span ref={textRef}></span></span>
           
            </div>
            <div className="profile_pic">
            <img src={profile} alt="" />
              
            </div>
        </div>
        <div className="scroll__down">
        <span><span id="mouse"><span id="cursor"></span></span>Scroll down &darr;</span>
        </div>
        </div>
    )
}

export default Home
