
import { FetchStart, FetchFail, GET_TODO } from "../types/types";

export const initialState={
todos:[],
error:false,
loading:false
}

export const reducer =(state,action)=>{
    // console.log(action);
    // console.log(state.error);
    // console.log(state.loading);

    switch (action.type) {

        case FetchStart:
            return{
                ...state,
                loading:true,
                error:false
            }
        case GET_TODO:
            return{
                ...state,
                todos:[action.payload],
                loading:false,
                error:false
            }

        case FetchFail:
            return{
                ...state,
                loading:false,
                error:true
            }
        
        default:
            return {
                ...state
            }
           

    }
}

