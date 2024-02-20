import React from 'react'
import "./index.css"
import Header from '../Navbar'

const Skills = () => {
  return (
    <div className="skill-bg">
        <Header/>
        <div>
        <h1 className="skill-heading">
            Skills
        </h1>
        </div>
        <div className="skills-dict">
            
            <div className="skill-card">
            <img src="https://i.ibb.co/7rc0CbK/icons8-html-logo-64.png" alt="html" className="skill-img" />
                <p className="skill-title">HTML</p>
            </div>
            <div className="skill-card">
            <img src="https://i.ibb.co/thgLZSt/icons8-css-48.png" alt="CSS" className="skill-img" />
            <p className="skill-title">
                CSS
            </p>
            </div>
            <div className="skill-card">
            <img src="https://i.ibb.co/PChWdCN/icons8-javascript.gif" alt="javascript" className="skill-img" />
                <p className="skill-title">JavaScript</p>
            </div>
            <br/>
            <div className="skill-card">
            <img src="https://i.ibb.co/SNFQbGY/icons8-python.gif" alt="python" className="skill-img"  />
                <p className="skill-title">Python</p>
            </div>
            <div className="skill-card">
            <img src="https://i.ibb.co/GVdxHD4/icons8-react-native-48.png" alt="icons8-react-native-48" className="skill-img" />
                <p className="skill-title">React js</p>
            </div>
            <div className="skill-card">
            <img src="https://i.ibb.co/b34FXKZ/icons8-nodejs-48.png" alt="nodejs" className="skill-img" />
                <p className="skill-title">Node js</p>
            </div>
            <div className="skill-card">
            <img src="https://i.ibb.co/1fB6wPX/icons8-sql-48.png" alt="SQL" className="skill-img" />
                <p className="skill-title">SQLite</p>
            </div>
            <div className="skill-card">
            <img src="https://i.ibb.co/Fz2Ljc9/icons8-bootstrap-logo-48.png" alt="bootstrap" className="skill-img" />
                <p className="skill-title">Boostrap</p>
            </div>
            
            
            
        </div>

    </div>
  )
}

export default Skills
