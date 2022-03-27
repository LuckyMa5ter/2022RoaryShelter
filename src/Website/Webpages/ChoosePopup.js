import React from 'react'
import './ChoosePopup.css'
function ChoosePopup(props) {
    return (props.trigger)?(
        <div className="choosepopup">
            <div className="choosepopup-inner">
                
                {props.children}
            </div>
        </div>
    ) : ""
}

export default ChoosePopup