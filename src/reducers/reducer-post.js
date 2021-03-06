import {AT_POSTS, AT_COMMENTS} from '../actions/action-types'
import{SWITCH_PROFILE_POST} from '../actions/index'
import {LOG_OUT,SEARCH_POSTS} from '../actions/index'
export default function (state = [],action){
    switch(action.type){
        case SWITCH_PROFILE_POST:
                return action.payload.filter(post=>post.id_user===action.idUser)
        case AT_POSTS.ADD:
            if(action.payload){
            return [
                action.payload,...state
            ]
        }else{
            return state
        }
        case AT_POSTS.LISTALL:
            if(action.payload){
                return action.payload
            }else{
                return []
            }
        
        case AT_POSTS.DELETE:
            return state.filter(post=>post._id !== action.payload)
        case SEARCH_POSTS:
        if(action.payload){
            return action.payload
        }else{
            return []
        }
        case LOG_OUT:
            return []
    }
    return state
}