import React, { useState } from 'react'
import { useNavigate } from "react-router";
function login() {

  // const navigate = useNavigate();
   // This function will handle the submission.
 async function onSubmit(e) {
  e.preventDefault();

  // When a post request is sent to the create url, we'll add a new record to the database.
  // const newPerson = { ...form };

  await fetch("http://localhost:5000/SignIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(newPerson),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  // setForm({ name: "", position: "", level: "" });
  // navigate("/");
}

  return (
    <div>
        <h1>login</h1>
 
 <form action="/SignIn" onSubmit={onSubmit}>
     <input type="text" name="username"
         placeholder="username"/>
     <input type="password" name="password"
         placeholder="password"/>
     <button>login</button>
 </form>
  
 <h1>This is home page</h1>
  
 <li><a href="/register">Sign up!!</a></li>
 <li><a href="/login">Login</a></li>
 <li><a href="/logout">Logout</a></li>
 
    </div>
  )
}

export default login