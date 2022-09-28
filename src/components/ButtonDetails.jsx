import React,{useState,useEffect} from 'react'

export default function ButtonDetails (props) {

   const [list, updateList] = useState(props.spending);
   const [updateSpends, setUpdateSpends] = useState(0);
   

    const deleteSpend=(e)=>{
     let x = e.target.getAttribute("removecompany")
    updateList(list.filter(items=>items.companyName !==x )) 
    setUpdateSpends(1)
    };
    useEffect(()=>{
      props.getDeleteSpend(props.id,list)
    },[updateSpends]);
    const deleteClient = ()=>{
      props.getDeleteOneClient(props.id)
    };
    const back = ()=>{
      props.setShow(!props.show)
    }
   
  
  return (
    <div >
         <h3>spendings:</h3>
         <button onClick={deleteClient}>Delete Client</button>
         {list.map((spend)=>{
        return <div>
            <button removecompany={spend.companyName} onClick={deleteSpend}>X</button>
            <h4>{spend.companyName}</h4>
            <h4>{spend.expensesOfCompany}</h4>

            <br></br>
        </div>


     })}
        <button onClick={back}>Back</button>
    </div>

  )
 }