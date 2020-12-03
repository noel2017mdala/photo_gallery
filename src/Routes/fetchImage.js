import React, {useEffect} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {useSelector, useDispatch} from 'react-redux';
import {getImage} from '../Store/Actions/ActionCreator'
import "../Css/style.css";
import Logo from '../images/iconfinder_instagram_2142569.png'

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
 },[dispatch, props])
//  console.log(select);
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
                           
                 <a className='user_tag' href={`user/${select.image.imageData.user.username}`}>{`@${select.image.imageData.user.name}`}</a>
             <br/>
          {/* <p>instagram : <a href={`https://instagram.com/${select.image.imageData.user.instagram_username}`} target='_blank'>{select.image.imageData.user.instagram_username}</a></p> */}
          <a href={`https://instagram.com/${select.image.imageData.user.instagram_username}`} target='_blank'><img className='instagam_logo' src={Logo} alt='instagram'/></a>
                     </div>
                        </div>
                             </div>
                                     </div>
          }
           </div>
    )
}

export default FetchImage;