import React from 'react'
 



function ChangePassword() {
    const [username, setUsername] = useState();
    if(currentUser){
        setUsername("Current Email")
    }
    return (
        <div>
            <h4>Password Changer</h4>
            <input type="text" id="name" value={username} onChange={(e) => setUsername(e.target.value)} placeholder={"Enter Email"}></input>


        </div>
    )
}

export default ChangePassword
