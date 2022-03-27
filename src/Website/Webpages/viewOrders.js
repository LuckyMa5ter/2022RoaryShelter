import { db } from '../../firebase'
import './viewOrder.css'
import {auth} from '../../firebase'
import React, { useState, useEffect, useContext, createContext } from 'react';
import Popup from './Popup'
import './Popup.css'
import Cock from "../Components/images/clockclipart.png";
import { FaTimes } from 'react-icons/fa';
import 'toasted-notes/src/styles.css';
import toaster from 'toasted-notes'
import {BsFillTrashFill} from "react-icons/bs"
import { Calendar } from "react-modern-calendar-datepicker";
import { increaseBy } from '../../firebase';

class Currentorders extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            butttonPopup: false,
            docData:'',
            loadData: false,
            width: window.innerWidth,
            hour:null,
            minute:null,
        };
      }
      state= {selectedDay: null}
      state={time:null}
      state={date:null}
      state={student:null}

    handleChange(event) {
        var i=1;
        this.setState({value: event.target.value});
        
    
        

      }
      buttonSelected = selected => ev => {
        this.setState({ selected })
    }
      handleSubmit= (e) =>{
        let user = auth.currentUser;
        console.log(this.state.hour)
        e.preventDefault();
        
          db.collection('Student')
          .doc(user.email)
          .set({
            email:this.state.docData.email,
            studentID:this.state.docData.studentID,
            // foodName:this.state.docData.FoodName,
            hour:this.state.hour,
            FoodName:this.state.docData.FoodName,
            date:this.state.value,
            url:this.state.docData.url,
            minute:this.state.minute
            // email:user.email,
            // studentID:241730,
            // FoodName:test,
            // time:this.state.time,
            // url:this.state.realURL,
            // date:this.state.date

          }, { merge: true })
            .then(() => {
                toaster.notify(
                    <div>
                    <h3 >Order Confirmed</h3>
                </div>, {
      position: 'top', // top-left, top, top-right, bottom-left, bottom, bottom-right
      duration: null // This notification will not automatically close
    })
              
            })
            .catch(error => {
              alert(error.message)
            })
        
            
      }
 
    deleteData=(name,food)=> {
        let user = auth.currentUser;
        db.collection('imageCatalog').doc(food).update({quantity:increaseBy})
        db.collection('Student')
          .doc(user.email)
          .set({
            email:this.state.docData.email,
            studentID:this.state.docData.studentID,

          })
            .then(() => {
                toaster.notify(
                    <div>
                    <h3 >Order Deleted</h3>
                </div>, {
      position: 'top', // top-left, top, top-right, bottom-left, bottom, bottom-right
      duration: null // This notification will not automatically close
    })
    window.location.reload();
              
            })
        
    }

    componentDidMount() {
        
        let user = auth.currentUser;
         
         var docRef = db.collection("Student").doc(user.email);
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

        
        
    docRef.get().then((doc) => {
        if (doc.exists) {
            this.setState({docData:doc.data()})
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        
    })
          
    }
    dateChanged = selectedDay => {
      this.setState({ selectedDay });
      console.log(selectedDay)
      var days=selectedDay.day;
      var month=selectedDay.month;
      if(days<10){
        days="0"+days
      }
      if(month<10){
        month="0"+month
      }
      this.state.value= selectedDay.year.toString()+"-"+month+"-"+days.toString();
      
    };
    render(){
      const { selectedDay } = this.state;
        let contentDelete="hi";
        let user = auth.currentUser;
        if(this.state.docData.hour){
            var hour;
            var meridianbool;
            var approval="Pending";
            if (this.state.docData.hour>12) {
                hour=this.state.docData.hour-12;
                meridianbool="PM"
              }else{
                meridianbool="AM"
                hour=this.state.docData.hour
              }
              if(this.state.docData.minute==0){
                meridianbool="0"+meridianbool
              }
              if(this.state.docData.approve){
                approval="Approved"
              }
            return(
                <div className='wrapforcat'>
                      <div   trigger={this.state.butttonPopup}>
        {this.state.butttonPopup === true &&
        <div id='blureffect'></div>

        }
             </div>
                <h1 id='ordertitle'>My Orders</h1>
                <div id="order_product">
                   <div id="order_card" >
                      <div id="order_content">
                         <div id='order_metadata'>
                            <div id='order_img'> 
                               <img id = 'food_img'src={this.state.docData.url} height='300px' width='300px'></img>
                            </div>
                            <div id='order_name'>
                               <h3 id='order_foodname'>{this.state.docData.FoodName}</h3>
                            </div>
                         </div>
                         <div id='order_info'>
                            <div id='order_text'>
                               <h1 id='order_date'>Order for {this.state.docData.date}</h1>
                               <div id='order_status'>
                                  <h id='order_status1'>Order Status:  </h>
                                  {approval === 'Pending' &&
                                    <h id='order_statusp'>{approval}</h>
                                    }
                                     {approval === 'Approved' &&
                                    <h id='order_statusa'>{approval}</h>
                                    }
                                  
                               </div>
                               <h id="order_pickup">Pickup at: {this.state.docData.hour+":"+this.state.docData.minute+meridianbool}</h>
                            </div>
                            <button id='order_change'  onClick={()=> this.setState({butttonPopup:true})}>Change Pickup Time</button>
                            <button id='order_cancel'onClick={()=> this.deleteData(user.email,this.state.docData.FoodName)}>Cancel Order</button>
                         </div>
                      </div>
                   </div>
                </div>
                <Popup trigger={this.state.butttonPopup} >
                    <FaTimes id='closeicon' onClick={()=>
                    this.setState({butttonPopup:false})}/>
                    <div >
                        <h2>Here are your current scheduled dates:</h2>
                    </div>
                    <div id='datetime'>
                        <div id='cal'>
                        {this.state.width > 800 &&

<Calendar
value={selectedDay}
colorPrimary="#1966ae"
onChange={this.dateChanged}
calendarClassName="myCustomCalendar"

/>
                  
                  
                  }

                  {this.state.width <= 800 &&
                        <input
                        type="date"
                        name="date"
                        value={this.state.value}
                        onChange={event => this.setState({value: event.target.value})} 
                      />

                  }
                   
                        <h3>You are scheduling a pickup for {this.selectedDay}</h3>
                        </div>
                        <div id='times'>
                        Choose a time
                        {
                        this.state.date &&
                        this.state.date.map( date =>(
                        <div>
                            {(() => {
                                var hours;
                                var meridian;
                            if (date.date==this.state.value) {
                                if (date.hour>12) {
                                    hours=date.hour-12;
                                    meridian="PM"
                                  }else{
                                    meridian="AM"
                                    hours=date.hour
                                  }
                                  if(date.minute==0){
                                    meridian="0"+meridian
                                  }
                            return (
                            <div  >
                                <button id='timebuttons' onClick={() => this.setState({hour:date.hour,minute:date.minute})}>{hours+":"+date.minute+meridian}</button>
                            </div>
                            )
                            }
                            })()}
                        </div>
                        ))
                        }
                        <button id='confirmbutton' onClick={this.handleSubmit}>Confirm</button>
                        </div>
                </div>
            </Popup>
             </div>
             )
             }else{
             return(
             <div className='wrapforcat'>
                <div id="product">
                   <div className="card" key={'hi'}>
                      <div className="content">
                         <img src="https://www.shareicon.net/data/512x512/2016/11/09/851212_cancel_512x512.png" height='300px' width='300px'></img>
                         <h3 id= "cancel">No current Orders</h3>
                      </div>
                   </div>
                </div>
             </div>
                
                
    
                
    
                )
        }
        
    }
}

export default Currentorders;


