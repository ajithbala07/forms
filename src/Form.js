
import React, {useEffect, useState} from "react";

export default function Form() {




const submitData = (e) => {
    e.preventDefault();
    alert ("Form is Submitted");
    const form = e.target;
    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    const gender = form.elements["gender"].value;
    
    form.reset();
      
}
  return (
              
    <div>
      <form onSubmit={submitData}>
          
          <div> <label>FirstName</label>
      <input type="text" defaultValue="" ></input>
      </div><label>LastName</label>
      <input type="text" defaultValue=""></input>
      <div><label>Gender</label>
      <input type="text" defaultValue=""></input>
      </div>
      <button type = "submit">Submit</button>
      </form>
  
   </div>
   
    
  );
}
