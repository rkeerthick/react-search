import React from "react";
import "./Table.css";

const Table = ({Users}) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
