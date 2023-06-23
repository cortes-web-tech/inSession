import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
const Sessions = (props) => {
  const location = useLocation().state;
  // console.log(location);
  //  const user = location;
  //  const userName = location._firstName;

  // console.log(user);
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    getSessions();
  }, []);

  function getSessions() {
    axios.get("/api/getSessions.php").then(function (response) {
      if (response.data.error) {
        console.log("Error while getting data.");
      } else {
        setSessions(response.data);
      }
    });
  }

  return (
    <div>
      <Nav />
      <div className="sessionDataContainer">
        <p>Viewing Sessions</p>

        <table className="sessionDataTable">
          <thead>
            <tr>
              <th>Session Title</th>
              <th>Room</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Moderator</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, key) => (
              <tr key={session.session_id}>
                <td>
                  <Link
                    to="/Session"
                    state={{ session_id: session.session_id }}
                  >
                    {session.title}
                  </Link>
                </td>
                <td>{session.room}</td>
                <td>{session.startTime}</td>
                <td>{session.endTime}</td>
                <td>{session.modName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sessions;
