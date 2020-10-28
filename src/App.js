import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchdata, search } from "./Actions/UserAction";
import "./Css/style.css";

function App() {
  const select = useSelector((data) => {
    return data;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch(fetchdata));
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
