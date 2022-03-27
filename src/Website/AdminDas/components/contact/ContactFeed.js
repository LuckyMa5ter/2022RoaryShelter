import React from 'react'
import { db } from '../../../../firebase'
import './ContactFeed.css'
class ContactFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date:'',
        };
      }
    componentDidMount() {
        
        
        db.collection("Contact")
        .get()
        .then(snapshot =>{
            const date = [];
            snapshot.forEach(doc =>{
                const data = doc.data()
                date.push(data)
                
            })
            this.setState({date:date})
            
            
        })   
        console.log(this.state.date)
    
        
        
       
          
    }
    render(){
    return (
        <div id='cardcont'>
            {
                this.state.date &&
                this.state.date.map( date =>(
                    <div id='cardcontcard'>
                    <h3>{date.email}</h3>
                    <h2>{date.subject}</h2>
                    <h4>{date.message}</h4>
                    <h5>i</h5>
                    </div>
                )
                )
            }
        </div>
    )
}
}
export default ContactFeed
