import React from 'react';
import '../styles/service.css';
import webDev from '../images/web dev.png';
import uiux from '../images/Mobile UI-UX.png';
import webDes from '../images/Web design.png'


function Services() {
  return (
    <>
        <div className="services">
            <div className="con">
                <div className="head">
                    <h3>SERVICES OFFERED</h3>
                </div>
                <div className="serve">
                    <div className="box">
                        <img src={webDev} alt="" />
                        <h4>WEB DEVELOPMENT</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente, delectus quae accusantium itaque qui hic quaerat sed nesciunt est reiciendis! Sint itaque placeat.</p>
                    </div>
                    <div className="box">
                        <img src={uiux} alt="" />
                        <h4>UI/UX</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente, delectus quae accusantium itaque qui hic quaerat sed nesciunt est reiciendis! Sint itaque placeat.</p>
                    </div>
                    <div className="box">
                        <img src={webDes} alt="" />
                        <h4>WEB DESIGN</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente, delectus quae accusantium itaque qui hic quaerat sed nesciunt est reiciendis! Sint itaque placeat.</p>
                    </div>
                    <div className="box">
                        <img src={webDev} alt="" />
                        <h4>WEB DEVELOPMENT</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente, delectus quae accusantium itaque qui hic quaerat sed nesciunt est reiciendis! Sint itaque placeat.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services