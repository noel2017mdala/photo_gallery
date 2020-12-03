import React from 'react';


const Search = () =>{

    let typingTimer;
    let doneTypingInterval = 2000;

    let userInput = (e)  =>{
        console.log(e.target.value)
    }

    return(
        <div>
            <input type='text' name='search' placeholder='search' onChange={userInput}/>
            <button>Search</button>
            </div>
    )
}

export default Search;