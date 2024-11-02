"use client"
import React, { useState } from 'react'
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [data, setData] = useState("");
  
  const getValue = (event) => {
   //console.log(event.target.value)
   //setData(event.target.value)
   setData((prevData) => prevData + event.target.value);
  }
  const calculation = () => {
    try {
      setData(evaluate(data).toString());
    } catch (error) {
      setData("Error");
    }
  }

  const back = () =>{
    setData(data.slice(0, -1))
  }

  const clearAll = () => {
  setData("");
}

  return (
    <>
    <div className='container'>

      <div className="display">
        <input placeholder='0' value={data} readOnly></input>
      </div>
  
      <div className="grid grid-cols-4 gap-4 gap-y-6 mt-6">
      <button onClick={getValue} value='('>(</button>
      <button onClick={getValue} value=')'>)</button>
      <button onClick={getValue} value='%'>%</button>
      <button onClick={clearAll}>AC</button>

      <button onClick={getValue} value='7'>7</button>
      <button onClick={getValue} value='8'>8</button>
      <button onClick={getValue} value='9'>9</button>
      <button onClick={getValue} value='*'>*</button>

      <button onClick={getValue} value='4'>4</button>
      <button onClick={getValue} value='5'>5</button>
      <button onClick={getValue} value='6'>6</button>
      <button onClick={getValue} value='-'>-</button>

      <button onClick={getValue} value='1'>1</button>
      <button onClick={getValue} value='2'>2</button>
      <button onClick={getValue} value='3'>3</button>
      <button onClick={getValue} value='+'>+</button>

      <button onClick={getValue} value='0'>0</button>
      <button onClick={back}>Back</button>
      <button className="bg-green-500 text-white" onClick={calculation}>=</button>
      <button onClick={getValue} value='/'>/</button>
      </div>
    </div>
    </>
  )
}

export default Calculator;