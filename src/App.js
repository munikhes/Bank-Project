import './App.css';
import React,{useState} from 'react'
import {HashRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Client from './components/Client';
import Edit from './components/Edit';
import Admin from './components/Admin';
import Register from './components/Register';

function App() {

const [clients, setClients] = useState([
   {
    id: "31254351",
    name: "yevgeni",
    password: "123456",
    money: "123",
    spendings: [{
      companyName:"company",
      expensesOfCompany: "expenses",
      id: 1
    },
    {
      companyName:"company2",
      expensesOfCompany: "expenses2",
      id: 2

    }]
  }
]);
const getClient =(client)=>{
  setClients([client,...clients])
};

const getSpendings=(client,company,expenses)=>{
 
  let spendings = [];
  for(let i=0; i<clients.length; i++){
    if(clients[i].name === client){
      spendings = clients[i].spendings
      
      let newWspendings={
        companyName:company,
        expensesOfCompany:expenses,
        id: spendings.length +1
      };
      spendings.push(newWspendings)
      clients[i] = {
                id: clients[i].id,
                name: clients[i].name,
                password: clients[i].password,
                money: clients[i].money,
                spendings: spendings
     };
    }
  }
};
  const getEdit=(newId,newName,newPassword,newMoney)=>{
  for(let i=0; i<clients.length; i++){
    if(clients[i].id === newId){
      clients[i] = {
        id: newId,
        name: newName,
        password: newPassword,
        money: newMoney,
        spendings: clients[i].spendings
      };
    }
  }
}
const getDeleteSpend =(id,spendings)=>{
  for(let i=0; i<clients.length; i++){
    if(clients[i].id === id){
      clients[i] = {
        id: clients[i].id,
        name: clients[i].name,
        password: clients[i].password,
        money: clients[i].money,
        spendings: spendings
      };
    }
    setClients([...clients])
  };
}
const getDeleteOneClient = (id)=>{
 
  for(let i=0; i<clients.length; i++){
    if(clients[i].id === id){
      setClients([... clients.filter(client=>client == clients[i].id)])
    };
  };
  console.log(clients)
};

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<Home clients={clients}/>} />
          {clients.map((client)=>{
            return  <Route path={`/${client.name}`} element={<Client name={client.name} money={client.money} getSpendings={getSpendings} clients={clients}  />}/>
          })}
          <Route path={'/register'} element={<Register getClient={getClient} clients={clients} />} />
          
          {clients.map((client)=>{
          return <Route path={'/edit'} element={<Edit getClient={getClient} name={client.name} money={client.money}  id={client.id}  password={client.password} getEdit={getEdit}/>}/> 
        })}
           <Route path={'/admin'} element={<Admin clients={clients}  getDeleteSpend={ getDeleteSpend} getDeleteOneClient={getDeleteOneClient}/>}/> 
        </Routes>
      </Router>
    </div>
  );
}


export default App;
