import React, { useState } from 'react';
import Axios from 'axios'

function TS() {

  const [newPhone, setNewPhone] = useState(0)
 
  const updatePhone = (id) =>{
    Axios.put('http://localhost:8080/update-user',{id, newPhone})
  }

  return (
    <div className="container">
      {
        // phonebook.map((val,key) => {
        //   return 
          <div className="phone" >
            <h1></h1>
            <h1></h1>
            <input type="number" placeholder='update Phone...' onChange={(e) => {
              setNewPhone(e.target.value)
            }}/>
            <button className="update-btn"  onClick={() => {updatePhone('62b970b89638430a3067b990')}}>Update</button>
          </div>
        // })
      }

    </div>      
  );
}

export default TS;