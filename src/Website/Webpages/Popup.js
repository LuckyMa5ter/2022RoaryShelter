import React from 'react'
import './Popup.css'
function Popup(props) {
    return (props.trigger)?(
        <div className="choosepopup">
            <div className="choosepopup-inner">
                
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Popup