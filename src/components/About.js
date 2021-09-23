import React from 'react'
import AboutStyle from './AboutStyle.css'
import About_profile from '../images/aboutpic.png'

const About = () => {
    return (
        <div className="aboutScreen">
        <div className="about_title">
        <h1>&lt;about&#x2215;&gt;</h1>
        </div>
        <div className="about_card">
            <div className="about_profile_pic outLine">
            <img src={About_profile} alt="" />
            </div>
            <div className="about_content">
            <article> “Hello this is Bharath. I wrote my first program in my 9th Grade ever since then I was marvelling what wonders we can do with programming and all that led me to take Computer Science. I belive programming as power to create anything out of nothing, Out of intrest got hand on Web, Python, Selenium,OpenCV and i’m still exploring. Now besides programming, I’m a Software Engineer by profession. I love website development and contributing to open source projects  and writting high-level tools in python. ”</article>
            </div>
        </div>
        </div>
    )
}

export default About
