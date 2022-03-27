import "./widgetSm.css";

import {BsFillTrashFill} from 'react-icons/bs'
import React from "react";
import { db } from '../../../../firebase'
class WidgetSm extends React.Component {
  state={date:null}

  componentDidMount() {
        
        
    db.collection("Timing").orderBy('hour')
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
deleteData=(name)=> {
  console.log(name);
  db.collection('Timing')
      .doc(name).delete()
      .then(()=>{
          window.location.reload();
      })
  
}

  render(){
    var meridianbool=""
    var hour;
  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">Times Availible</h3>
      <ul className="widgetSmList">
       
        {
                   this.state.date &&
                   this.state.date.map( date =>(
                  
                    <li className="widgetSmListItem">
                      <div>
                      {(() => {
                        
                        if (date.hour>12) {
                          hour=date.hour-12;
                          meridianbool="PM"
                        }else{
                          meridianbool="AM"
                          hour=date.hour
                        }
                        if(date.minute==0){
                          meridianbool="0"+meridianbool
                        }
                        })()}
                      </div>
                        <div className="widgetSmUser">
            <span className="widgetSmUsername">{date.date}</span>
            <span className="widgetSmUserTitle">{hour+":"+date.minute+meridianbool}</span>
          </div>
          <button className="widgetSmButton" onClick={()=> this.deleteData(date.minute+""+date.hour+date.date)}>
            <BsFillTrashFill className="widgetSmIcon" />
           Delete
          </button>
                      </li>
                        
                   ))
                   
               }
          
          
       
       
        
      </ul>
    </div>
  );
  }
}
export default WidgetSm