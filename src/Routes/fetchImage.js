import React, {useEffect} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {useSelector, useDispatch} from 'react-redux';
import {getImage} from '../Store/Actions/ActionCreator'
import "../Css/style.css";

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
              !select.image.imageData ? <ClipLoader css={override} size='70px' loading={true} color='black'/> :
            <div className='image-style'>
                    <div className='image-cover'>
                         <div className='content'>
                                <img className='image-receive' src={select.image.imageData.urls.full} alt={select.image.imageData.alt_description}/>
                                        <p>{select.image.imageData.alt_description}</p>
                                    <br/>
                            <div className='extra-content'>
                 <p>User : <a href='#'>{select.image.imageData.user.name}</a></p>
             <br/>
          <p>instagram : <a href={`https://instagram.com/${select.image.imageData.user.instagram_username}`} target='_blank'>{select.image.imageData.user.instagram_username}</a></p>
                     </div>
                        </div>
                             </div>
                                     </div>
          }
           </div>
    )
}

export default FetchImage;