import { useState } from "react";
import "./App.css";
import { Users } from "./Users";
import Table from "./Table";

function App() {
  const [word, setWord] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(word))
    );
  };
  // item.first_name.toLowerCase().includes(word) ||
  // item.last_name.toLowerCase().includes(word) ||
  // item.email.toLowerCase().includes(word)

  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter key to seach..."
        className="search"
        onChange={(event) => setWord(event.target.value)}
      />
      <Table Users={search(Users)} />
      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(word)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
