import request from './request'
import{GET_MOVIE} from './actionType'

export const getMovies = ()=>{
    return async dispatch =>{
        const result = await request({
            url:'/ajax/movieOnInfoList',
            params:{
                token:''
            }
        })
        dispatch({
            type:GET_MOVIE,
            payload:result.data.movieList
        })
    }
}