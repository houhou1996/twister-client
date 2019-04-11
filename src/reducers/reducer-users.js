
import {LIST_USERS} from '../actions/index'


export default function (state = [],action){
    switch(action.type){
        case LIST_USERS:
            return action.payload
        
    }

    return state
}