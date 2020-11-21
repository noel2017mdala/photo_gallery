import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
const Random = () =>{
    const dispatch = useDispatch;

    return(
        <div>
            <p>Hello World From Random</p>
            </div>
    )
}

export default Random;