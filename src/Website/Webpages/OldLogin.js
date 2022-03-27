import React, {useState} from 'react'
import { auth} from '../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'
import GradientBG from '../Components/images/gradientbg.webp'
import './OldLogin.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
export default function Login() {
  const [username, setUsername] = useState("Email");
  const [password, setPassword] = useState("");
  const[error, setError] = useState("");
  function signIn(email,password){
      auth.signInWithEmailAndPassword(email,password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          window.location.href="/catalog"
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(error.message)
          if(error.message=="Firebase: Error (auth/wrong-password)."||error.message=="Firebase: Error (auth/user-not-found)."||error.message=="Firebase: Error (auth/invalid-email)."){
          setError("Wrong Password or Email");
          } else{
          setError(error.message);
          }
          // ..
        });
      
  }
    return (
        
    
      <div id='pagecontainer-'>

        <div id='pagebg-'>
           <div id='logincontainer-' >
            <h1 id='logintitle-'>Log In</h1>
            
        
            <div id='username-'>
              <h1 id='usertitle-'> Username </h1>
              <div id='userfield-'>
            <FaUser id='usericon-' class='coloricon-'/>
            <input type="text" id="name-" class='coloricon'  placeholder='Enter your username' onChange={(e)=> setUsername(e.target.value)}/>

          
           
           </div>
            </div>
            
            
            <div id='username-' >
            <h1 id='usertitle-'> Password </h1>
            <div id='userfield-'>
            <FaLock id='usericon-' />
            <input type="password" id="name-" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            </div>
            </div>
            <h1 id='errorfield-'>{error}</h1>
            
            <button id='signinbutton-' label="submit" onClick={() => signIn(username,password)}>Log In</button>
            <div id='bottomstuff-' >
           <h4 id='signuplink-' onClick={() => window.location.assign('/signup')}> Sign Up</h4>
           <h4 id='or-'> or</h4>
           <h4 id='homelink-'>FogotPassword?</h4>
           </div>
            </div>
        </div>
        </div>
        
        
    )
}