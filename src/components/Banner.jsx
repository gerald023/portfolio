import React from 'react'
import '../styles/banner.css'
import banner from '../images/coding.png'


function Banner() {
  return (
    <>
        <div className="banner">
            <div className="hero">
                <div className="txt">
                  <div className="title">
                    <h1>welcome to porfolio page i'm Gerald</h1>
                    <h4>A........</h4>
                    <div className="btn">
                      <button>Hire me</button>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <div className="curve">
                  <div class="custom-shape-divider-top-1704367504">
                      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                      </svg>
                  </div>
                  </div>
                  <div className="heroImg">
                  <img src={banner} alt="" />
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner