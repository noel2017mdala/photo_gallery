import React, {useEffect} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {useSelector, useDispatch} from 'react-redux';
import {getImage} from '../Store/Actions/ActionCreator'

// const dispatch = useDispatch();

const FetchImage = (props) =>{

   const dispatch = useDispatch();

    const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top:20px
`;

   let select = useSelector((data) =>{
        return data;
    })

 useEffect(() =>{
     dispatch(getImage(props));
 },[])
 
 console.log(select);
    return(
       <div>
          {
              !select.image.imageData ? <ClipLoader css={override} size='70px' loading={true} color='black'/> : <p>{select.image.imageData.id}</p>
          }
           </div>
    )
}

export default FetchImage;