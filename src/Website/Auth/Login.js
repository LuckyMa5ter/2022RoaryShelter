import React, {useState} from 'react'
import { auth} from '../../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth'
import GradientBG from '../Components/images/gradientbg.webp'
import './Login.css'
import Sigma from '../Webpages/Sigma';
import { FaUser } from "react-icons/fa";
import { FaLock } from 'react-icons/fa';
import { FaIdBadge } from 'react-icons/fa';
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

        <div id=''>
         
         
        
            <Sigma />
        </div>
       
        </div>
        
    )
}
