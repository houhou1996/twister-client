import { LIKE,LIST_LIKES,DISLIKE,LOG_OUT} from '../actions/index'

export default function (state = [],action){
    switch(action.type){
        case  LIST_LIKES:
            if(action.payload)
                return action.payload
            return []
        case LIKE:
            return [
                ...state,action.payload
            ]
        case DISLIKE:
        return state.filter(like=>like.id_user !== action.id_user || like.id_post !== action.id_post)
        case LOG_OUT:
            return []
    }
    return state
}