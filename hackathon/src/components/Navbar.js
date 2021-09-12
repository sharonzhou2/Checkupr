import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Navbar = () => {
    return (
     <div className="navbar">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: 'blueviolet'}}><i className="fas fa-heartbeat"></i>  Checkupr</Link>
          </li>
          <li>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
          </li>
          <li>
            <Link to="/doctor" style={{ textDecoration: 'none', color: 'black' }}>I am a Health Professional</Link>
          </li>
        </ul>
    </div>
    )
}

export default Navbar
