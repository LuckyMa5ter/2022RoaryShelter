import React,{useState,useEffect} from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from './AuthContext'
import { db } from '../../firebase'
import {auth} from '../../firebase'
import { userData } from "../../dummyData"
var admin= false;
export class data extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          admin:false,
          user:null,
          date:null,
        };
      }
      componentDidMount() {
        let user= auth.currentUser;
        db.collection("Admins")
        .get()
        .then(snapshot =>{
            const name = [];
            const url =[];
            const id=[0];
            snapshot.forEach(doc =>{
                const data = doc.data()
                name.push(data)
        
            })
            this.setState({date:name})
           for(var i=0;i<name.length;i++){
             console.log(name[i])
              if(name[i].email==user.email){
                admin=true;
              }
           }
           console.log(admin)
            
        })
        


        
        
       
          
    }
    
      render() {
          return(
        <div>

        </div>
          )
      }
}
export function isAdmin(){
    return admin;
}