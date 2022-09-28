import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register(props) {

    const navigation =  useNavigate();
    const [name, setName] = useState("");
    const [first, setFirst] = useState(0)
   
    const validation = ()=>{
        if(moneyValidation() == true && nameValidation() == true && idValidation() == true &&  passValidation() == true && conPassValidation() == true){
            props.getClient(
                {id: document.getElementById("id").value,
                name: document.getElementById("name").value,
                password:  document.getElementById("password").value,
                money:  document.getElementById("money").value,
                spendings:[]
                }
            )
            setFirst(1)
        }   
    }
    useEffect(()=>{
        if(first!=0){
            navigation(`/${name}`);
        }
    })

    const moneyValidation = ()=>{
        const moneyCheck = document.getElementById("money").value;
        if( moneyCheck.length>0 && moneyCheck.length<8) {
           return true
        }
        else
        alert("money problem")
        
    }
    const passValidation = ()=>{
        const passCheck = document.getElementById("password").value;
    
        if(passCheck.length>5) {  
           return true
          
        }
        alert("pass problem")
    }
    const conPassValidation = ()=>{
        const conPassCheck = document.getElementById("conPassword").value;
        if(conPassCheck == document.getElementById("password").value) {
           return true
        }
        else
        alert("confirm problem")
    }
   
    const nameValidation = ()=>{
        const nameCheck = document.getElementById("name").value;
        if(nameCheck.length>3) {
           setName(nameCheck)  
           return true
        }
        alert("pass problem")
    }

    const idValidation= ()=>{
    const idCheck =  document.getElementById("id").value;
    if(isNaN(idCheck) == false && (idCheck.length === 9)){
        return true
    }
    else{
        alert("id problem")
    }}
  return (
    <div >
    <h1> Register</h1>
    <br></br>
    <br></br>
    <input id="id" type="text" placeholder='ID'/>
    <br></br>
    <br></br>
    <input  id="name" type="text" placeholder='Name'/>
    <br></br>
    <br></br>
    <input id="password" type="password" placeholder='password'/>
    <br></br>
    <br></br>
    <input  id="conPassword" type="password" placeholder='Confiorm password'/>
    <br></br>
    <br></br>
    <input id="money" type="text" placeholder='Money'/>
    <br></br>
    <br></br>
    <button onClick={validation}>Create</button>
    </div>
  )
}


