import { db } from '../../firebase'
import './Students.css'
import {auth} from '../../firebase'
import React, { useState, useEffect, useContext, createContext } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import {BsFillTrashFill} from "react-icons/bs"

class Postprod extends React.Component{
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


    deleteData=(name)=> {
      db.collection('imageCatalog')
          .doc(name).delete()
          .then(()=>{
              window.location.reload();
          })

       
        
    }
    handleSubmit= (e) =>{
        let user = auth.currentUser;
        console.log("hi")
        e.preventDefault();
        
          db.collection('imageCatalog')
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


        db.collection("imageCatalog")
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
            <div className='app-container'>
            
             <table>
                 <thead>
                     <tr>
                         <th>Image</th>
                         <th>Name</th>
                         <th>Quantity</th>
                         <th>Product Info</th>
                         <th>Actions</th>
                     </tr>
                 </thead>
                
                     {
                    this.state.name &&
                    this.state.name.map( name =>(
                        <tbody>
                        <tr>
                        
                        
                                    <td><img src={name.url} height="100px" width="200px"></img></td>
                                    <td>{name.name}</td>
                                    <td>{name.quantity}</td>
                                    <td>{name.info}</td>
                                    <td id="icon"><FaPencilAlt size="30" color="green"/><br></br><BsFillTrashFill size="30" color="red" onClick={()=>this.deleteData(name.name)}/></td>
                                    </tr>
                    </tbody>
                    ))
                    
                }
                    
             </table>
            </div>            
                
                
            
            

            

            )
    }
}

export default Postprod;