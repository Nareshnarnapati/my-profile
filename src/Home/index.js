import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Navbar';
import "./index.css";

const Home = () => {
  
  return (
    <div>
      <Header />
      <div className="back">
        <div>
          <h1 className="line1">
            HI,IAM <br />
            <span className="title">NARESH NARNAPATI</span>
          </h1>
          <p>
            Aspiring MERN full-stack developer at NextWave Disruptive Technologies 4.0.<br />
            Responsible for both front end and back end development.
          </p>
          <div className="buttons-con">
            <Link to="/contact">
            <button className="button">
              Contact me.
            </button>
            </Link>
            

            <img src="https://i.ibb.co/s2HzZRg/bxl-linkedin-svg.png" alt="linkedin" className="link-img" />
            <img src="https://i.ibb.co/sb7b9Zn/bxl-github-svg.png" alt="git-img" className="link-img" />
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/R4kPPRN/profile-pic.png" alt="profile-pic" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;