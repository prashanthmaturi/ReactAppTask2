import React,{useState} from "react";

export default function Additon(){
  let[num1,setNum1]=useState('');
  let[num2,setNum2]=useState('');

  let [isVisible, setIsVisible] = useState(false);
  let[res,setRes]=useState('');
  let[error,setError]=useState('');
  
  function calc(e){
    e.preventDefault(); // prevent form reload
    setIsVisible(true);

    if(num1==='' || num2==='') {
      setError('Enter the VALUES');
      setRes('');
      return;
    }
    if(isNaN(num1) || isNaN(num2)){
      setError('Enter the Numbers Only...');
      setRes('');
      return;
    }
    setError('')
    setRes(Number(num1)+Number(num2));
  }
  return(
    <div className='componentBlock'>
      <p>Addition </p>
      <form onSubmit={calc}>
        <input value={num1} onChange={e=>{setNum1(e.target.value)}} placeholder='Enter First Number'/>
        <input value={num2} onChange={e=>{setNum2(e.target.value)}} placeholder='Enter second Number'/>
        <input className='btn' type='submit' value='submit'/>
      </form>
      <p>Number 1 :{num1}</p>
      <p>Number 2 :{num2}</p>
      
      {isVisible && res!==''?<p>Result :{res}</p>:(error && <p style={{color:'red'}}>Error :{error}</p>)}
    </div>
  )
}