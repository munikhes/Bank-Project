import React from 'react'
import Details from './Details';

export default function Admin(props) {

  return (
   
    <div >
       <h1>Manager</h1>
       {props.clients.map((client)=>{
        return <div><Details name={client.name}  money={client.money}  id={client.id}  password={client.password} spending={client.spendings}  getDeleteSpend={props.getDeleteSpend} getDeleteOneClient={props.getDeleteOneClient}/></div>
       })}
    </div>
  )
 }