import { db } from '../../firebase'
import './Catalog.css'
import {auth} from '../../firebase'
import React, { useState, useEffect, useContext, createContext } from 'react';
import Popup from './ChoosePopup'
import './Popup.css'
import Clock from "../Components/images/clockclipart.png";
import { FaTimes } from 'react-icons/fa';
import 'toasted-notes/src/styles.css';
import toaster from 'toasted-notes'
import AddTime from '../Admin/NewAddTime';
import NewAddTime from '../Admin/NewAddTime';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";
import Loading from '../Components/Loading/Loading';
import { GrGateway } from 'react-icons/gr';


class Catalog extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          butttonPopup: false,
          realURL:'',
          nameReal:'',
          width: window.innerWidth,
          blurbg: false,
          info:null,
          hour:null,
          minute:null,
          date:null,
          value:null,
          mapFake:null,
          timings:null,
          datesReal:null,
          selectedDay: null,
          quan:null,
          id:null,
          loading:false,
          dateselected:false,
          timeselected:false,
          bothfalse:false,
          accountpopup: false,
      };

      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
       
      this.setState({value: event.target.value});
    }

    

    
handleSubmit= (e) =>{
      let user = auth.currentUser;
      var realURL=this.state.realURL
     
      e.preventDefault();
      if(this.state.value&&this.state.hour){
        db.collection('Student')
        .doc(user.email)
        .set({
          email:user.email,
          FoodName:this.state.nameReal,
          // foodName:this.state.nameReal,
          url:realURL+"",
          date:this.state.value,
          hour:this.state.hour,
          minute:this.state.minute,
          id:this.state.id,
          approve:false,
          // email:user.email,
          // FoodName:test,
          // time:this.state.time,
          // url:this.state.realURL,
          // date:this.state.date

        })
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

          if(this.state.quan-1==0){
             db.collection('imageCatalog')
          .doc(this.state.nameReal).delete()
          }else{
             db.collection('imageCatalog')
          .doc(this.state.nameReal)
          .set({
             name:this.state.nameReal,
             info:this.state.info,
             quantity:this.state.quan-1,         
             url:realURL+"",
             // time:this.state.time,
             // url:this.state.realURL,
             // date:this.state.date
 
           })
          }
      }
       
    }
    deleteData=(name)=> {
      db.collection('Student')
          .doc(name).delete()
          .then(()=>{
              window.location.reload();
          })
    
       
        
    }
    componentDidMount() {
      let user = auth.currentUser;
        
      db.collection("Timing").orderBy('hour')
      .get()
      .then(snapshot =>{
          const date = [];
          snapshot.forEach(doc =>{
              const data = doc.data()
              date.push(data)
              
          })
          this.setState({date:date})
          this.state.loading=true;
          
          
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
    
    //   db.collection("Student")
    //   .get()
    //   .then(snapshot =>{
    //       const name = [];
    //       const url =[];
    //       const id=[0];
    //       snapshot.forEach(doc =>{
    //           const data = doc.data()
    //           name.push(data)
    //           url.push(data)
    //       })
    //       for(var i=0;i=name.length;i++){

    //       }
          
    //   })
      
      
      
      
     
        
  }
  handleTitleChange = ev => {
    
    this.setState({selectedDay:ev})
 }
 dateChanged = selectedDay => {
     this.setState({ selectedDay });
  
     var days=selectedDay.day;
     var month=selectedDay.month;
     if(days<10){
       days="0"+days
     }
     if(month<10){
       month="0"+month
     }
     this.state.value= selectedDay.year.toString()+"-"+month+"-"+days.toString()
     
     
   };
 
 render(){
        
      var meridianbool=""
      var hour;
      let myCurrentDate = new Date()
let currDate = myCurrentDate.getDate();
let month = myCurrentDate.getMonth() + 1;
let year = myCurrentDate.getFullYear();
        const { selectedDay } = this.state;
        return(
           <div >
         <div   trigger={this.state.butttonPopup}>
        {this.state.butttonPopup === true &&
        <div id='blureffect'></div>

        }
             </div>
        <div className='wrapforcat'>
           <div >
             
         
             { this.state.loading ? this.state.name &&
             this.state.name.map( name =>(
              <div id="product">
             <div className="card" >
                <img src={name.url} alt=""/>
                <div className="content">
                   <h3>
                      {name.name}
                   </h3>
                   <span>Quantity:{name.quantity}</span>
                   <h5 className="info">
                      {name.info}
                   </h5>
                   <button  onClick={()=> this.setState({butttonPopup:true, nameReal:name.name,realURL:name.url,quan:name.quantity, blurbg:true,info:name.info})}>Pickup</button> 
                   {/* <button onClick={()=>{}} onClick={this.handleSubmit}>JIII</button>  */}
                   
                      
                </div>
                
             </div>
             </div>
             )):<Loading/>
             }
             
            
          
          
          <Popup trigger={this.state.butttonPopup} >
             <FaTimes id='closeicon' onClick={()=>
             this.setState({butttonPopup:false, blurbg: false })}/>
             <div id='titleinfo'>
                <h2 id='picktimetitle'>Select a pickup time:</h2>

                <div trigger={this.state.dateselected} trigger={this.state.timeselected} id='selectedtime'>
                {this.state.bothfalse=== this.state.dateselected && this.state.timeselected}
                
                  { this.state.bothfalse &&
                  <h3>Hi</h3>

                  }
                  { 

                  }
                </div>
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
                id='choosepopupcal'
                value={this.state.selectedDay}
                onChange={event => this.setState({value: event.target.value})} 
              />

                  }
                   
                 
                   <h3>Choose pickup date and time </h3>
                </div>
                <div id='times'>
               
                   Choose a time
                   {/* <select> */}
                      
                     
                   {
                   this.state.date &&
                   this.state.date.map( date =>(
                      
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
                         
                              if (date.date==this.state.value) {
                            return (
                           
                              <div  >
                              <button id='timebuttons' onClick={() => this.setState({hour:date.hour,minute:date.minute, timeselected:true})}>{hour+":"+date.minute+meridianbool}</button>
                           </div>
                           
                            )
                            }
                            })()}
                     </div>
                  
                   ))
                   }
                   {/* </select> */}
                   <button id='confirmbutton' onClick={this.handleSubmit}>Confirm</button>
                  
                </div>
             </div>
          </Popup>
       </div>    
       </div>
      
             </div>  
             
                
            
            

            

            )
    }
}

export default Catalog;