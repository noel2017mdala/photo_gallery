import React, { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../Store/Actions/ActionCreator";
import { Mobile } from "../styles/FetchImage";
import "../Css/style.css";
import Logo from "../images/iconfinder_instagram_2142569.png";

// const dispatch = useDispatch();

const FetchImage = (props) => {
  const dispatch = useDispatch();

  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top:20px
`;

  let select = useSelector((data) => {
    return data;
  });

  useEffect(() => {
    dispatch(getImage(props));
  }, [dispatch, props]);
  //  console.log(select);
  return (
    <div>
      <Mobile>
        {!select.image.imageData ? (
          <ClipLoader css={override} size="70px" loading={true} color="black" />
        ) : (
          <div className="image-cover">
            <div className="content">
              <p className="description">
                {select.image.imageData.alt_description}
              </p>
              <img
                className="image-receive"
                src={select.image.imageData.urls.full}
                alt={select.image.imageData.alt_description}
              />
              <br />
              <div className="extra-content">
                <a
                  className="instagram_logo"
                  href={`https://instagram.com/${select.image.imageData.user.instagram_username}`}
                  target="_blank"
                >
                  <img className="instagram_logo" src={Logo} alt="instagram" />
                </a>
                <a
                  className="user_tag"
                  href={`user/${select.image.imageData.user.username}`}
                >{` see more photos`}</a>
                <br />
                {/* <p>instagram : <a href={`https://instagram.com/${select.image.imageData.user.instagram_username}`} target='_blank'>{select.image.imageData.user.instagram_username}</a></p> */}
              </div>
            </div>
          </div>
        )}
      </Mobile>
    </div>
  );
};

export default FetchImage;
