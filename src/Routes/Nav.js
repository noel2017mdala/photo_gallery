import React from "react";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { Nav as Navigation } from "../styles/Nav";

const Nav = () => {
  return (
    <div>
      <Navigation>
        <div className="">
          <div className="navigation">
            <ul>
              <Link className="test" to="/random">
                Random
              </Link>
              <Link className="test" to="/">
                Home
              </Link>
            </ul>
          </div>
          <div className="header">
            <h1>Photo gallery</h1>
          </div>

          <Search />
        </div>
      </Navigation>
    </div>
  );
};

export default Nav;
{
  /* <Search /> */
}
