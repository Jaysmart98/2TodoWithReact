import React from 'react'
import Button from '../PrimaryComponents/Button/Button.jsx'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
       <div id='navbar-container'>
         <ul>
            <li> <Link to={"/"}>Home</Link> </li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/faq"}>FAQ</Link></li>
         </ul>

         <Button colorParams={"#fff"} bgColor={"blue"} text={"Search"}/>
       </div>
    </>
  )
}

export default Navbar
