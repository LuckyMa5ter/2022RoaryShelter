import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../../firebase";
import { db } from "../../firebase"
import './Upload.css'
import './pasta1.jpeg'
import './AddTime.css'
import { FaClock } from "react-icons/fa";
import {FaHashtag} from "react-icons/fa";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";



function AddTime() {
  
  const [selectedDay, setSelectedDay] = useState(null);
  const dateSelected = false; 
  var times= [1,2,3,4,6,7,8]
  return (
    
    <div id='date-container'>
      <div id='date_information'>
<h1> Create a Pickup Time</h1>
<h3 id='detailtxt'> Create a pickup time for both your students and their families to pick up food. The date and time you enter will be created as a pickup time across all the food 
posts you have made. Students will be able to schedule a pickup for any food item you have posted at this time. Please confiem that youwill be able to fufil the order at the time you submit.
</h3>
<br/>
<br/>
<h2>Here are your current scheduled dates:</h2>
      </div>
      <div id='datetime'>
        <div id='cal'>
         
        <Calendar
       value={selectedDay}
       colorPrimary="#1966ae"
       onChange={setSelectedDay}
        calendarClassName="myCustomCalendar"
      />
      <h3>You are scheduling a pickup for {setSelectedDay}</h3>
        </div>
        <div id='times'>
Choose a time

{
  times.map( name =>(
    <select >
    <option value=''>{name}</option> 
    </select>
))
}
<button id='confirmbutton'>Confirm</button>
        </div>
        </div>
        
    </div>
   
  )
}

export default AddTime
