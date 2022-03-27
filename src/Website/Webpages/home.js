import React, {useState} from 'react'
import './home.css'
import styled from 'styled-components';
import {useEffect} from 'react'
import HPopup from './HomePopup';
import Sigma from './Sigma'
import easy from '../Components/images/easyuse.png'
import conv from '../Components/images/conv.png'
import Private from '../Components/images/padlock.png'
import girlusingphone from '../Components/images/tgusingphone.jpg'
import Contact from './Homepage/contact';
import { FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
import './Homepage/App';
function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [colorChange, setColorchange] = useState(false);
    const [useLogin, setUseLogin] = useState(false);
    const changeNavbarColor = () =>{
      if(window.scrollY >= 80){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }
   };   
   window.addEventListener('scroll', changeNavbarColor);
 
        return(
            <div id='pagecontainer'>
              <div  trigger={useLogin}>
            <Nav className={colorChange ? 'navYes' : 'navNo'}>
      <Logo >
     
      Roary<span>Shelter</span>
       
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
      <Padders><MenuLink onClick={() => {
    scroll.scrollToTop()}} className='homescreekkjunMenu' >
         Home
         </MenuLink></Padders>
         <Padders><Link activeClass="activessb"
       to="ourworksection"
        spy={true}
         smooth={true} 
         duration={500}
         id='smoothscrollbutton'
         offset={-70} >
           Our Work
           </Link></Padders>
           <Padders><Link activeClass="activessb"
       to="contactsection" 
       spy={true}
        smooth={true}
         duration={500} 
         id='smoothscrollbutton'
         offset={-70} >
           Contact
           </Link></Padders>
      <Padders><Link activeClass="activessb"
        to="aboutsection"
         spy={true}
          smooth={true}
           duration={500}
           id='smoothscrollbutton'  >
             About
             </Link></Padders>
     
     
      
      <Padders>
        <MenuLink>
        <Button2 onClick={() => (window.innerWidth >= 720) ?  setUseLogin(true) : window.location.assign('/signin')}>Log In</Button2>
        
        </MenuLink>
        </Padders>

        <Padders>
        <MenuLink>
        <Button2 onClick={() => (window.innerWidth >= 720) ?  setUseLogin(true) : window.location.assign('/signup')}>Sign Up</Button2>
        
        </MenuLink>
        </Padders>
      </Menu>
    </Nav>
            
             <div class="fadeIn"id='pagecontainer'>
                <div id='pagebg1'>
                    <div id='titletext'>
                        <h3 id='subtitle' >Welcome Royals! This is HSE's shelter, a solution for students to never go hungry!</h3>
                        <button  id='continuebutton'onClick={() => (window.innerWidth >= 720) ? setUseLogin(true)  : window.location.assign('/signin')}>Continue</button>
                    </div>
                </div>

            </div>
            

            </div>
           <HPopup trigger={useLogin}>
           <FaTimes id='closeicon' onClick={()=> setUseLogin(false)}/>
            <Sigma/>

           </HPopup>
           
        </div>
      
        );
    }

 
export default Home;


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
padding: 0 0rem;
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

`;


const Logo = styled.a`
padding: 1rem 2rem;
color: white;
text-decoration: none;
font-weight: 800;
font-size: 3rem;
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
background-color:transparent;
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