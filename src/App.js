
import React,{useEffect, useState} from "react";


export default function App() {

  const [data , setData]=useState([])

useEffect(() => {
  fetch("./datas.json")
  .then(res => res.json())
  .then(data => setData(data))
},[])

  return (
    <div className="App">
      {
        
       data.map(
          function(data){
                  return (<div className="card"> 
                  <h2> {data.firstName}  {data.lastName}</h2>
                  <h3> {data.gender}</h3>
              </div>)
          }
        )
      }
      <button onClick= {()=>setData([{
       "firstName": "Kamal",
       "lastName": "Haasan",
       "gender": "Male",
     }]) }>Add</button>
    </div>
    
  );
}