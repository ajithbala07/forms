
import React,{useEffect, useState} from "react";
import {Table} from 'react-bootstrap';
import Form from './Form';


export default function Data1(props) {

  const [data , setData]=useState([])
  const [newData,setNewData]=useState({id:"",firstName:"", lastName:"",gender:""})

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
                    
                    <tr>
                              <td>{data.id}</td>
                              <td>{data.firstName}</td> 
                              <td>{data.lastName}</td>
                              <td>{data.gender}</td>
                    </tr>
                     );
                     }
                    )}
                  </tbody>
               
              <tbody>
              <tr>
              <td>{newData.id}</td>
              <td> {newData.firstName}</td>
              <td> {newData.lastName} </td>
              <td> {newData.gender} </td> 
              </tr>
              </tbody>
              </Table>    
} 
   </div>
   
    
  );
}
