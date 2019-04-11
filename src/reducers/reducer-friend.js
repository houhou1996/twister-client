import {FRIEND_DISPLAYED} from '../actions/index'
import {AT_FRIENDS} from '../actions/action-types'

export default function (state = [],action){
    switch(action.type){
        case FRIEND_DISPLAYED:
            if(action.payload){
                return action.payload
            }else{
                return []
            }
        case AT_FRIENDS.ADD:
            if(!action.payload.code)
            return [
                ...state,action.payload
            ]
        case AT_FRIENDS.DELETE:
            return state.filter(friend=>friend.idUser!==action.idUser && friend.idFriend!==action.idFriend)
      
            
    
            
    }
    return state
}