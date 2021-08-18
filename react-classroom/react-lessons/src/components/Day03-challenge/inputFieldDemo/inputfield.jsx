//imrs shortcut for importing react {useState}
//usf shortcut for useState
import React, { useState } from 'react';
const InputField = (props) => {
    const [username, setUsername] = useState("");

    function handleOnChange(e) {
        console.log(e.target.value)
        //username = event.target.value *** Do not do this
        setUsername(e.target.value)
    }

    return ( 
        <div>
            <p>Hello from InputField</p>
            <input type="text" value ={username} onChange={handleOnChange}/>
        </div> 
    );
}
 
export default InputField;