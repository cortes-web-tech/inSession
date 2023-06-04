// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Users = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://192.168.1.15/api/users.php").then(function (response) {
      if (response.data.error) {
        console.log("Error while getting data.");
      } else {
        setUsers(response.data);
      }
    });
  }

  return (
    <div className="users_data">
      <div>Admin page: User List</div>
      <div>
        <table className="sessionDataTable">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Organization</th>
              <th>Sessions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={user.user_id}>
                <td>
                  <Link to="/User" state={{ user_id: user.user_id }}>
                    {user.fullName}
                  </Link>
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.organization}</td>
                <td>Function WIP</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;