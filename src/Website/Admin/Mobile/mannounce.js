import React,{useState} from 'react'
import './mannounce.css'
import 'toasted-notes/src/styles.css';
import toaster from 'toasted-notes'
import {db} from '../../../firebase'
import {BiArrowBack} from 'react-icons/bi';
class AnnounceMobile extends React.Component {
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
            
            <div class="mbody">
                <input id='manounsubj' type='text' placeholder = 'Subject' />
            <input id='manountext' type="text" placeholder="Post Announcment here" onChange={(e) => this.setState({message:e})}/>
            <button class="mbtn">
            Post 
            </button>
            </div>
            <div id='mcurrentanoun'>
        <h3>Current Announcements</h3>
        {
                   this.state.date &&
                   this.state.date.map( date =>(
                       <div>
                    <h4>{date.title}</h4>
                    <h3>{date.announcement}</h3>
                    
                    </div>
                   ))}
        </div>
        <BiArrowBack size='50px' id='mobileback' onClick={() => window.location.assign('/mhome')}/>
        </div>
    )
}
}

export default AnnounceMobile
