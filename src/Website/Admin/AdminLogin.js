import React, {useState} from 'react'
import { auth} from '../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'
import GradientBG from '../Components/images/gradientbg.webp'

import { FaUser } from "react-icons/fa";
import { FaLock } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
export default function AdminLogin() {
    const [username, setUsername] = useState("Email");
    const [password, setPassword] = useState("");
    const[error, setError] = useState("");
    function signIn(email,password){
        auth.signInWithEmailAndPassword(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            if(error.message=="Firebase: Error (auth/wrong-password)."||error.message=="Firebase: Error (auth/user-not-found)."||error.message=="Firebase: Error (auth/invalid-email)."){
            setError("Wrong Password or Email");
            } else{
            setError(error.message);
            }
            // ..
          });
        
    }
    return (
        
             
      <div id='pagecontainer'>

        <div id='pagebg'>
           <div id='adminlogincontainer' >
            <h1 id='logintitle'>Log In</h1>
            
        
            <div id='username'>
              <h1 id='usertitle'> Username </h1>
              <div id='userfield'>
            <FaUser id='adminicon' class='coloricon'/>
            <input type="text" id="name" class='coloricon'  placeholder='Enter your username'/>

          
           
           </div>
            </div>
            
            
            <div id='username' >
            <h1 id='usertitle'> Password </h1>
            <div id='userfield'>
            <FaLock id='adminicon' />
            <input type="password" id="name" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            </div>
            </div>
            <h1 id='errorfield'>{error}</h1>
            
            <button id='signinbutton' label="submit" onClick={() => (window.innerWidth <= 960) ? window.location.href="/mhome" : window.location.href="/hi"}>Log In</button>
            
            </div>
        </div>
        </div>
        
        
    )
}