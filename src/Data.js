
import React,{useEffect, useState} from "react";


export default function Data() {

  const [data , setData]=useState([])
  const [newData,setNewData]=useState({firstName:"", lastName:"",gender:""})

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
      </div>
      <div>
      <div>
            <h2> {newData.firstName}  {newData.lastName} </h2>
            <h3> {newData.gender} </h3>  
      </div>
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
   </div>
    
  );
}
