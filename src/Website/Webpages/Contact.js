import React from 'react'
import './Contact.css'
import { db } from '../../firebase'
import {auth} from '../../firebase'
import 'toasted-notes/src/styles.css'
import toaster from 'toasted-notes'
class Contact extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        message:null,
        subject:null,
    }
  }
  handleSubmit= (e) =>{
    let user = auth.currentUser
    console.log(this.state.subject);
    e.preventDefault()
    
      db.collection('Contact')
      .doc(user.email)
      .set({
        email:user.email,
        subject:this.state.subject,
        message:this.state.message,

      })
        .then(() => {
            toaster.notify(
                <div>
                <h3 >Your message has been sent to our admins!</h3>
            </div>, {
  position: 'top', // top-left, top, top-right, bottom-left, bottom, bottom-right
  duration: null // This notification will not automatically close
})
          
        })
        .catch(error => {
          alert(error.message)
        })
    
        
  }
  render(){
  return (
    
      <div className='wrapper'>
        <div className='title'>
        <h1>Contact Us</h1>
        </div>
        <div class="contact-form">
        <div class="input-fields">
        
        <input type="text" class="input" placeholder="Subject" onChange={(e)=>this.state.subject=e.target.value}/>
        </div>
        <div class='msg'>
        <input placeholder="Message" type="text" onChange={(e)=>this.state.message=e.target.value}></input>
        <div class="btn" onClick={this.handleSubmit}>send</div>
        </div>
        </div>
      </div>
    
    )


    
  }
  
  
}

export default Contact