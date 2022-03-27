import React from "react";
import productDescription from '../assets/images/box.png'
import verified from '../assets/images/organize.png'
import cogWheel from '../assets/images/export.png'
import './Product.css'

const Product = () => {
  return (
    <section className="container service" id='ourworksection'>
      
     {/* color: #1966AE */}
    
        <div className="threeRow">
            <div className="serviceBox rowLeft">
              <div className="iconHolder">
                <img src={productDescription} className = "autism"/>
              </div>
              <h2>Collect</h2>
              <p>
              Our shelter collects its food through the student government and its planned fundraisers and food donation drives. These drives are not only for other organizations, but also for our own students who may not be eligible to recieve government funding. 
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
            <div className="serviceBox rowMiddle">
              <div className="iconHolder">
              <img src={verified} className = "autism" />
              </div>
              <h2>Organize</h2>
              <p>
              The food that we recieve is then cataloged and put up onto this website for pickup by other students. All they need to do is create an account, wait to get approved, and then start scheduling their food pickups. The rest is all managed by system administrators and our website. Read our About Us page for more information on our team.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
            <div className="serviceBox rowRight">
              <div className="iconHolder">
              <img src={cogWheel} className = "autism" />
              </div>
              <h2>Distribute</h2>
              <p>
              After a student has scheduled their pickup time, date, and item of choice, the request is sent to the administrator to validate.  Meanwhile, the system messages the team in charge of preparing the items, who will pack the necessary components apart of the package and ready it for distribution.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
        </div>
    </section>
  );
};

export default Product;
