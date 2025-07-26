import React,{useState} from "react";

export default function SimpleInterest(){
    let[isVisible,setIsVisible]=useState(false);

    let[principle,setPrinciple]=useState('');
    let[time,setTime]=useState('');
    let[rate,setRate]=useState('');
    let[interest,setInterest]=useState('');

    let[amount,setAmount]=useState('');
    let[error,setError]=useState('');
    function calc(e){
        e.preventDefault();
        setIsVisible(true);
        if(principle==='' || rate==='' || time===''){
            setError('Enter the values');
            setInterest('');
            setAmount('');
            return;
        }
        if(isNaN(principle) || isNaN(rate) || isNaN(time)){
            setError('Enter Numbers Only...');
            setInterest('');
            setAmount('');
            return;
        }
        const calculatedInterest = Number(principle) * Number(time) * Number(rate) / 100;
        setInterest(calculatedInterest);
        setAmount(Number(principle) + calculatedInterest);
        setError('');
    }





  return(
    <div className='componentBlock'>
      <p>Simple Interest</p>
      <form onSubmit={calc}>
        <input value={principle} onChange={e=>{setPrinciple(e.target.value)}} placeholder="Enter Principle Amount in rupees"/>
        <input value={rate} onChange={e=>{setRate(e.target.value)}} placeholder="Enter Interest Rate percentage"/>
        <input value={time} onChange={e=>{setTime(e.target.value)}} placeholder="Enter Time Duration in years"/>
        <input className='btn' type='submit' value='submit'/>
      </form>
        <p>Principle Amount :{principle}₹</p>
        <p>Interest rate :{rate}%</p>
        <p>Time Duration :{time}years</p>
        <br></br>
        {
            isVisible && (
                interest !== '' ? (
                    <>
                        <p>Interest Amount :{interest}₹</p>
                        <p>Total Amount:{amount}₹</p>
                    </>
                ) : (
                    error && <p style={{color:'red'}}>Error :{error}</p>
                )
            )
        }


    </div>

  )
}
