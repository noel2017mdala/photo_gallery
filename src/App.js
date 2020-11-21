import React from "react";
import "./Css/style.css";
import Nav from './Routes/Nav';
import LoadDisplay from './LoadDisplay';
import images from './Routes/images';
import random from './Routes/Random';
import fetchImage from './Routes/fetchImage';
import Search from './Components/Search';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = (props) => {
    return (
      <Router>
        <div className="style">
            <Nav />
                <Route>
                    <Switch>
                      <Route path='/' exact component={LoadDisplay} />
                      <Route path='/random' component={random} />
                       <Route path='/images' exact component={images} />
                       <Route path='/images/:id' exact component={fetchImage} />
                       <Route path='/search' exact component={Search} />
                   </Switch>
        </Route>
      </div>
      </Router>
    );
}
export default App;
