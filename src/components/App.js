
import React, { useState } from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {

  const [userData, setUserdata] = useState([]);

  function handleUserDetails() {

    axios.get('https://reqres.in/api/users')
      .then(response => {
        setUserdata(response.data.data)
        console.log(response.data.data)
      })

  }
  return (
    <div className="main">
      <div className="btn-head">
        <h2>Blue Whales</h2>
        <button className="btn" onClick={handleUserDetails}>Get User List</button>
      </div>
      <table>
        <thead>
          <tr className="head">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            (userData.length === 0) ? <p className="no-data">No data found to display.</p> :
              userData.map(element => {
                return (
                  <tr>
                    <td>{element.first_name}</td>
                    <td>{element.last_name}</td>
                    <td>{element.email}</td>
                    <td><img src={element.avatar}></img></td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
