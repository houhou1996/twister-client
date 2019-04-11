import {FRIEND_DISPLAYED} from '../actions/index'
import {LOG_OUT} from '../actions/index'
const initialState = {
        friends: []
}
export default function (state = initialState,action){
    switch(action.type){
        case FRIEND_DISPLAYED:
            return action.payload
            
    
            
    }
    return state
}