export const FETCH_ACTIONS = 'FETCH_ACTIONS';
export const FETCH_IMAGES = 'FETCH_IMAGES'


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