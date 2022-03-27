import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { db } from '../../../../firebase'
import {BsFillTrashFill} from "react-icons/bs"

class ProductList extends React.Component  {
  state={date:null}
  state={nameReal:null}
  deleteData=(name)=> {
    db.collection('Student')
        .doc(name).delete()
        .then(()=>{
            window.location.reload();
        })
  
     
      
  }
  componentDidMount() {
        
        
    db.collection("Student")
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
handleApprove=(name)=>{

  db.collection('Student')
    .doc(name)
    .set({approve:true}, { merge: true }).then(() => {
      alert("Order Approved!")
})
}
  
render(){
  return (
    <div className="productList">
      
       <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">StudentID</th>
          <th className="widgetLgTh">Item</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Time</th>
          <th className="widgetLgTh">Actions</th>
        </tr>
        {
                   this.state.date &&
                   this.state.date.map( date =>(
                  
                    <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                      
                      <span className="widgetLgName">{date.email}</span>
                    </td>
                    <td className="widgetLgDate">{date.studentID}</td>
                    <td className="widgetLgAmount">{date.FoodName}</td>
                    <td className="widgetLgStatus">
                      {date.date}
                    </td>
                    <td className="widgetLgStatus">
                      {date.time}
                    </td>
                    <td id="icon" >
                      {(() => {
                      return date.approve ?<button onClick={()=>this.handleApprove(date.email)}>Approve</button>:<h3>Approved</h3>
                    })}
                      <button onClick={()=>this.handleApprove(date.email)}>Approved</button>
                    <BsFillTrashFill onClick={()=>this.deleteData(date.email)}size="30" color="red"/>
                    
                    </td>
                    
                  </tr>
                        
                   ))
                   
               }
       
      </table>
    </div>
  );
}
}
export default ProductList