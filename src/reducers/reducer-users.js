
import {LIST_USERS} from '../actions/index'

import {LOG_OUT} from '../actions/index'
export default function (state = [],action){
    switch(action.type){
        case LIST_USERS:
            return action.payload
        case LOG_OUT:
            return []
        
    }

    return state
}