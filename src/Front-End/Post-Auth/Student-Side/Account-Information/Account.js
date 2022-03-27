import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from '../../../../Website/Nbar/Navbar'
import './account.css'
import {BsPersonBadge} from 'react-icons/bs'
import { db } from '../../../../firebase'
import { auth } from '../../../../firebase'
import Popup from '../../../../Website/Webpages/Popup'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Button } from '@mui/material';

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            confPassword: "",
            error: ""
        }
      }
    state ={docData: null}
    state ={butttonPopup: false}
 
    signOutt(){
        auth.signOut()
        .then(()=>{
          window.location.href="/"
        }).catch((error) => {
        });
      
       
      }
      handleChangePassword(){
          if(this.state.confPassword==this.state.password){
            auth.updatePassword(this.state.password).then(()=>{
                window.location.href="/"
              }).catch((error) => {
                  this.state.error=error;
              });
          }
        
      }
    render(){
        var user = auth.currentUser;
    return (
        <div>
            <div id = 'account-container'>
                <br/> <br/> <br/> <br/>

                <div id = "circleaccticon">
                    <BsPersonBadge id='accountbadge' size='150px'/>
                    {/* <AccountCircleIcon id = "circleaccticon"/> */}
                </div>
                <div id = 'account-containerception'>
                    <span>Email:</span>
                    <br/>
                    <br/>
                    <span>{user.email}</span>
                    <br/>
                    <br/>
                </div>
                
                <div id='modifyacctbtns'>
                    <br/>
                    <br/>
                     <button id = "changepw" onClick={()=> this.setState({butttonPopup:true})}>Change Password</button> 
                     <button id = "logout" onClick={()=> this.signOutt()}>Logout</button> 
                </div>
            </div>
            <Popup trigger={this.state.butttonPopup}>
                <h1>Change Password</h1>
                <input type="text" class="input" placeholder="Subject" onChange={(e)=>this.state.password=e.target.value}/>
                <input type="text" class="input" placeholder="Subject" onChange={(e)=>this.state.confPasword=e.target.value}/>
                <h3>{this.state.error}</h3>
                <button onClick={this.handleChangePassword}>Change Password</button>
            </Popup>
        </div>
    )
}
}
export default Account
