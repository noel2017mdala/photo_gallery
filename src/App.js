import React, { useEffect } from "react";
import "./Css/style.css";

function App() {
  useEffect(() => {
    console.log("Use Effect");
  });
  return (
    <div className="style">
      <div className="header">
        <div className="list">
          <ul>
            <li>Random</li>
            <li>Home</li>
          </ul>
        </div>
        <h1>Photo gallery</h1>
        <div className="search">
          <input type="text" placeholder="search" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
