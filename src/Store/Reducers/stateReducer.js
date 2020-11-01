
const appSate  = (state = false, action) =>{
    if(action.type === "COMPLETE"){
        return !state;
    }else{
        return state;
    }
} 

export default appSate;