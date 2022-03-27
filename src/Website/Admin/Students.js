import { db } from '../../firebase'
import './Students.css'
import {auth} from '../../firebase'
import React, { useState, useEffect, useContext, createContext } from 'react';
import {BsFillTrashFill} from "react-icons/bs"
import { increaseBy } from '../../firebase';


class Students extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            butttonPopup: false,
            realURL:'',
            nameReal:'',
        };

        this.handleChange = this.handleChange.bind(this);
      }

      
      
      

    
    state ={url: null}
    
    handleChange(event) {
       
      }


    deleteData=(name,food)=> {
    db.collection('imageCatalog').doc(food).update({quantity:increaseBy})
      db.collection('Student')
          .doc(name).delete()
          .then(()=>{
              window.location.reload();
          })


       
        
    }
    handleSubmit= (e) =>{
        let user = auth.currentUser;
        console.log("hi")
        e.preventDefault();
        
          db.collection('Student')
          .doc(user.email)
          .set({
            email:user.email,
            studentID:241730,
            FoodName:this.state.nameReal,
            time:this.state.time,

          })
            .then(() => {
              
              alert("The food you selected is ready to pick up at the end of the school day!")
              
            })
            .catch(error => {
              alert(error.message)
            })
            db.collection('imageCatalog')
            .doc(this.state.nameReal).delete()
            
      }
      
    componentDidMount() {
        
        
        db.collection("Time Slots")
        .get()
        .then(snapshot =>{
            const date = [];
            snapshot.forEach(doc =>{
                const data = doc.data()
                date.push(data)
                
            })
            this.setState({date:date})
            
            
        })   


        db.collection("Student")
        .get()
        .then(snapshot =>{
            const name = [];
            const url =[];
            const id=[0];
            snapshot.forEach(doc =>{
                const data = doc.data()
                name.push(data)
                url.push(data)
            })
            this.setState({name:name})
            this.setState({url:url})
            
        })
        
        
       
          
    }
    
    render(){
        
        let contentDelete="hi";
        let user = auth.currentUser;
        return(
            <div className="container">
             <table className="table">
                 <thead>
                     <tr>
                         <th>Email</th>
                         <th>studentID</th>
                         <th>Pickup Time</th>
                         <th>Pickup Product</th>
                         <th>Actions</th>
                     </tr>
                 </thead>
                
                     {
                    this.state.name &&
                    this.state.name.map( name =>(
                        <tbody>
                        <tr>
                        
                        
                                    <td>{name.email}</td>
                                    <td>{name.studentID}</td>
                                    <td>{name.time}</td>
                                    <td>{name.FoodName}</td>
                                    <td id="icon" onClick={()=>this.deleteData(name.email,name.FoodName)}><BsFillTrashFill size="30" color="red"/></td>
                        
                                    </tr>
                    </tbody>
                    ))
                    
                }
                    
             </table>
            </div>            
                
                
            
            

            

            )
    }
}

export default Students;