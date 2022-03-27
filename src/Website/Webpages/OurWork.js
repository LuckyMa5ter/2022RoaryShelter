import React from 'react'
import './OurWork.css'

const OurWork = () => {
    return (
        <div className='ourWorkContainer'>
            <div className='ourWorkSegment'>
                <h2 className='ourWorkHeading'>Collect</h2>
                <br/> 
                <text className='ourWorkText'>Using donations and food drives hosted by the student government, we are able to collect food, not only for other</text>
                <br/>
                <text className='ourWorkText'>organizations, but also for our own students who may not be able to afford a meal</text>
                <br/> <br/> <br/>           
            </div>
            <div className='ourWorkSegment'>
                <h2 className='ourWorkHeading'>Organize</h2>
                <br/> 
                <text className='ourWorkText'>The food that we recieve is then cataloged and put up onto this website for pickup by other students. All they need to do</text>
                <br/>
                <text className='ourWorkText'>is create an account, wait to get approved, and then start scheduling their food pickups. The rest is all managed by system</text>
                <br/>
                <text className='ourWorkText'>administrators and our website. Read our About Us page for more information on our team.</text>
                <br/> <br/> <br/>
            </div>
            <div className='ourWorkSegment'>
                <h2 className='ourWorkHeading'>Distribute</h2>
                <br/>
                <text className='ourWorkText'>After a student has scheduled their pickup time, date, and item of choice, the request is sent to the administrator to validate.</text>
                <br/>
                <text className='ourWorkText'>After validation, the student gets a confirmation that their item has been approved and they just wait until it is time for</text>
                <br/>
                <text className='ourWorkText'>the pickup. Meanwhile, the system messages the team in charge of preparing the items, who will pack the necessary components</text>
                <br/>
                <text className='ourWorkText'>apart of the package and ready it for distribution.</text>
            </div>
        </div>
    )
}

export default OurWork
