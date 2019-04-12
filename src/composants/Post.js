import React from 'react';
import '../style/post.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentList from './CommentList'
import CommentInput from './CommentInput';
import {connect} from 'react-redux'
import {deletePost} from '../actions/index'
import {switchProfile} from '../actions/index'
import {switchProfilePost} from '../actions/index'
class Post extends React.Component{


supprimer(id){
      this.props.deletePost(this.props.userKey,id)
      
}
handleClick(id){
    this.props.switchProfile(id)
    this.props.switchProfilePost(id)
    this.props.setProfile(id)


}

render(){
    if(this.props.idUser === this.props.post.id_user){
    return (
      <div className="container bootstrap snippet">
        <div className="col-sm-8">
          <div className="panel panel-white post panel-shadow">
            <div className="post-heading">
              <div className="pull-left image">
                <img src="https://bootdey.com/img/Content/user_1.jpg" className="img-circle avatar" alt="user profile" />
              </div>
              <div className="pull-left meta">
                <div className="title h5">
                  <a onClick={()=>this.handleClick(this.props.post.id_user)}>
                    <b>
                    {this.props.post.name}
                    </b>
                  </a>
                </div>
              </div>
      
            </div> 
            
            
            <div className="post-description"> 
           
            <button type="Submit" onClick={this.supprimer.bind(this,this.props.post._id)}className="text-muted time">delete</button>
              <h3>
                {
                  this.props.post.text
                }
              </h3>
              <div className="stats">
                <a href="#" className="btn btn-default stat-item">
                  <i className="fa fa-thumbs-up icon" />2
                </a>
                <a href="#" className="btn btn-default stat-item">
                  <i className="fa fa-share icon" />12
                </a>
              </div>
            </div>
            <div className="post-footer">
              <div className="input-group"> 
                <CommentInput indice={this.props.indice} post={this.props.post}>

                </CommentInput>

              </div>
              <div>
                <CommentList post ={this.props.post}>

                </CommentList>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    )
 }else{
    return(
      <div className="container bootstrap snippet">
        <div className="col-sm-10">
          <div className="panel panel-white post panel-shadow">
            <div className="post-heading">
              <div className="pull-left image">
                <img src="https://bootdey.com/img/Content/user_1.jpg" className="img-circle avatar" alt="user profile image" />
              </div>
  
              <div className="pull-left meta">
                <div className="title h5">
                  <a onClick={()=>this.handleClick(this.props.post.id_user)}>
                    <b>
                    {this.props.post.name}
                    </b>
                  </a>
                </div>
              </div>
      
            </div> 
            
            
            <div className="post-description"> 
              <h3>
                {
                  this.props.post.text
                }
              </h3>
              <div className="stats">
                <a href="#" className="btn btn-default stat-item">
                  <i className="fa fa-thumbs-up icon" />2
                </a>
                <a href="#" className="btn btn-default stat-item">
                  <i className="fa fa-share icon" />12
                </a>
              </div>
            </div>
            <div className="post-footer">
              <div className="input-group"> 
                <CommentInput post={this.props.post}>

                </CommentInput>

              </div>
              <div>
                <CommentList post ={this.props.post}>

                </CommentList>
              </div>
              
            </div>
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
    idUser: state.currentUser.idUser
  }
}
const mapDispatchToProps = {
      deletePost,
      switchProfile,
      switchProfilePost
  
}

export default connect(mapStateToProps,mapDispatchToProps)( Post)