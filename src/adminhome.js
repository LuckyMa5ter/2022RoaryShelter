import React from "react";

class AdminRedir extends React.Component{
    render(){
        return(
            <h3 onClick={window.innerWidth < 960 ? window.location.assign('/mhome') : window.location.assign('/hi')}>Redirecting: Please Wait</h3>
        )
    }
}

export default AdminRedir;