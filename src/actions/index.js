import axios from 'axios'
import {AT_POSTS, AT_COMMENTS,AT_FRIENDS} from './action-types'

export const FRIEND_DISPLAYED = "FRIEND_DISPLAYED"
export const LOG_OUT = "LOG_OUT"
export const SWITCH_USER = "SWITCH_USER"
export const SWITCH_PROFILE = "SWITCH_PROFILE"
export const SWITCH_PROFILE_POST = "SWITCH_PROFILE_POST"
export const LIST_USERS = "LIST_USERS"
export const LIKE = "LIKE"
export const LIST_LIKES = "LIST_LIKES"
export const DISLIKE = "DISLIKE"
export const UPDATE_FRIENDS ="UPDATE_FRIENDS"
export const LIST_FRIENDS_CURRENT_USER="LIST_FRIENDS_CURRENT_USER"
export const SEARCH_POSTS ="SEARCH_POSTS"

export function searchPosts(text){
    return function(dispatch){
        var url = "http://localhost:8080/twister/Search?text="+text
        axios.get(url)
                .then(response=>{
                    console.log(response.data.posts)
                        dispatch({type : SEARCH_POSTS,  payload : response.data.posts})
                })

    
}
}

export function currentFriend(cle){
    return function(dispatch){
        var url = "http://localhost:8080/twister/ListFriends?key="+cle
        axios.get(url)
                .then(response=>{
                        dispatch({type : LIST_FRIENDS_CURRENT_USER,  payload : response.data.friends})
                })

    
}
}

export function updateFriend(id){
    return function(dispatch){
        var url = "http://localhost:8080/twister/ListFriends"
        axios.get(url)
                .then(response=>{
                        dispatch({type : UPDATE_FRIENDS,idUser:id,  payload : response.data.friends})
                })

    
}
}
export function deleteComment(idPost,idComment){
    return function(dispatch){
        var url = "http://localhost:8080/twister/removeComment?idPost="+idPost+"&idComment="+idComment
        axios.get(url).then(response=>{
                    dispatch({type : AT_COMMENTS.DELETE, payload : idComment})
                        
                })
        
    }     
    
}
export function listLikes(){
    return function(dispatch){
        var url = "http://localhost:8080/twister/listLikes"
        axios.get(url).then(response=>{

                    dispatch({type : LIST_LIKES, payload: response.data.likes})
                        
                })
        
    }     
    
}
export function dislike(cle,idPost,idUser){
    return function(dispatch){
        var url = "http://localhost:8080/twister/removeLike?key="+cle+"&idPost="+idPost
        axios.get(url).then(response=>{

                    dispatch({type : DISLIKE, id_post : idPost, id_user: idUser})
                        
                })
        
    }     
    
}
export function like(cle,idPost){
    return function(dispatch){
        var url = "http://localhost:8080/twister/like?key="+cle+"&idPost="+idPost
        axios.get(url).then(response=>{

                    dispatch({type : LIKE, payload : response.data.like})
                        
                })
        
    }     
    
}

export function addComment(cle,id,content){
    return function(dispatch){
        var url = "http://localhost:8080/twister/addComment?key="+cle+"&idPost="+id+"&text="+content
        axios.get(url).then(response=>{
                    console.log(response.data)
                    dispatch({type : AT_COMMENTS.ADD, payload : response.data.comment})
                        
                })
        
    }     
    
}
export function listComments(){
    return function(dispatch){
        var url = "http://localhost:8080/twister/listComments"
        axios.get(url).then(response=>{

                    dispatch({type : AT_COMMENTS.LIST, payload: response.data.comments})
                        
                })
        
    }     
    
}
export function deleteFriend(cle,idUser,idFriend){
    return function(dispatch){
        var url = "http://localhost:8080/twister/removeFriend?key="+cle+"&idFriend="+idFriend
        axios.get(url).then(response=>{
                    console.log(idUser)
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
export function switchProfile(idUser,name){
    return function(dispatch){
      dispatch({type : SWITCH_PROFILE, payload : {idUser,name}})
   
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
export function connection(cle,idUser,name){
    return function(dispatch){
        dispatch({type: SWITCH_USER, payload: {cle,idUser,name}})
    }
}
export function listFriends(cle){
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