import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register(props) {

  const navigation =  useNavigate();
   
  const [name, setName] = useState("");
  const [first, setFirst] = useState(0);

  const id = props.id;
  const nameOf = props.name;
  const password = props.password;
  const confirmPassword = password;
  const money = props.money;
  
    
  
    const editDetails = ()=>{
        if(moneyValidation() == true && nameValidation() == true && idValidation() == true &&  passValidation() == true && conPassValidation() == true){
            {
              const newId = document.getElementById("id").value
              const newName = document.getElementById("name").value
              const newPassword = document.getElementById("password").value
              const newconPassword = document.getElementById("confirmPassword").value
              const newMoney = document.getElementById("money").value
              props.getEdit(newId,newName,newPassword,newconPassword,newMoney);
              setFirst(1)
            }
            
        }   
    }
    useEffect(()=>{
        if(first===1){
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
        const passCheck = document.getElementById("password").value
    
        if(passCheck.length>5) { 
           return true
          
        }
        alert("pass problem")
    }
    const conPassValidation = ()=>{
        const conPassCheck = document.getElementById("confirmPassword").value;
        if(conPassCheck == document.getElementById("password").value) {
           return true
        }
        else
        alert("confirm problem")
    }
   
    const nameValidation = ()=>{
        const nameCheck = document.getElementById("name").value
        if(nameCheck.length>3) { 
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
    <div>
    <h1>Edit</h1>
    <br></br>
    <br></br>
    <input id="id" type="text" placeholder={id} />
    <br></br>
    <br></br>
    <input id="name" type="text" placeholder={nameOf} />
    <br></br>
    <br></br>
    <input id="password"type="password" placeholder={password} />
    <br></br>
    <br></br>
    <input id="confirmPassword" type="password" placeholder={confirmPassword} />
    <br></br>
    <br></br>
    <input  id="money" type="text" placeholder={money}/>
    <br></br>
    <br></br>
    <button onClick={editDetails} >edit</button>
    </div>
  )
}

