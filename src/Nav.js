import React from 'react';
import {Route, Link, match} from 'react-router-dom';
import  Random from './Random';

const Nav = () =>{
    return(
        <div>
            <div className="header">
          <div className="list">
            <Route path='/random' component={Random} exact />
            <ul>
              <Link to='/random'>
              <li>Random</li>
              </Link>
              <Link to='/'>
              <li>Home</li>
              </Link>
            </ul>
          </div>
          <h1>Photo gallery</h1>
          <div className="search">
            <input type="text" placeholder="search" />
            <button>Search</button>
          </div>
        </div>
        </div>
    )
}

export default Nav;