import { FETCH_ALBUM_ERROR, FETCH_ALBUM_LOADING, FETCH_ALBUM_SUCCESS } from "./albumActionType";

const intialState= {
    loading: false,
    albums:[],
    errror:null,
}
 export function albumReducer(state=intialState, action) {
    switch (action.type) {
        case FETCH_ALBUM_LOADING:
            
           return{
            ...state,
            loading: action.payload,
           }
           case FETCH_ALBUM_SUCCESS:
            
           return{
            ...state,
            albums: action.payload,
           }
           case FETCH_ALBUM_ERROR:
            
           return{
            ...state,
            error: action.payload,
           }
    
        default:
            return state;
    }
    
}