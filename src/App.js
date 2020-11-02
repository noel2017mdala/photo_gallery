import React from "react";
import "./Css/style.css";
import Nav from './Nav';
import LoadDisplay from './LoadDisplay';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = (props) => {
    return (
      <Router>
      <div className="style">
        <Nav />
        <LoadDisplay />
      </div>
      </Router>
    );
}
export default App;
