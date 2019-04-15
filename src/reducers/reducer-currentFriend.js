import {LIST_FRIENDS_CURRENT_USER} from '../actions/index'
import {AT_FRIENDS} from '../actions/action-types'
export default function (state = [],action){
    switch(action.type){
        
        case LIST_FRIENDS_CURRENT_USER:
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
            return state.filter(friend=>friend.idUser!==action.idUser || friend.idFriend!==action.idFriend)
    
            
    }
    return state
}