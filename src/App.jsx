import { useState } from 'react'

function App() {
  const [result, setResult] = useState("")
  const [input, setInput] = useState("");
  
  const handleNumber = (number) => {
    setInput(input + number);
  }

  const handleOperator = (operator) => {
    setInput(input + operator);
  }

  const handleClear = () => {
    setInput("");
    setResult("");
  }

  const handleEqual = () => {
    const calculateRes = eval(input);
    if(input === "") {
      setResult("Error");
    }
    else if(isNaN(calculateRes)) {
      setResult("NaN");
    } 
    else if(calculateRes == Infinity) {
      setResult(calculateRes);
    } 
    else if (calculateRes) {
      setResult(calculateRes);
    } 
      
  
  }


  return (
    <>
      <div className='calculator'>
        <h1>React Calculator</h1>
        <div className='input-text'>
          <input 
            type='text' 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
          {result && <p className='result'>{result}</p>}
        </div>
        <div className='btn-container'>
          <button className='btn' onClick={()=>handleNumber("7")}>7</button>
          <button className='btn' onClick={()=>handleNumber("8")}>8</button>
          <button className='btn' onClick={()=>handleNumber("9")}>9</button>
          <button className='btn' onClick={()=>handleOperator("+")}>+</button>
          <button className='btn' onClick={()=>handleNumber("4")}>4</button>
          <button className='btn' onClick={()=>handleNumber("5")}>5</button>
          <button className='btn' onClick={()=>handleNumber("6")}>6</button>
          <button className='btn' onClick={()=>handleOperator("-")}>-</button>
          <button className='btn' onClick={()=>handleNumber("1")}>1</button>
          <button className='btn' onClick={()=>handleNumber("2")}>2</button>
          <button className='btn' onClick={()=>handleNumber("3")}>3</button>
          <button className='btn' onClick={()=>handleOperator("*")}>*</button>
          <button className='btn' onClick={()=>handleClear("C")}>C</button>
          <button className='btn' onClick={()=>handleNumber("0")}>0</button>
          <button className='btn' onClick={()=>handleEqual()}>=</button>
          <button className='btn' onClick={()=>handleNumber("/")}>/</button>
        </div>
      </div>
    </>
  )
}

export default App
