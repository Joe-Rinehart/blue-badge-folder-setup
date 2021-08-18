import React, { useState } from 'react';
const Calculator = (props) => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(0);

    function handleOnChangeNumber1(e) {
        setNumber1(Number(e.target.value))
    }

    function handleOnChangeNumber2(e) {
        setNumber2(Number(e.target.value))
    }


    function calculateTotal() {
        setTotal(number1 + number2)
    }
    
    return ( 
        <div>
            <p>Hello from Calculator</p>
            <input type="number" name="number1" value={number1} onChange={handleOnChangeNumber1}/>
            <input type="number" name="number2" value={number2} onChange={handleOnChangeNumber2}/>
            <button onClick = {calculateTotal} >Add</button>
            <h2>{total}</h2>
        </div>
     );
}
 
export default Calculator;