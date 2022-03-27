import React,{useState} from 'react'
import './Annouce.css'
import 'toasted-notes/src/styles.css';
import toaster from 'toasted-notes'
import { db } from '../../../../firebase'
import {FaTimes} from 'react-icons/fa'
class NewAnnou extends React.Component {
    state={message:null}
    state={date:null}
    deleteData=(name)=> {
        db.collection('Student')
            .doc(name).delete()
            .then(()=>{
                window.location.reload();
            })
      
         
          
      }
      handleSubmit= (e) =>{

        e.preventDefault();
        
          db.collection('Announcements')
          .doc('test')
          .set({
            announcement:this.message,
            title:"in progress"
            // email:user.email,
            // studentID:241730,
            // FoodName:test,
            // time:this.state.time,
            // url:this.state.realURL,
            // date:this.state.date

          })
            .then(() => {
                toaster.notify(
                    <div>
                    <h3 >{this.message}</h3>
                </div>, {
      position: 'top', // top-left, top, top-right, bottom-left, bottom, bottom-right
      duration: null // This notification will not automatically close
    })
              
              
            })
            .catch(error => {
              alert(error.message)
            })
            
        
            
      }
      componentDidMount() {
            
            
        db.collection("Announcements")
        .get()
        .then(snapshot =>{
            const date = [];
            snapshot.forEach(doc =>{
                const data = doc.data()
                date.push(data)
                
            })
            this.setState({date:date})
            
            
        })   
    
    
        
        
       
          
    }
   
    render(){
    
    
    return (
        <div>
            
            <div class="body">
                <input id='anounsubj' type='text' placeholder = 'Subject' />
            <input id='anountext' type="text" placeholder="Post Announcment here" onChange={(e) => this.setState({message:e})}/>
            <button class="btn">
            Post 
            </button>
            </div>
            <div id='currentanoun'>
        <h3>Current Announcements</h3>
        <div id='cardcont'>
        {
          
                   this.state.date &&
                   this.state.date.map( date =>(
                       <div id='cardcontcard' >
                           <FaTimes id='cardclose' size='25px' />
                    <h4>{date.title}</h4>
                    <h3>{date.announcement}</h3>
                    
                    </div>
                   ))}
                   </div>
        </div>
        </div>
    )
}
}

export default NewAnnou
