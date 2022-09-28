import React from 'react'
import { useState } from 'react'
import ButtonDetails from './ButtonDetails'


export default function Details (props) {

        const [show, setShow] = useState(false)

    const buttonDetails=()=>{
        setShow(!show)
    }

  return (
    <div >
     <button onClick={buttonDetails} >details</button>
     <div>ID:{props.id}</div>
     <div>NAME:{props.name}</div>  
     {show? <div><ButtonDetails spending={props.spending} name={props.name} id={props.id}  getDeleteSpend={props.getDeleteSpend} getDeleteOneClient={props.getDeleteOneClient} show={show} setShow={setShow}/></div>:null }
    </div>
  )
 }