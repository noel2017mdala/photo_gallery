import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
    return(
        <div>
            <div className="header">
          <div className="list">
            <ul>
              <Link className='test' to='/random'>Random</Link>
              <Link className='test'to='/search'>Search</Link>
              <Link className='test' to='/'>Home</Link>
            </ul>
          </div>
          <h1>Photo gallery</h1>
        </div>
        </div>
    )
}

export default Nav;