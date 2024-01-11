import React from 'react'
import '../styles/about.css';
import aboutImg from '..//images/about.png'

function About() {
  return (
    <>
      <section className="about">
        
        <div className="a_con">
            <div className="img">
                <img src={aboutImg} alt="" />
            </div>
            <div className="desc">
              <h1>GET TO KNOW ME</h1>
                <p>
Welcome! I'm thrilled you've stopped by. I'm Gerald, a passionate web developer driven by a love for crafting digital experiences. With a blend of creativity and technical expertise, I specialize in translating ideas into visually stunning, functional websites. My journey in this dynamic field has equipped me with a diverse skill set in HTML, CSS, JavaScript, and various frameworks. Beyond mere code, I thrive on understanding client needs, ensuring that every project I embark upon not only meets but exceeds expectations. Whether it's designing responsive interfaces or optimizing user experiences, I'm dedicated to delivering innovative solutions that leave a lasting impact. Join me on this exciting adventure of shaping the web, one pixel at a time.
                </p>
                <button>Download CV</button>
            </div>
        </div>
      </section> 
    </>
  )
}

export default About