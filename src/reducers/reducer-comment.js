import { AT_COMMENTS} from '../actions/action-types'
import {LOG_OUT} from '../actions/index'
export default function (state = [],action){
    switch(action.type){
        case AT_COMMENTS.LIST:
            if(action.payload)
                return action.payload
            return []
        case AT_COMMENTS.ADD:
            return [
                action.payload,...state
            ]
        case LOG_OUT:
            return []
        case AT_COMMENTS.DELETE:
        return state.filter(comment=>comment._id !== action.payload)
    }
    return state
}