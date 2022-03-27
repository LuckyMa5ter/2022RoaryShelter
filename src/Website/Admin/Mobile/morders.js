import "./morders.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../../../dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";
import React from "react";
import {db} from '../../../firebase'
import {BiArrowBack} from 'react-icons/bi';
import {BsFillTrashFill} from "react-icons/bs"

class MOrderList extends React.Component  {
  state={date:null}
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

  
render(){
  return (
    <div className="mproductList">
      
       <table className="mwidgetLgTable">
        <tr className="mwidgetLgTr">
          <th className="mwidgetLgTh">Email</th>
          <th className="mwidgetLgTh">StudentID</th>
          <th className="mwidgetLgTh">Item</th>
          <th className="mwidgetLgTh">Date</th>
          <th className="mwidgetLgTh">Time</th>
          <th className="mwidgetLgTh">Actions</th>
        </tr>
        {
                   this.state.date &&
                   this.state.date.map( date =>(
                  
                    <tr className="mwidgetLgTr">
                    <td className="mwidgetLgUser">
                      
                      <span className="mwidgetLgName">{date.email}</span>
                    </td>
                    <td className="mwidgetLgDate">{date.studentID}</td>
                    <td className="mwidgetLgAmount">{date.FoodName}</td>
                    <td className="mwidgetLgStatus">
                      {date.date}
                    </td>
                    <td className="mwidgetLgStatus">
                      {date.time}
                    </td>
                    <td id="micon" ><BsFillTrashFill onClick={()=>this.deleteData(date.email)} size="30" color="red"/>
                    <button onClick={()=>this.handleApprove(date.email)}>Approved</button></td>

                  </tr>
                        
                   ))
                   
               }
       
      </table>
      <BiArrowBack size='50px' id='mobileback' onClick={() => window.location.assign('/mhome')}/>
    </div>
  );
}
}
export default MOrderList