import React from "react";
import img2 from '../../../Components/images/garbageLogo.png'
import './About.css'

const About = () => {
  return (
      <section className="container about" >
        <div className="aboutRow">
            <div className="aboutImage rowLeft">
              <img className="img-fluid" src={img2} alt="" srcset="" />
            </div>
            <div className="aboutText rowRight">
            <div >
              <br/>
              <h2>
                About us
              </h2>
              </div>
            <div className = "textesNuts">
              <span className = "textesNuts">
                Our Shelter is meant to provide for kids who may not be eligible for assistance from the government and are food insecure, meaning that they are unable to buy school lunch. 
              </span>
                <br/>
                <br/>
              <span className = "textesNuts">
               The purpose of this website is to connect students with providers so that they can remain productive no matter what challenges they may face. Our Website makes it easier and anonymous so that whatever actions you take, you can't be judged for them, and sometimes, that's the most important part. 
              </span>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
