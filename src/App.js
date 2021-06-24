import React from "react";
// import "./Css/style.css";
import Nav from "./Routes/Nav";
import LoadDisplay from "./Components/LoadDisplay";
import Images from "./Routes/images";
import Random from "./Routes/Random";
import FetchImage from "./Routes/fetchImage";
import Search from "./Components/Search";
import user from "./Components/User";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <Nav />
      <div className="">
        <Route>
          <Switch>
            <Route path="/" exact component={LoadDisplay} />
            {/* <Route path="/random" component={Random} /> */}
            {/* <Route path="/images" exact component={Images} /> */}
            <Route path="/images/:id" exact component={FetchImage} />
            {/* <Route path="/search" exact component={Search} /> */}
            <Route path="/images/user/:id" exact component={user} />
          </Switch>
        </Route>
      </div>
    </Router>
  );
};
export default App;
