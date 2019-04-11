import axios from 'axios'
import {AT_POSTS, AT_COMMENTS,AT_FRIENDS} from './action-types'
export const FRIEND_DISPLAYED = "FRIEND_DISPLAYED"
export const LOG_OUT = "LOG_OUT"
export const SWITCH_USER = "SWITCH_USER"
export const SWITCH_PROFILE = "SWITCH_PROFILE"
export const SWITCH_PROFILE_POST = "SWITCH_PROFILE_POST"
export const LIST_USERS = "LIST_USERS"


export function deleteFriend(cle,idUser,idFriend){
    return function(dispatch){
        var url = "http://localhost:8080/twister/removeFriend?key="+cle+"&idFriend="+idFriend
        axios.get(url).then(response=>{

                    dispatch({type : AT_FRIENDS.DELETE, idUser:idUser,idFriend : idFriend})
                        
                })
        
    }     
    
}

export function addFriend(cle,id){
    return function(dispatch){
        var url = "http://localhost:8080/twister/addFriend?key="+cle+"&idFriend="+id
        axios.get(url).then(response=>{
     
                    dispatch({type : AT_FRIENDS.ADD,  payload : response.data})
                        
                })
        
    }     
    
}


export function switchProfilePost(id){
    return function(dispatch){
        var url = "http://localhost:8080/twister/listPosts?maxvalue=100"
        axios.get(url)
                .then(response=>{
                        dispatch({type : SWITCH_PROFILE_POST,idUser:id,  payload : response.data.posts})
                })

}   
    
}
export function switchProfile(id){
    return function(dispatch){
      dispatch({type : SWITCH_PROFILE, payload : {"idUser": id}})
   
    }    
    
}
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
                        dispatch({type : FRIEND_DISPLAYED,  payload : response.data.friends})
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
                        dispatch({type : AT_POSTS.DELETE,  payload : id})
                })
    }
   
    
}