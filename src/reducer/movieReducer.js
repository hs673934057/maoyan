import {GET_MOVIE} from '../actions/actionType'
import{Map} from 'immutable'

const initState=Map({
    movies:null
})
const movieReducer = (state=initState,action) =>{
    switch (action.type) {
        case GET_MOVIE:
        return state.set('movies',action.payload);
            break;
    
        default:
            return state
            break;
    }

}

export default movieReducer