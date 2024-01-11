import React from 'react'
import '../styles/about.css'
import { Link } from 'react-router-dom'
function AboutBanner(props) {
  return (
    <>
        <div className="abt_banner">
            <div className="con">
                <h1>About page</h1>
                <div className="link">
                <Link to={'/'}>Home</Link>
                </div>
                <h1>{props.name}</h1>
            </div>
        </div>
    </>
  ) 
}

export default AboutBanner