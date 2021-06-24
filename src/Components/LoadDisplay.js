import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createFetch } from "../Store/Actions/ActionCreator";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import { main as Main } from "../styles/loadDisplay";
import Tooltip from "@material-ui/core/Tooltip";

const LoadDisplay = () => {
  const dispatch = useDispatch();

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

  //css override

  const override = `
   display: block;
  margin: 0 auto;
  border-color: red;
  // margin-top:20px
`;

  return (
    <div>
      <Main>
        {!select.fetch.data ? (
          <ClipLoader css={override} size="50px" loading={true} color="black" />
        ) : (
          select.fetch.data.map((data, i) => (
            <div key={data.id} className="image-item">
              <Link to={`images/${data.id}`}>
                <Tooltip
                  title={
                    data.alt_description
                      ? data.alt_description
                      : "No description Found"
                  }
                >
                  <img src={data.urls.full} alt={data.alt_description} />
                </Tooltip>
              </Link>
            </div>
          ))
        )}
      </Main>
    </div>
  );
};

export default LoadDisplay;
