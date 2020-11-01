export const FETCH_ACTIONS = 'FETCH_ACTIONS';
let url = "https://api.unsplash.com/photos/?client_id=T-amN10-t2znoTYm0SdL86gJzSr0LrgOO_Ha1ZxdN_k";

export const createFetch = () =>{
    return async dispatch =>{
        const response = await fetch(url);
        const resData = await response.json();
        let data = resData;
        console.log('World');
        dispatch({type: FETCH_ACTIONS, payLoad: data});  
    }
}   

export const appState = () =>{
    return {
        type: 'COMPLETE',
    }
}