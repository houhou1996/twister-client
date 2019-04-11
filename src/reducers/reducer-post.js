import {AT_POSTS, AT_COMMENTS} from '../actions/action-types'
import{SWITCH_PROFILE_POST} from '../actions/index'

export default function (state = [],action){
    var store = [...state]
    switch(action.type){
        case SWITCH_PROFILE_POST:
                return action.payload.filter(post=>post.id_user===action.idUser)
        case AT_POSTS.ADD:
            if(action.payload){
            return [
                ...state,action.payload
            ]
        }else{
            return state
        }
        case AT_POSTS.LISTALL:
            if(action.payload){
                return action.payload
            }else{
                return []
            }
        case AT_COMMENTS.ADD:
            if(action.indice === 0){
                return [
                    {...state[action.indice],
                   comments:    [...state[action.indice].comments,action.payload]}
                ]
            }else{
                let store = state[action.indice]
                store.comments = [
                    ...store.comments,action.payload
                ]
                state.filter(post=>post._id!==store._id)
                console.log(store)
                return [
                 ...state.filter(post=>post._id!==store._id),store
                ]
                        
                

            }
                    
                
           
        

        case AT_POSTS.DELETE:
            return state.filter(post=>post._id !== action.payload)
    }
    return state
}