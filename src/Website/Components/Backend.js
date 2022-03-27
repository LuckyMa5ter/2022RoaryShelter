import { times } from 'lodash';
import React from 'react'
import db from '../../firebase'
var items, time,studentInfo; 
class Backend extends React.Component {
    componentDidMount() {
        let user = auth.currentUser;
          
          db.collection("Timing")
          .get()
          .then(snapshot =>{
              const date = [];
              snapshot.forEach(doc =>{
                  const data = doc.data()
                  date.push(data)
                  
              })
              time =date;
              
              
          })   
  
  
          db.collection("imageCatalog")
          .get()
          .then(snapshot =>{
              const name = [];
              const id=[0];
              snapshot.forEach(doc =>{
                  const data = doc.data()
                  name.push(data)
              })
              items=name;
              
          })  
      }
    render(){
    return (
        <div>
            
        </div>
    )
}
}

export {items};
export {time};
export {studentInfo};
export default Backend;
