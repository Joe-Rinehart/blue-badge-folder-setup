// Have UseState
// Have a button
// function that when called it will update the state of monkeysLeft
// Once the monkeys  = 0 we need to update our display of text
// sfc is function shortcut
import React, {useState} from "react"

const TenLittleMonkeys = (props) => {
    const [count, setCount] = useState(10)
    const [isDisabled, setIsDisabled] = useState(false)

    function handleClick(e) {
        setCount(count - 1)
        if (count - 1 === 0) {
            setIsDisabled(true)
        }
    }

    return ( 
        <div>
            <button onClick = {handleClick} disabled = {isDisabled} >How Many Monkeys?</button>
            <p>{count} little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!</p>
            {count === 0 ? <p>All the Monkeys fell off</p> : null}
        </div> 
    );
}
 
export default TenLittleMonkeys;