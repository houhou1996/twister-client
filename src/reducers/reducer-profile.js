import {SWITCH_PROFILE} from '../actions/index'

export default function (state = [],action){
    switch(action.type){
        case SWITCH_PROFILE:
            return action.payload
    }

    return state
}