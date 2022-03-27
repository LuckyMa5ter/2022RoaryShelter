import React, {useState} from 'react'
import toaster from 'toasted-notes'
import 'toasted-notes/src/styles.css';
import { db } from '../../firebase'


class Announcements extends React.Component {
    state={date:null}
    state={load:1}


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
    openNotification () {
    
        this.state.date &&
               this.state.date.map( date =>(
             
                toaster.notify(
                    <div>
                    < h2>{date.announcements}</h2>
                </div>, {
      position: 'bottom-right', // top-left, top, top-right, bottom-left, bottom, bottom-right
      duration: null // This notification will not automatically close
    }) 
                
                    
               ))
        
      }
    render(){
            return (
       
            <div>{this.openNotification()}</div>
            
        
    )
        }
}

export default Announcements
