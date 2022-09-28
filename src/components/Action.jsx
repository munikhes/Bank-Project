import React from 'react'

export default function Action(props) {


        const pay=()=>{
        const company = document.getElementById("companyName").value;
        const expenses = document.getElementById("expenses").value; 
        props.getSpendings(props.name,company,expenses)
        props.setShow(!props.show);
        };

  return (
    <div >
    <h1> Action</h1>
    <br></br>
    <br></br>
    <input id="companyName" type="text" placeholder='text'/>
  
    <input id="expenses" type="number" placeholder='number'/>
    <br></br>
    <br></br>
  
    <button onClick={pay}>pay</button>
    </div>
  )
}
