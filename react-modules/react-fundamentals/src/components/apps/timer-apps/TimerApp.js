import React, { useState, useEffect } from 'react';
const [secondsElapsed, setSecondsElapsed] = useState(0);

const TimerApp = () => {
    return ( 
        <div>
            <h1 className="section-title">React Timer</h1>
            <div>Seconds Elapsed: {secondsElapsed}</div>
        </div>
     );
}
 
export default TimerApp;