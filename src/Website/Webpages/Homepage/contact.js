import React from "react";
import './contact.css';
class Contact extends React.Component{
 render(){
     return(
         <div id='contactsection'>
        <br/>
         <h2>Contact Us</h2>
         <div id='contactspacer' />
         <div id='contactholder'>
<div id='ciholder1'>
    Name
    <div id='infospace'/>
    Position
    <br/>
    <div id='infospace'/>
    youremail@example.com
    <br />
    <div id='infospace'/>
    (xxx) xxx xxxx
</div>
<div id='cidivider'/>
<div id='ciholder1'>Name
    <div id='infospace'/>
    Position
    <br/>
    <div id='infospace'/>
    youreamil@example.com
    <br />
    <div id='infospace'/>
    (xxx) xxx xxxx</div>
    <div id='cidivider'/>
<div id='ciholder1'>Name
    <div id='infospace'/>
    Position
    <br/>
    <div id='infospace'/>
    yourname@example.com
    <br />
    <div id='infospace'/>
    (xxx) xxx xxxx</div>
         </div>
         </div>
     )
 }   
}

export default Contact;