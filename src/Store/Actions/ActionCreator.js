export const FETCH_ACTIONS = 'FETCH_ACTIONS';
export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_QUERY = 'FETCH_QUERY';


export const createFetch = () =>{
    let url = "https://api.unsplash.com/photos/?client_id=T-amN10-t2znoTYm0SdL86gJzSr0LrgOO_Ha1ZxdN_k";
    return async dispatch =>{
        const response = await fetch(url);
        const resData = await response.json();
        let data = resData;
        
        dispatch({type: FETCH_ACTIONS, payLoad: data});  
    }
}   

export const getImage = (id) =>{
    let url = `https://api.unsplash.com/photos/${id.match.params.id}/?client_id=T-amN10-t2znoTYm0SdL86gJzSr0LrgOO_Ha1ZxdN_k`
    return async dispatch =>{
        const imageRes = await fetch(url);
        const resData = await imageRes.json();

        dispatch({
            type:FETCH_IMAGES,
            payLoad: resData
        });

    }
}

export const fetchRandomImages = () =>{
    let url = "https://api.unsplash.com/photos/random/?client_id=T-amN10-t2znoTYm0SdL86gJzSr0LrgOO_Ha1ZxdN_k";
    return async dispatch =>{
        const response = await fetch(url);
        const resData = await response.json();
        let data = resData;
        
        dispatch({type: FETCH_ACTIONS, payLoad: data});  
    }
}

export const getUserDetails = (username) =>{

    let url = `https://api.unsplash.com/users/${username}/photos?client_id=T-amN10-t2znoTYm0SdL86gJzSr0LrgOO_Ha1ZxdN_k`;
    return async dispatch =>{
        const response = await fetch(url);
        const resData = await response.json();
        let data = resData;
        
        dispatch({type: FETCH_USER, payLoad: data});  
    }
}

// https://api.unsplash.com/search/photos?query=wanderlust █



let header = {
    Authentication: `Client-ID T-amN10-t2znoTYm0SdL86gJzSr0LrgOO_Ha1ZxdN_k`
};