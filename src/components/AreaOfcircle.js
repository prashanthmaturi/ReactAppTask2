import React,{useState} from "react";

export default function AreaOfcircle(){
  let[radius,setRadius]=useState('');
  const PIE=3.14;
  let [isVisible, setIsVisible] = useState(false);
  let[res,setRes]=useState('');
  let[error,setError]=useState('');

  function calc(e){
    e.preventDefault();
    setIsVisible(true);

    if(radius===''){
      setRes('');
      setError('Enter the values');
      return 
    }
    if(isNaN(radius)){
      setRes('');
      setError('Enter the Number Only');
      return 
    }
    setError('');
    setRes(PIE*Number(radius)*Number(radius))
  }
  return(
    <div className='componentBlock'>
      <p>Area Of circle</p>
      <form onSubmit={calc}>
        <input value={radius} onChange={e=>{setRadius(e.target.value)}} placeholder='Enter First Number'/>
        <input className='btn' type='submit' value='submit'/>
      </form>
      <p>Radius :{radius}</p>
      
      {isVisible && res!==''?<p>Area :{res}</p>:(error && <p style={{color:'red'}}>Error :{error}</p>)}
    </div>
  )
}