import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import NewAddTime from '../../../Admin/NewAddTime';
import React from "react";
import Popup1 from './addtimepopup';
import Upload1 from '../../../../Website/Admin/Upload'
import { FaTimes } from 'react-icons/fa';
import { db } from "../../../../firebase";
import { FaPencilAlt } from "react-icons/fa";
import {BsFillTrashFill} from "react-icons/bs"
class ProductList extends React.Component  {
  
state={date:null , butttonPopup: false, buttonPopup: false}
deleteData=(name)=> {
  db.collection('imageCatalog')
      .doc(name).delete()
      .then(()=>{
          window.location.reload();
      })

   
    
}
  componentDidMount() {
        
        
    db.collection("imageCatalog")
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
    
    <div className="userList">
         
         <div   trigger={this.state.butttonPopup}>
        {this.state.butttonPopup === true &&
        <div id='blureffect'></div>

        }
         {this.state.buttonPopup === true &&
        <div id='blureffect'></div>

        }
             </div>
<div id='modify-flex'>
      <div className = "addTimeContainer"><button className = "addTime" onClick={()=> this.setState({butttonPopup:true})}>Add Time</button><button className = "addTime" onClick={()=> this.setState({buttonPopup:true})}>Add Item</button><br/><br/><br/></div>
      </div>
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
                    this.state.date &&
                    this.state.date.map( date =>(
                        <tbody>
                        <tr>
                        
                        
                                    <td><img src={date.url} height="100px" width="200px"></img></td>
                                    <td>{date.name}</td>
                                    <td>{date.quantity}</td>
                                    <td>{date.info}</td>
                                    <td id="icon" onClick={()=>this.deleteData(date.name)}><BsFillTrashFill size="30" color="red"/></td>
                                    </tr>
                    </tbody>
                    ))
                    
                }
                    
             </table>
             
             <Popup1 trigger={this.state.butttonPopup} >
         <FaTimes id='closeicon' onClick={()=> this.setState({butttonPopup:false})}/>
                    
                                    
                                        
                                   <NewAddTime />
                               </Popup1>
                                
             <Popup1 trigger={this.state.buttonPopup} >
         <FaTimes id='closeicon' onClick={()=> this.setState({buttonPopup:false})}/>
                    
                                    
                                        
                                   <Upload1 />
                               </Popup1>
                                
           
    </div>
  );
  }
}
export default ProductList
