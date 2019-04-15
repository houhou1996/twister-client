import React from 'react';
import '../style/post.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentList from './CommentList'
import CommentInput from './CommentInput';
import {connect} from 'react-redux'
import {deletePost} from '../actions/index'
import {switchProfile} from '../actions/index'
import {switchProfilePost,updateFriend} from '../actions/index'
import {like} from '../actions/index'
import '../style/comment.css'
import Like from './Like'
class Post extends React.Component{


supprimer(id){
      this.props.deletePost(this.props.userKey,id)
      
}
handleClick(id,nom){
  this.props.updateFriend(id)
    this.props.switchProfile(id,nom)
    this.props.switchProfilePost(id)
    this.props.setProfile(id)
}


render(){
  if(this.props.idUser === this.props.post.id_user){
    return (<div className="main-section">
    <div className="content">
      <div className="top-section">
        <div className="user-img">
          <img src="http://nicesnippets.com/demo/man.png" />
        </div>
        <div className="container">
        <div className="row">
        <div className="col-sm-6">
        <div className="user-detail">
          <a href="#" onClick={()=>this.handleClick(this.props.post.id_user,this.props.post.name)} >{this.props.post.name}</a>
          <div>{this.props.post.date}</div>
          </div>
        </div>

        <div className="col-sm-6">

          <a onClick={this.supprimer.bind(this,this.props.post._id)} className="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Delete</a>
        </div>
        </div>


        </div>
        <div style={{clear: 'both'}} />			
      </div>
      <div className="comment-content">
        <span>{this.props.post.text}</span>
      </div>
     
            
      </div>
      <div className="stats">
              <p>
                  <Like post={this.props.post}/>
              </p>
          
              </div>
              <div className="post-footer">
              <div className="input-group"> 
                <CommentInput indice={this.props.indice} post={this.props.post}>

                </CommentInput>

              </div>
              <div>
                <CommentList setProfile={this.props.setProfile} post ={this.props.post}>

                </CommentList>
              </div>
      </div>
      </div>
  
                      )
  }else{
    return (<div className="main-section">
    <div className="content">
      <div className="top-section">
        <div className="user-img">
          <img src="http://nicesnippets.com/demo/man.png" />
        </div>
        <div className="container">
        <div className="row">
        <div className="col-sm-6">
        <div className="user-detail">
          <a href="#" onClick={()=>this.handleClick(this.props.post.id_user,this.props.post.name)}>{this.props.post.name}</a>
          <div>{this.props.post.date}</div>
          </div>
        </div>

      
        </div>


        </div>
        <div style={{clear: 'both'}} />			
      </div>
      <div className="comment-content">
        <span>{this.props.post.text}</span>
      </div>
      </div>
      <div className="stats">
              <p>
                  <Like post={this.props.post}/>
              </p>
          
              </div>
              <div className="post-footer">
              <div className="input-group"> 
                <CommentInput indice={this.props.indice} post={this.props.post}>

                </CommentInput>

              </div>
              <div>
                <CommentList setProfile={this.props.setProfile} post ={this.props.post}>

                </CommentList>
              </div>
              </div>
      </div>

    )
  }
                    }
}

const mapStateToProps = (state) => {
  return {
    userKey: state.currentUser.cle,
    idUser: state.currentUser.idUser,
    likes: state.likes
  }
}
const mapDispatchToProps = {
      deletePost,
      switchProfile,
      switchProfilePost,
      like,
      updateFriend
  
}

export default connect(mapStateToProps,mapDispatchToProps)( Post)