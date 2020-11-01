import React, {useEffect} from "react";
import "./Css/style.css";
import {useSelector, useDispatch} from 'react-redux';
import {createFetch} from './Store/Actions/ActionCreator';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() =>{
    const loadApi = async () =>{
      await dispatch(createFetch());
    }
    setTimeout(loadApi, 2000);
  }, [dispatch]);

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
