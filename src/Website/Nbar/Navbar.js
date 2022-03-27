import styled from "styled-components";
import { Route, Redirect } from "react-router-dom"
import { auth } from "../../firebase";
import  garbageLogo from "../Components/images/garbageLogo.png"
import 'toasted-notes/src/styles.css';
import toaster from 'toasted-notes'
import { Link, animateScroll as scroll } from "react-scroll";
import '../Webpages/Catalog'
import React, { useState, useEffect, useContext, createContext } from 'react';
import {GrUserSettings} from 'react-icons/gr'
import './Navbar.css'
export default function Navbar({ component: Component, ...rest }){

  var location= 1;
const [isOpen, setIsOpen] = useState(false);
const [error, setError] = useState("");

function signOutt(){
  auth.signOut()
  .then(()=>{
    window.location.href="/"
  }).catch((error) => {
    setError(error);
  });

 
}
if(window.location.pathname==='/catalog'||window.location.pathname==='/current-orders'||window.location.pathname==='/account'||window.location.pathname==='/contact'){
  
  
    
 

  return (
    <Nav >
    <Logo >
   
    HSE<span>Shelter</span>
     
    </Logo>
    <Hamburger onClick={() => setIsOpen(!isOpen)}>
      <span />
      <span />
      <span />
    </Hamburger>
    <Menu isOpen={isOpen}>
    <Padders><MenuLink href="/catalog">Catalog</MenuLink></Padders>
    <Padders><MenuLink href="current-orders">Current Order</MenuLink></Padders>
    <Padders><MenuLink href="contact">Contact</MenuLink></Padders>
    
    <Padders>
     <GrUserSettings onClick={() => window.location.assign('/account')}id='usersetbut' size='30px' color="white" />
     </Padders>
     {/* <Padders>
     {/* <Button2 onClick={()=> signOutt()}>Logout</Button2> */}
      {/* </Padders> */}

   
    </Menu>
  </Nav>
     
  );

}




else{
  return (
  
   <div>

   </div>
  );
}

};



const Button2= styled.a`
padding: 2rem 1rem;
background:transparent;
border-color: white;
border-style: solid;
border-width:thin;
width: 100px;
padding-bottom: 7px;
padding-top: 7px;
padding-left:30px;
padding-right:30px;
border-radius: 5px;
cursor: pointer;
color:white;
z-index:99;
&:hover {
  opacity: 0.8;
  text-decoration: none;
}
@media (max-width: 1000px) {
  padding-left:50px;
  padding-right:50px;
  margin-top:2px;
  
 
  background:linear-gradient(to right , #0E61D1 0%, #0790E8 100%);
}
`;
const Place=styled.a`
color:white;
padding-top:4px;
width: 100px;
padding-bottom: 7px;
`;
const Padders =styled.a`
padding:0rem 2rem;!important
@media (max-width: 1000px) {
  padding: 0rem 2rem;
}
`;
const Spacer =styled.a`
padding: 1rem 1rem;
`;
const MenuLink = styled.a`
cursor: pointer;
text-decoration: none;
color: white;
transition: all 0.3s ease-in;
font-size: 15px;
z-index:99;
opacity:1;

&:hover {
  opacity:.8
  text-decoration: none;
}

`;

const Nav = styled.div`
padding: 0 1rem;
max-height: 90px;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
position: absolute;
top: 0;
left: 0;
right: 0;
z-index:99;
font-family: 'Open Sans Condensed';
position: fixed;
background-color:#068CE6;
`;


const Logo = styled.a`

color: white;
text-decoration: none;
font-weight: 800;
font-size: 3rem;
padding-top = 0px;
font-family: 'Open Sans Condensed';
span {
  font-weight: 300;
  font-size: 2rem;
}
`;

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

position: relative;
@media (max-width: 1000px) {
  overflow: hidden;
  flex-direction: column;
  max-height: ${({ isOpen }) => (isOpen ? "900px" : "0")};
  transition: max-height 0.8s ease-in;
  width: 100%;
  z-index:99;
  background:linear-gradient(to right , #0E61D1 0%, #0790E8 100%);
 
  
}
`;

const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;
span {
  height: 3px;
  width: 23px;
  background: white;
  margin-bottom: 4px;
  border-radius: 5px;
  z-index:99;
  
}
@media (max-width: 1000px) {
  display: flex;
}
`;