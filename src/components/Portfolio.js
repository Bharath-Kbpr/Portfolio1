import React from 'react'
import PortfolioStyle from './PortfolioStyle.css'
import slide1 from '../images/slide1.PNG'
import slide2 from '../images/slide2.PNG'
import slide3 from '../images/slide3.PNG'
import slide4 from '../images/slide4.PNG'

const Portfolio = () => {
    const data = [
        {
            id:"1",
            icon:"https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/mobile.png",
            title:"Hostar Clone",
            desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt iste, ipsum deserunt",
            img:slide1
        },
        {
            id:"2",
            icon:"https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/mobile.png",
            title:"Food Recipe",
            desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt iste, ipsum deserunt",
            img:slide2
        },
        {
            id:"3",
            icon:"https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/mobile.png",
            title:"Amazon Clone",
            desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt iste, ipsum deserunt",
            img:slide3
        },
        {
            id:"4",
            icon:"https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/mobile.png",
            title:"Tesla Clone",
            desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt iste, ipsum deserunt",
            img:slide4
        }
    ]
    return (
        <div className="portfolioScreen">
            <div className="portfolio_title">
            <h1>&lt;portfolio&#x2215;&gt;</h1>
            </div>
            <div id="boxcontainer">
                {data.map(d=>(
                   

                    <div className="box">
                
                    <div className="Inside">
                        <div className="imgBox">
                            <img src={d.img} alt="" />
                        </div>
                        <div className="content">
                        
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            </div>
                    </div> 
                </div> 
                
                ))}
                
            </div>
     </div>
           
    )
}

export default Portfolio
