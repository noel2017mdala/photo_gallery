import React, { useEffect } from "react";
import "./Css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./Actions/fetchAction";

function App() {
  const select = useSelector((data) => {
    return data;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    console.log("render");
  }, []);
  console.log(select);
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
