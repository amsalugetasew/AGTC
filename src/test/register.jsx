import React from 'react'

function register() {
  return (
    <div>
        <h1> Sign up form </h1>
 
 <form action="/register" method="POST">
     <input type="text" name="username"
         placeholder="username"/>
     <input type="password" name="password"
         placeholder="password"/>
     <button>Submit</button>
 </form>
  
 <h1>This is home page</h1>
  
 <li><a href="/register">Sign up!!</a></li>
 <li><a href="/login">Login</a></li>
 <li><a href="/logout">Logout</a></li>
    </div>
  )
}

export default register