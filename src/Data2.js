
import React,{useEffect, useState} from "react";
import {Table} from 'react-bootstrap';


export default function Data1() {

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

const submitForm = (e) => {
    e.preventDefault();
    alert ("Form is Submitted:" + [newData.firstName,newData.lastName,newData.gender]);
    console.log(newData);
     
    
}
const changeHandler = (e) => {
    console.log(e.target.name)
    setNewData({...newData,
    [e.target.name]: e.target.value})
}

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
              <td> {newData.id}</td>
              <td> {newData.firstName}</td>
              <td> {newData.lastName} </td>
              <td> {newData.gender} </td> 
              </tr>
              </tbody>
              </Table>    
} 
                    
      <form onSubmit={submitForm}>
          
          <div> <label>FirstName</label>
      <input type="text" name="firstName" value={newData.firstName} onChange= {e => changeHandler(e)}></input>
      </div><label>LastName</label>
      <input type="text" name="lastName" value={newData.lastName} onChange= {e => changeHandler(e)}></input>
      <div><label>Gender</label>
      <input type="text" name="gender" value={newData.gender} onChange= {e => changeHandler(e)}></input>
      </div>
      <button type = "submit">Submit</button>
      </form>
  
   </div>
   
    
  );
}
