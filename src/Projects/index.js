import React from 'react'

import Header from '../Navbar'

import "./index.css"
const Projects = () => {
  return (
    <div>
        <Header/>
        <div className="project-item">
        <img src="https://i.ibb.co/Ch1cQx3/icons8-todo-list.gif" alt="todo-list" className="project-icon"/>
        <div className="detail-item">
            <h1 className="project-heading">
                Todos List
            </h1>
            <p className="project-para">
            A robust task tracking system with CRUD capabilities, crafted to simplify task management.<br/>

        ●	Designed with HTML, CSS and Bootstrap to ensure a user-friendly interface for managing tasks.<br/>
        ●	Dynamic UI updates through JavaScript event listeners and DOM operations for seamless CRUD operations.<br/>
        ●	Secure task persistence through local storage methods, ensuring that tasks are never lost.<br/>
        <span className="technologies">Technologies used:</span> HTML, CSS, JS, Bootstrap.

            </p>
        </div>
        </div>
        <div className="project-item">
        <div className="detail-item">
            <h1 className="project-heading">
                Jobby App
            </h1>
            <p className="project-para">
            Constructed an all-in-one job searching platform, Jobby App.<br/>
            ●	Built pages for Login, Home, Jobs, and Job item details with React components, form inputs, and event handlers.<br/>
            ●	Ensured secure authentication with JWT tokens and REST API calls.<br/>
            ●	Persisted login state with local storage and protected routes with React Router.<br/>
            <span className="technologies">Technologies used:</span> React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication.

           
            </p>
        </div>
        <img src="https://i.ibb.co/HVqz30S/icons8-job-seeker-64.png" alt="icons8-job-seeker-64" className="project-icon"/>
        </div>
        <div className="project-item">
        <img src="https://i.ibb.co/G5dX6mW/mobile-video.png" alt="mobile-video" className="project-icon"/>

        <div className="detail-item">
            <h1 className="project-heading">
                Nxt Watch Application
            </h1>
            <p className="project-para">
            Developed the Nxt Watch platform, a YouTube-inspired application where users can access various video categories, such as Trending, Gaming, and Saved videos, and search for specific content while customising the visual theme.<br/>
●	Crafted a responsive UI with React components for pages like Login, Home, Trending, Gaming, and Saved videos, utilising event handlers and form inputs.<br/>
●	Established user authentication through username/password input and HTTP API calls, maintaining login state with JWT tokens and local storage.<br/>
●	Enabled secure navigation using React Router components for protected routes, redirecting unauthenticated users to the login page.<br/>
<span className="technologies">Technologies used:</span>React JS, JavaScript, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication.<br/>


            </p>
        </div>
    
       
        </div>
      
    </div>
  )
}

export default Projects
