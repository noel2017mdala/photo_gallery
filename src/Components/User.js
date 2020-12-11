import React, {useEffect} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {useSelector, useDispatch} from 'react-redux';
import {getUserDetails} from '../Store/Actions/ActionCreator';

const User = (props) =>{
    const dispatch = useDispatch();

    const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top:20px
`;

    const select = useSelector((data) =>{
        return data;
    })

    useEffect(() =>{
        dispatch(getUserDetails(props.match.params.id));
    }, [dispatch, props])    
    // console.log(select)
    return(
        <div>
             {
          /*
          check wether the fetch api has finished prosessing the request if 
          the page has  it will display the data else the page will 
          continue loading
          */
          !select.user.data ? <ClipLoader css={override} size='70px' loading={true} color='black'/> : select.user.data.map((data, i) => (
        <div key={data.id}>
          {`images/${data.id}`}
          <img  src={data.urls.full} alt={data.alt_description} height='400' width='400' />
          
          </div>
          ))
        }
            
            </div>
    )
}

export default User;
