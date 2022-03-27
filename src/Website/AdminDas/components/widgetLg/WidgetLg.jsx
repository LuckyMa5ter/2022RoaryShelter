import "./widgetLg.css";
import { db } from '../../../../firebase'
import React from "react";
class WidgetLg extends React.Component {
  state={date:null}

  componentDidMount() {
        
        
    db.collection("Student").orderBy('date')
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
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Incoming Orders</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">StudentID</th>
          <th className="widgetLgTh">Item</th>
          <th className="widgetLgTh">Date</th>
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
                  </tr>
                        
                   ))
                   
               }
       
      </table>
    </div>
  )}
}
export default WidgetLg