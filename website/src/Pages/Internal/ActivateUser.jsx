import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import TopMenu from "../../Components/TopMenu/TopMenu";
import MainMenu from "../../Pages/Internal/menu";
const Record = (props) => (
  <tr>
    <td >{props.record.firstName}</td>
    <td>{props.record.lastName}</td>
    <td>{props.record.email}</td>
    <td className={'status'} id={props.record.status}>{props.record.status}</td>
    <td>
      <button className="activate" 
      disabled={props.record.status === 'Activate'}
      onClick={() => {
        props.ActivateRecord(props.record._id);
      }}
      >Activate</button> |
      <button className="diactivate"
        disabled={props.record.status === 'Deactivate'}
        onClick={() => {
          props.DeActivateRecord(props.record._id);
        }}
      >
        Deactivate
      </button>
    </td>
  </tr>
);

export default function ActivateUser() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);


  // This method will Activate a record
  async function ActivateRecord(id) {
    await fetch(`http://localhost:5000/update${id}`, {
      method: "post"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);

  }  // This method will DeActivate a record
  async function DeActivateRecord(id) {
    await fetch(`http://localhost:5000/update${id}`, {
      method: "post"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }
  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
       <> <Record
          record={record}
          ActivateRecord={() => ActivateRecord(record._id)}
          key={record._id}
        />
        <Record
          record={record}
          DeActivateRecord={() => DeActivateRecord(record._id)}
          key={record._id}
        />
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
        </>
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div className='MainContainer'>
      <div className="maintop">
        <TopMenu />
      </div>
      <div className="MainMenu">
        <MainMenu />
      </div>
      <h3>Account List</h3>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item" style={{ width: "100px" }}>
          <NavLink className="nav-link" to="/signups" style={{ width: "100px" }}>
            Add User
          </NavLink>
        </li>
      </ul>
      <table  style={{ marginTop: 20,paddingright:"-100px" }}>
        <thead>
          <tr>
            <th style={{paddingright:"-10px"}}>First Name</th>
            <th>First Name</th>
            <th>User Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
      <div>
        <Footer />
      </div>
    </div>
  );
}