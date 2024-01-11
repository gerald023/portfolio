import React from 'react'
import '../styles/nav.css'
import { Link } from 'react-router-dom/dist'
import { useState } from 'react'

function NavBar() {
    const [nav, setNav] = useState(1)
  return (
    <>
        <nav>
            <div className="scroll"></div>
            <div className="nav_con">
                <div className="logo">
                    <div className="img">
                        <img src="" alt="" />
                    </div>
                    <div className="name">
                        <h3>GERALD</h3>
                    </div>
                </div>
                <div className="links">
                    <ul>
                         <li>
                            <Link
                                to={''}
                                  onClick={()=>{
                                    setNav(1);
                                    console.log(nav);
                                    
                                }}
                                className={nav === 1 ? 'activeNav' : ''}
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                            to={'/about'}
                            onClick={()=>{
                              setNav(2);
                              console.log(nav);
                          }}
                          className={nav === 2 ? 'activeNav' : ''}
                            >About</Link>
                        </li>
                        <li>
                            <Link
                            to={'/portfolio'}
                            onClick={()=>{
                              setNav(3);
                              console.log(nav);
                          }}
                          className={nav === 3 ? 'activeNav' : ''}
                            >Portfolio</Link>
                        </li>
                        <li>
                            <Link
                            to={'/blog'}
                            onClick={()=>{
                              setNav(4);
                              console.log(nav);
                          }}
                          className={nav === 4 ? 'activeNav' : ''}
                            >Blog</Link>
                        </li>
                        <li>
                            <Link
                            to={'/contact'}
                            onClick={()=>{
                              setNav(5);
                              console.log(nav);
                          }}
                          className={nav === 5 ? 'activeNav' : ''}
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar