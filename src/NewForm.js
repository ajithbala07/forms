
import React,{useEffect, useState} from "react";
import {Table} from 'react-bootstrap';


export default function App() {

  const [data , setData]=useState([])
  const [newData , setNewData]=useState([])
  

useEffect(() => {
  fetch("./datas.json")
  .then(res => res.json())
  .then(d => setData(d))
},[])

console.log('data' , data)

  return (
    <div className="App">
        {
            <Table > 
            <thead> 
                <tr>
                    <th>S.no</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                      {data.map(
                       function(data){
                       return ( 
                      
                      <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.firstName}</td> 
                                <td>{data.lastName}</td>
                                <td>{data.gender}</td>
                      </tr>
                       );
                       }
                      )}
                    </tbody>
                                                     
                    </Table>    
  
      }
      <button onClick= {()=>setData([
        ...data,{
        id : (data.length + 1),
       firstName: "Kamal",
       lastName: "Haasan",
       gender: "Male",
        
      }]  )}>Add</button>
    </div>
    
  );
}