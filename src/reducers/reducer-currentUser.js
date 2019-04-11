
import {SWITCH_USER} from '../actions/index'


export default function (state = [],action){
    switch(action.type){
        case SWITCH_USER:
            return action.payload
    }

    return state
}