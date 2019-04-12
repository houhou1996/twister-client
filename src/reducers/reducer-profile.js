import {SWITCH_PROFILE} from '../actions/index'
import {LOG_OUT} from '../actions/index'
export default function (state = [],action){
    switch(action.type){
        case SWITCH_PROFILE:
            return action.payload
         case LOG_OUT:
            return {}
    }
    

    return state
}