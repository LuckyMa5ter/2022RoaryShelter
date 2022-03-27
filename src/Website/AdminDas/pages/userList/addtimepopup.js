import React from 'react'
import './addtimepopup.css'
function addtimepopup(props) {
    return (props.trigger)?(
        <div className="addtimepopup">
            <div className="addtimepopup-inner">
                
                {props.children}
            </div>
        </div>
    ) : ""
}

export default addtimepopup