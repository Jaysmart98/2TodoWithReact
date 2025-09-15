import React, { useState } from 'react'
import './About.css'
import Button from '../../PrimaryComponents/Button/Button';
import { useNavigate, Router } from 'react-router-dom';

const About = () => {
  const [userName, setUsername] = useState();

  const navigate = useNavigate();

  const Login = () => {
    if (userName === "Joseph" ) navigate("/");
     return;
  }

  return (
    <>
      <div id='about-container'>
        <h1>This is About Page</h1>
        <input onChange={(e) => setUsername(e.target.value)} value={userName} name='username' placeholder='Username' />
        <button onClick={() => navigate(-1)} >Back</button>
        <button onClick={() => Login()}> Login</button>
      </div>
    </>
  )
}

export default About
