import React from "react";
import "./Css/style.css";

function App() {
  return (
    <div className="style">
      <div className="header">
        <div>
          <ul>
            <li>Random</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="search">
          <input type="text" placeholder="search" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default App;
