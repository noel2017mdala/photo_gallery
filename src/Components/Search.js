import React, {useEffect, useState}from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Search = () =>{

const dispatch = useDispatch();
const [text, setText] = useState('');

    let userInput = (e)  =>{
        setText(e.target.value);
        // console.log(text);
    }
const select = useSelector((e) =>{
    console.log(e);
})
    return(
        <div>
            <input type='text' name='search' placeholder='search' onChange={userInput}/>
            <button onClick={(e) => {
                e.preventDefault();
                console.log(text);
            }}>Search</button>
            </div>
    )
}

export default Search;