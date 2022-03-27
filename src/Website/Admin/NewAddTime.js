import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../../firebase";
import { db } from "../../firebase"
import './Upload.css'
import './pasta1.jpeg'
import './NewAddTime.css'
import { FaClock } from "react-icons/fa";
import {FaHashtag} from "react-icons/fa";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import { auth } from "../../firebase";
import 'toasted-notes/src/styles.css';
import toaster from 'toasted-notes';
import { Form } from "react-bootstrap";
import Loadinggif from './loading.gif';

class NewAddTime extends React.Component{
//   constructor() {
//     super();
//     this.myRef = React.createRef();
// }
state= {hourselected: false}
state= {minselected: false}
state= {dateselected: false}
  state= {selectedDay: null}
  state= {meridianbool: false}
    state ={dateSelected: false}
    state={email: null}
    state={dateString:null}  
    state={time:null}
    state={value:null}
    state={hour:null}
    state={minutes:null}
    state={timeAvailable:["8:00am","10:30am","12:30pm","2:30pm","3:00pm"]}
    state={width:window.innerWidth}

  componentDidMount(){
    db.collection("Timing")
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
  handleChange = selectedDay => {
    this.setState({ selectedDay });
    var days=selectedDay.day;
    var month=selectedDay.month;
    if(days<10){
      days="0"+days
      this.setState({dateselected: true});
    }
    if(month<10){
      month="0"+month
    }
    this.state.value= selectedDay.year.toString()+"-"+month.toString()+"-"+days.toString()
    
  };
  handleSubmit= (e) =>{
    let user = auth.currentUser;
    console.log(this.state.hour)
    e.preventDefault();
    
      db.collection('Timing')
      .doc(this.state.minutes+""+this.state.hour+this.state.value)
      .set({
        hour:parseInt(this.state.hour),
        minute:parseInt(this.state.minutes),
        date:this.state.value
        // email:user.email,
        // studentID:241730,
        // FoodName:test,
        // time:this.state.time,
        // url:this.state.realURL,
        // date:this.state.date

      }).catch(error =>{
        alert(error.message)
      })
        .then(() => {
            toaster.notify(
                <div>
                <h3>Time Added!</h3>
            </div>, {
  position: 'top', // top-left, top, top-right, bottom-left, bottom, bottom-right
  duration: null // This notification will not automatically close
})
          
          
        })
        
        db.collection('imageCatalog')
        .doc(this.state.nameReal).delete()
    
        
  }
  render(){
    const { selectedDay } = this.state;


  return (
    
    <div >
      
      <div >

<h2>Select a date:</h2>
      </div>
      <div id='datetime'>
        <div id='cal'>
         
        {this.state.width > 800 &&

<Calendar
value={selectedDay}
colorPrimary="#1966ae"
onChange={this.handleChange}
 calendarClassName="myCustomCalendar"

/>
                  
                  
                  }

                  {this.state.width <= 800 &&
                    <input
                    type="date"
                    name="date"
                    value={this.state.selectedDay}
                    onChange={event => this.setState({value: event.target.value})} 
                  />

                  }
      {/* <h3>You are scheduling a pickup for sss{this.selectedDay}</h3> */}
        </div>
        <div id='times2'>
Choose a time
<div id ='ddtscont'>
    <select
         onChange={(e) => this.setState({ hour: e.target.value,meridianbool: true, hourselected:true })}
        
          >
      <option value={6}>--</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option  value={8}>8</option>
      <option value={9}>9</option>
      <option value={10}>10</option>
      <option value={11}>11</option>
      <option value={12}>12</option>
      <option value={13}>1</option>
      <option value={14}> 2</option>
      <option value={15}>3</option>
      <option value={16}>4</option>

    </select>
<h2>:</h2>
<select  onChange={(e) => this.setState({ minutes: e.target.value, minselected: true })}>
    <option value={6}>--</option>
    <option value={0}>00</option>
    <option value={15}>15</option>
    <option value={30}>30</option>
    <option value={45}>45</option>
  



</select>
<div trigger={this.state.meridianbool}>

  {this.state.hour < 12 && 
  
  <h3>AM</h3>
  
  }

  {this.state.hour >= 12 && 
  
  <h3>PM</h3>
  }
</div>
</div>


  <button id='confirmbutton' onClick={this.handleSubmit}>Confirm</button>




{/* <div trigger={this.state.hourselected}>
<div id="selectedindic">
  <img src={Loadinggif}/>
 <h3 id="tstitle"> Time Selected</h3>

</div>

<div id="selectedindic">
 {this.state.dateselected === false && <div><img src={Loadinggif}/>
 <h3 id="tstitle"> Date Selected</h3>
 </div>
}

{this.state.dateselected === true && <div><img src={Loadinggif}/>
 <h3 id="tstitle"> Date Selected</h3>
 </div>
}
</div>

</div> */}

        </div>
        </div>
        
    </div>
   
  )
}
}
export default NewAddTime
