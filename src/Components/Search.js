import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchBar } from "../styles/Search";

const Search = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  let userInput = (e) => {
    setText(e.target.value);
    // console.log(text);
  };
  const select = useSelector((e) => {});
  return (
    <div>
      <SearchBar>
        <input type="text" name="search" placeholder="" onChange={userInput} />

        <button
          className="search"
          onClick={(e) => {
            e.preventDefault();
            // console.log(text);
          }}
        >
          Search
        </button>
      </SearchBar>
    </div>
  );
};

export default Search;
