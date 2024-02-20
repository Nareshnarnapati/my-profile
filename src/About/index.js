import React from 'react'
import "./index.css"
import Header from '../Navbar'
import {Link} from "react-router-dom"

const About = () => {
  return (
    <>
    <Header/>
    <div className="about-bg">
       <div>
        
        <img src="https://i.ibb.co/MnW28cr/About-img.jpg" alt="About" className="about-img"/>
        </div>
        <div>
            <h1 className="discover">Discover</h1>
            <h2 className="hed-2">About me</h2>
            <p className="about-para">
                Iam naresh,Iam from hyderabad.I completed my Bachelor of Science in 2022<br/>at T.J.P.S college
                in Guntur.After completed my graduation I wanted to get into IT feiled.<br/>
                I have learned technologies Like Python,JavaScript,React js,Node js ,HTML and<br/>
                CSS,Boostrap.I have developed few Projects in my Trianing.
            </p>
            
                <p className="key">FullName: <span className="value">Narehs Narnapati</span></p>
                <p className="key">Age: <span className="value">22</span></p>
                <p className="key">E-mail: <span className="value">nareshnarnapati@gmail.com</span></p>
                <p className="key">Ph: <span className="value">8179578267</span></p>
                <p className="key">Graduation: <span className="value">B.Sc</span></p>
                <p className="key">Passout: <span className="value">2022</span></p>
                <p className="key">Address: <span className="value">SR nagar, Hyderabad-500038</span></p>

                <Link><button className="hire">
                    Hire me</button></Link>
                


        </div>
      
    </div>
    </>
  )
}

export default About
