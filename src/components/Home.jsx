import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Home(props) {

   const navigation =  useNavigate();
 
    const checkDetails =()=>{
        let getNmae = document.getElementById("user").value
        let getPassWord = document.getElementById("password").value
        
        if(getNmae==="1" && getPassWord==="1"){
            navigation('/admin')
        }
        else{ 
            for(let i=0; i<props.clients.length; i++){
                if(props.clients[i].name !== getNmae || props.clients[i].password == getPassWord){
                  alert ("you have to login first")
                }
            else
                navigation(`/${props.name}`)
            }
        }
          
    }
    const newUser = ()=>{
        navigation('/register')
    } 
  return (
    <div >
    <h1> Sv Bank</h1>
    <br></br><br></br>
    <input id="user" type="text" placeholder='User Name' />
    <br></br><br></br>
    <input id="password" type="password" placeholder='paswword'/>
    <br></br><br></br>
    <div onClick={newUser}>Create new user</div>
    <br></br><br></br>
    <button onClick={checkDetails}>ENTER</button>
    </div>
  )
}
