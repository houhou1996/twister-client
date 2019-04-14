
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/comment.css'
import {connect} from 'react-redux'
import {like,dislike} from '../actions/index'
class Like extends React.Component{

alreadyLiked=(idPost,idUser)=>{
        let trouve =false
            this.props.likes.map(like=>{
                if(like.id_user===idUser && like.id_post === idPost){
                    trouve = true
                }
            })
          return trouve
      }
likeClick(cle,idPost){
        this.props.like(cle,idPost)
     }
dislikeClick(cle,idPost){
        this.props.dislike(cle,idPost,this.props.idUser)
     }

render(){
        if(this.alreadyLiked(this.props.post._id,this.props.idUser)){

                return(
            <div onClick={()=>this.dislikeClick(this.props.userKey,this.props.post._id)}>
                    <a 
                        className="float-left btn text-white btn-danger">
                        <i  className ="fa fa-heart"></i> 
                        Dislike
                </a>
          </div>
                )
        }else{
            return (
            <div onClick={()=>this.likeClick(this.props.userKey,this.props.post._id)}>
                <a 
                        className="float-left btn text-white btn-danger">
                        <i  className ="fa fa-heart"></i> 
                           Like
                </a>
        </div>
            )
        }
    }
}
const mapDispatchToProps = {
   like,
   dislike
}
const mapStateToProps = (state) => {
    return {
        userKey: state.currentUser.cle,
        idUser : state.currentUser.idUser,
        likes: state.likes
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Like)
 