import React,{useState} from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from 'react-icons/fa';
import { FaIdBadge } from 'react-icons/fa';
import './formsignup.css';
import { auth} from '../../../firebase'
import SocialButton from './styled/SocialButton'
import BrandButton from './styled/BrandButton'
import SlidingForm from './styled/SlidingForm'
import db from '../../../firebase'
function FormSignup (){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [iD, setID] = useState("");
  const[error, setError] = useState("")
  function signUp(username, password){
      let lastFourDigits = "";     

if (username.length > 15) 
{
  lastFourDigits = username.substring(username.length - 16);
} else
{
  lastFourDigits = username;
}

      if(password.length>=6&&lastFourDigits=="@hsestudents.org"&&password==passwordConf){
          auth.createUserWithEmailAndPassword(username, password)
          .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
          
              // ...
              window.location.href ="/catalog"
            })
            .catch((error) => {
              const errorCode = error.code;
            
              if(error.message=="Firebase: Error (auth/email-already-in-use)."){
              setError("This email is already in use");
              } else{
              setError(error.message);
              }
              // ..
            });
      }else if (password.length<6){
      setError("Please use a password greater than 6 characters");
      
  } else if(passwordConf!==password){
      setError("Make sure your passwords match")
      
  }else if(lastFourDigits!="@hsestudents.org"){
      setError("Please use your school email")
  }else if(iD<5){
    setError("Please enter your id")
  }
  }

  return(
    <SlidingForm signup>
    <h1>Create Account</h1>
    <div>
      
    </div>
    <p>Register with your email</p>
     
    <div id='userfield' >


<FaUser id='usericon' class='coloricon'/>
<input type="text" id="name2" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}></input>
</div>                
<br/>
{/* <div id='userfield'> */}

<FaLock id='usericon' class='coloricon'/>
<input type="password"  placeholder="Enter your password" id="name2" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
{/* </div> */}
<br />
{/* <div id='userfield'> */}

<FaLock id='usericon' class='coloricon'/>
<input type="password" placeholder="Confirm your password"  id="name2" value={passwordConf} onChange={(e)=> setPasswordConf(e.target.value)}></input>

<br/>
{/* 
<FaIdBadge id='usericon' class='coloricon'/>
<input type="password"  placeholder="Enter your 6-digit SID"  id="name2"value={iD} onChange={(e)=> setID(e.target.value)} ></input> */}
<p>
<a >{error}</a></p>
<button id='signupbutton' label="submit"  onClick={() => signUp(username,password)}>Sign Up</button>


{/* </div> */}

  
  </SlidingForm>
  )
}
  

export default FormSignup
