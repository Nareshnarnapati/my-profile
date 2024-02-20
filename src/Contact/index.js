import React from 'react'
import Header from '../Navbar'
import {useState} from "react"
import "./index.css"
import {Link} from "react-router-dom";
const Contact = () => {

  const [name,setName] = useState("");
  const [number,setNumber] = useState("");
  const [email,setEmail] = useState("");


  const onChnageName = (event)=>{
    setName(event.target.value);
  }
  const onChangeNumber = (event)=>{
    setNumber(event.target.value);
  }
  const onChangeEmail = (event)=>{
    setEmail(event.target.value);
  }
  return (
    <div>
        <Header/>
    <div className="contact-con">
      <div className="input-container">
        <h1 className="contact-headng">
            Contact me
        </h1>
        <lable htmlFor="name" className="label">Name</lable>
        <input type="text" id="name" placeholder="Name" className="input-text" onClick={onChnageName}/>
        <lable htmlFor="number" className="label">Number</lable>
        <input type="number" id="number" placeholder="Number" className="input-text" onClick={onChangeNumber}/>
        <label htmlFor="email" className="label">Email</label>
        <input type="email" id="email" placeholder="Email" className="input-text" onClick={onChangeEmail}/>
        <Link to="/">
        <button className="sub-btn">
            Submit
        </button>
        </Link>
        
      </div>
      <img src="https://i.ibb.co/N1Pg3xv/profile-pic.png" alt="profile-pic" className="cont-img"/>
    </div>
    </div>
  )
}

export default Contact

