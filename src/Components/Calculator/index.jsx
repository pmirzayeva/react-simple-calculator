import React, {useState} from 'react'
import style from './calculator.module.css'

export default function Calculator() {
  const [result,setResult]=useState("")
  const [error, setError] = useState("");


  const handleClick=(e)=>{
    setResult(result.concat(e.target.name))
  }

  const clear=()=>{
    setResult("")
  }

  const backspace=()=>{
    setResult(result.slice(0,result.length -1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
      setError("");
    } catch (error) {
      setError('Error');
    }
  };
  

  return (
    <>
    <div className={style.container}>
      <form>
        <input onChange={(e)=>setResult(e.target.value)} className={style.input} type='text' value={result}></input>
      </form>

      <div className={style.keypad}>
        <button className={style.clear} onClick={clear}>Clear</button>
        <button className={style.backspace}onClick={backspace}>C</button>
        <button className={style.highlight} onClick={handleClick}  name='/'>&divide;</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button className={style.highlight} onClick={handleClick} name='*'>&times;</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button className={style.highlight} onClick={handleClick} name='-'>&ndash;</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button className={style.highlight} onClick={handleClick} name='+'>+</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='.' onClick={handleClick}>.</button>
        <button className={`${style.result} ${style.highlight}`} onClick={calculate}>=</button>
      </div>
    </div>
    </>
  )
}
