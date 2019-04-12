import { AT_COMMENTS} from '../actions/action-types'
import {LOG_OUT} from '../actions/index'
export default function (state = [],action){
    switch(action.type){
        case AT_COMMENTS.LIST:
            if(action.payload)
                return action.payload
            return []
        case AT_COMMENTS.ADD:
            console.log(action.payload)
            return [
                ...state,action.payload
            ]
        case LOG_OUT:
            return []
    }
    return state
}