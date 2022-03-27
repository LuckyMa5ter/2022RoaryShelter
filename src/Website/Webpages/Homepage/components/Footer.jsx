import React from "react";
import logo from "../assets/images/logo.svg";
import company from "../assets/images/company.svg";
import OurWork from "../../OurWork";
import './Footer.css'

const Footer = () => {
  return (
    <section className=" contact">
      <section className="FooterContainer" >
      <div className="threeRow">
        <div className="contactWrapper rowLeft">
          {/* <img src={logo} alt="" srcset="" />
          <h3>PT Dwidasa Samsara Indonesia</h3> */}

          {/* <ul>
            <li>Ruko Jalur Sutera 29A No. 53</li>
            <li>Alam Sutera Serpang, Tangerang 15323</li>
          </ul> */}
        </div>
        <div className="contactWrapper connect rowMiddle">
          {/* <p>Contact</p> */}

          {/* <ul>
            <li>Phone:+62.21.5314.1135</li>
            <li>Fax:+62.21.5314.1135</li>
            <li>Email:community@dwidasa.com</li>
          </ul> */}
        </div>
        <div className="contactWrapper rowRight">
          {/* <img style={{
            height: "100%",
            width:"100%"
          }} src={company} /> */}
        </div>
      </div>
      </section>
      <div>
        {/* <OurWork/> */}
      </div>
      <section id="footer">
        {/* <p>Copyrights &copy; 2015 - Dwidasa Samsara Indonesia</p> */}
      </section>
    </section>
  );
};

export default Footer;
