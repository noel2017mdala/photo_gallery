import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createFetch } from "./Store/Actions/ActionCreator";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const LoadDisplay = () => {
  //dispatch is used to call an action
  const dispatch = useDispatch();

  const override = `
display: block;
margin: 0 auto;
border-color: red;
margin-top:20px
`;
  /*
  call the dispatches the async function
   immediately after the page has finished loading
  */
  useEffect(() => {
    const loadApi = async () => {
      await dispatch(createFetch());
    };
    setTimeout(loadApi, 2000);
  }, [dispatch]);

  // Holds the current state of the site
  const select = useSelector((data) => {
    return data;
  });

  return (
    <div className="container">
      {
        /*
          check wether the fetch api has finished processing the request if 
          the page has  it will display the data else the page will 
          continue loading
          */
        !select.fetch.data ? (
          <ClipLoader css={override} size="50px" loading={true} color="black" />
        ) : (
          select.fetch.data.map((data, i) => (
            <div key={data.id} className="image-item">
              <Link to={`images/${data.id}`}>
                <img
                  src={data.urls.full}
                  alt={data.alt_description}
                  height="400"
                  width="400"
                />
              </Link>
            </div>
          ))
        )
      }
    </div>
  );
};

export default LoadDisplay;
