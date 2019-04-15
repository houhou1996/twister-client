import {FRIEND_DISPLAYED,UPDATE_FRIENDS} from '../actions/index'

import {LOG_OUT} from '../actions/index'
export default function (state = [],action){
    switch(action.type){
        case FRIEND_DISPLAYED:
            if(action.payload){
                return action.payload
            }else{
                return []
            }
        
        case UPDATE_FRIENDS:
        return action.payload.filter(friend=>friend.idUser===action.idUser)
        case LOG_OUT:
            return []
            
    
            
    }
    return state
}