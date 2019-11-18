import {combineReducers} from 'redux-immutable'
import movieReducer from './movieReducer'
const rootReducer = combineReducers(
    {movieReducer}
)

export default rootReducer