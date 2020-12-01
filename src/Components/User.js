import React from 'react';

const User = (props) =>{
    return(
        <div>
            <p>Hello {props.match.params.id}</p>
            {console.log(props.match.params)}
            </div>
    )
}

export default User;
