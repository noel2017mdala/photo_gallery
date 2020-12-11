import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../Components/Search';

const Nav = () =>{
    return(
        <div>
            <div className="header">
          <div className="list">
            <ul>
              <Link className='test' to='/random'>Random</Link>
              <Link className='test' to='/'>Home</Link>
            </ul>
          </div>
          <h1>Photo gallery</h1>
        </div>
        <Search />
        </div>
    )
}

export default Nav;