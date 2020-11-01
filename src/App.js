import React, {useEffect} from "react";
import "./Css/style.css";
import {useSelector, useDispatch} from 'react-redux';
import {createFetch} from './Store/Actions/ActionCreator';

const App = (props) => {

  //dispatch is used to call an action
  const dispatch = useDispatch();

  /*
  call the dispatches the async function
   immediately after the page has finished loading
  */
  useEffect(() =>{
    const loadApi = async () =>{
      await dispatch(createFetch());
    }
    setTimeout(loadApi, 2000);
  }, [dispatch]);

// Holds the current state of the site
  const select = useSelector((data) =>{
    return data;
  });
    return (
      <div className="style">
        <div className="header">
          <div className="list">
            <ul>
              <li>Random</li>
              <li>Home</li>
            </ul>
          </div>
          <h1>Photo gallery</h1>
          <div className="search">
            <input type="text" placeholder="search" />
            <button>Search</button>
          </div>
        </div>
        
        {
          /*
          check wether the fetch api has finished prosessing the request if 
          the page has  it will display the data else the page will 
          continue loading
          */
          !select.fetch.data ? <p>Loading ...</p> : select.fetch.data.map((data, i) => (
        <div key={data.id}>
          <img  src={data.urls.full} alt={data.alt_description} height='400' width='400' />
          </div>
          ))
        }
      </div>
    );
  
}
export default App;
