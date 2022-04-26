import {useState} from 'react'

function Calculator() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [result, setResult] = useState(0)

  const txtx = e => setX(parseInt(e.target.value))
  const txty = e => setY(parseInt(e.target.value))
  const handleResult = function(){(setResult(x + y));}
  
  return(
    <div style = {{marginLeft: "20px"}}>
      <h3>계산기 프로그램</h3>
      <p>더 하기 </p>
      <hr></hr>
      <div>
        &nbsp;
        <input type="text" value={x} onChange={txtx} dir="rtl" />
        &nbsp;
        +
        &nbsp;
        <input type="text" value={y} onChange={txty} dir="rtl" />
        &nbsp;
        <input type="button" value="=" onClick={handleResult} />
        &nbsp;
        <input type="text" value={result} readonly dir="rtl" />
      </div>
    </div>
    );

}

export default Calculator;