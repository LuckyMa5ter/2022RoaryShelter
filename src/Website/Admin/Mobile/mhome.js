import React from 'react';
import './mhome.css';
import {BsBoxSeam} from 'react-icons/bs'
import {IoFastFoodOutline} from 'react-icons/io5'
import {BsMegaphone} from 'react-icons/bs'
class MobileHome extends React.Component {
    render() { 
        return <div id='mhomecontainer'>
            <div id='mhometext'>
                <h1>Shelter Admin</h1>
                <h3>Home Page</h3>
            </div>

            <div id='mhomenavbuttons'>
                <button onClick={() => window.location.assign('/morder')} id='mnavb' >
                <BsBoxSeam size='lg' id='mhomeicons'/>
                    Orders
                    </button>
                <button onClick={() => window.location.assign('/mproduct')}id='mnavb' >
                    <IoFastFoodOutline size='2x' />
                    Items
                    </button>
                <button onClick={() => window.location.assign('/mannounce')} id= 'mnavb' >
                    <BsMegaphone size='2x' />
                    Announcements
                    </button>
            </div>
        </div>;
    }
}
 
export default MobileHome;