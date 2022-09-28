import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Action from './Action';
export default function Client(props) {

   const [show, setShow] = useState(false)

   const navigation =  useNavigate();
      const balance = ()=>{
         alert(props.money)
      }
      const exit = ()=>{
         navigation('/')
      }
      const action = ()=>{
      setShow(!show)
      }
      const edit = ()=>{
         navigation('/edit')
         }
      
  return (
    <div >
        <h1>Welcome {props.name}</h1>
 <button onClick={balance}>Balance</button>
    <br></br>
    <br></br>
 <button onClick={action}>action</button>
    <br></br>
    <br></br>
 <button onClick={exit}>exit</button>
    <br></br>
    <br></br>
 <button  onClick={edit}>edit</button>
    <br></br>
    <br></br>
   {show? <div><Action setShow={setShow} show={show} name={props.name} getSpendings={props.getSpendings}/></div>:null}
    </div>
  )
  }
