import React from 'react'
import './HomePopup.css'
function HomePopup(props) {
    return (props.trigger)?(
        <div className="hpopup">
          
            <div className="hpopup-inner">
               
                {props.children}
                
            </div>
        </div>
    ) : ""
}

export default HomePopup