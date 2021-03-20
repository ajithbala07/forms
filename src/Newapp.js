
import React,{useEffect, useState} from "react";


export default function Newapp() {

  const [data , setData]=useState([])
  const [newData,setNewData]=useState([])

useEffect(() => {
  fetch("./datas.json")
  .then(function(res){
    return res.json()
  })
  .then(function(data){
      setData(data)
  })
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
      <div>
            <h2> {newData.firstName}  {newData.lastName} </h2>
            <h3> {newData.gender} </h3>  
      </div>
      <button onClick= {()=>setNewData({
       "firstName": "Kamal",
       "lastName": "Haasan",
       "gender": "Male"
      }) }>Add</button>
    </div>
    
  );
}