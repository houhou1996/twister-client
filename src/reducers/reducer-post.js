import {AT_POSTS, AT_COMMENTS} from '../actions/action-types'
import * as schema from '../composants/schema'
import {normalize} from 'normalizr'
import merge from 'lodash.merge'

export default function (state = [],action){
    var store = [...state]
    switch(action.type){
        case AT_POSTS.ADD:
            return [
                ...state,action.payload
            ]
        case AT_POSTS.LISTALL:
            if(action.payload){
                return action.payload
            }else{
                return []
            }
        case AT_COMMENTS.ADD:
            
        var newStore = {
            ...state[action.indice],comments: [...state[action.indice].comments,action.payload]
        }
        
        if(newStore!==undefined && action.indice === 0){
            return [newStore]
        }else{
             var store = state.filter(post=>post._id !== action.payload.id_post)
                return {store,newStore}
           
        }

        case AT_POSTS.DELETE:
            return state.filter(post=>post._id !== action.payload)
    }
    return state
}