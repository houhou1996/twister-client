import axios from 'axios'
import {AT_POSTS, AT_COMMENTS} from './action-types'
export const FRIEND_DISPLAYED = "FRIEND_DISPLAYED"
export const LOG_OUT = "LOG_OUT"
export const SWITCH_USER = "SWITCH_USER"
export const LIST_USERS = "LIST_USERS"



export function addComment(cle,id,content,index){
    return function(dispatch){
        var url = "http://localhost:8080/twister/addComment?key="+cle+"&idPost="+id+"&text="+content
        axios.get(url).then(response=>{
            
                    dispatch({type : AT_COMMENTS.ADD, indice: index, payload : response.data.comment})
                        
                })
        
    }     
    
}
export function getUsers(){
    return function(dispatch){
        axios.get("http://localhost:8080/twister/ListUsers").then(response=>{
                    dispatch({type : LIST_USERS, payload : response.data})
                        
                })
        
    }     
    
}
export function disconnect(){
    return function(dispatch){
        dispatch({type : LOG_OUT})
    }
}
export function connection(cle,idUser){
    return function(dispatch){
        dispatch({type: SWITCH_USER, payload: {cle,idUser}})
    }
}
export function afficheFriends(cle){
    return function(dispatch){
        var url = "http://localhost:8080/twister/ListFriends?key="+cle
        axios.get(url)
                .then(response=>{
                        dispatch({type : FRIEND_DISPLAYED,  payload : response.data})
                })
    }  
}
export function addPost(cle,content){
    return function(dispatch){
        var url = "http://localhost:8080/twister/addPost?key="+cle+"&text="+content
        axios.get(url).then(response=>{
            
                    dispatch({type : AT_POSTS.ADD,  payload : response.data.post})
                        
                })
        
    }     
    
}

export function listPosts(cle){
    if(cle!==""){
    return function(dispatch){
        var url = "http://localhost:8080/twister/listPosts?key="+cle+"&maxvalue=100"
        axios.get(url)
                .then(response=>{
                        dispatch({type : AT_POSTS.LISTALL,  payload : response.data.posts})
                })
    }
}else{
    return function(dispatch){
        var url = "http://localhost:8080/twister/listPosts?maxvalue=100"
        axios.get(url)
                .then(response=>{
                        dispatch({type : AT_POSTS.LISTALL,  payload : response.data.posts})
                })

}
   
}
}

export function deletePost(cle,id){
    return function(dispatch){
        var url = "http://localhost:8080/twister/RemovePost?key="+cle+"&idPost="+id
        axios.get(url)
                .then(response=>{
                    console.log(response.data)
                        dispatch({type : AT_POSTS.DELETE,  payload : id})
                })
    }
   
    
}