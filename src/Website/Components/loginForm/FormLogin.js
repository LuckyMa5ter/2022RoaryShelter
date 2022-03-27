import React,{useState} from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from 'react-icons/fa';
import { auth} from '../../../firebase'
import SocialButton from './styled/SocialButton'
import BrandButton from './styled/BrandButton'
import SlidingForm from './styled/SlidingForm'

function FormLogin (){
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
  return(
  <SlidingForm>
    <h1 id = 'signInTitle'>Sign in</h1>
    
    <div id='username'>
              
              <div id='userfield'>
            <FaUser id='usericon' class='coloricon'/>
            <input type="text" id="name2" class='coloricon'  placeholder='Enter your username' onChange={(e)=> setUsername(e.target.value)}/>

          
           
           </div>
            </div>
            
            
            <div id='username' >
           
            <div id='userfield'>
            <FaLock id='usericon' />
            <input type="password" id="name2" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            </div>
            </div>
    <p>
      Forgot your password?
    </p>
    <p>
      <a>{error}</a>
    </p>
       
    <BrandButton onClick={() => signIn(username,password)}>Sign in</BrandButton>
  </SlidingForm>
)
} 

export default FormLogin
