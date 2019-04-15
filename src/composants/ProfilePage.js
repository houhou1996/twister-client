import React from 'react'
import PostList from './PostList'
import '../style/profile.css'
import UserDetails from './UserDetails'
import {connect} from 'react-redux'
import {addFriend} from '../actions/index'
import {deleteFriend,updateFriend} from '../actions/index'
import FriendList from './FriendList';

class ProfilePage extends React.Component{
    constructor(props){
      super(props)
      this.state={inFriendList: false}
    }
    deleteClick(){
      this.props.deleteFriend(this.props.cle,this.props.currentUser,this.props.currentProfile)
    }
    handleClick(){
        this.props.addFriend(this.props.cle,this.props.currentProfile)
        
    }
    areFriends = (idUser,idFriend) =>{
          let trouve = false
          this.props.friends.map(friend=>{
          
                if(idUser === friend.idUser && idFriend === friend.idFriend){
                  trouve = true
                }
              
          })
          
        return trouve
    }
    showFriendList=()=>{
      this.setState({inFriendList: true})
    }
    showPostList=()=>{
      this.setState({inFriendList: false})
    }
    friendClick=()=>{
        this.showFriendList()
    }
    currentProfile=()=>{
      return (
        <div>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div id="content" className="content content-full-width">
          {/* begin profile */}
          <div className="profile">
            <div className="profile-header">
              {/* BEGIN profile-header-cover */}
              <div className="profile-header-cover" />
              {/* END profile-header-cover */}
              {/* BEGIN profile-header-content */}
              <div className="profile-header-content">
                {/* BEGIN profile-header-img */}
                <div className="profile-header-img">
                  <img src="http://bootdey.com/img/Content/avatar/avatar7.png" alt />
                </div>
                {/* END profile-header-img */}
                {/* BEGIN profile-header-info */}
                <div className="profile-header-info">
                  <h4 className="m-t-10 m-b-5">{this.props.name}</h4>
                  <p className="m-b-10">Web Developer</p>
                </div>
                {/* END profile-header-info */}
              </div>
              {/* END profile-header-content */}
              {/* BEGIN profile-header-tab */}
              <ul className="profile-header-tab nav nav-tabs">
                <li onClick={this.showPostList}className="nav-item"><a href="#profile-post" className="nav-link" data-toggle="tab">POSTS</a></li>
                <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
                <li onClick={this.friendClick} className="nav-item"><a href="#profile-friends"
                >FRIENDS</a></li>
              </ul>
              {/* END profile-header-tab */}
            </div>
          </div>
        </div></div></div>
        </div>
            
        </div>

      )
    }
    notCurrentProfile=()=>{
      return (
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div id="content" className="content content-full-width">
                    {/* begin profile */}
                    <div className="profile">
                      <div className="profile-header">
                        {/* BEGIN profile-header-cover */}
                        <div className="profile-header-cover" />
                        {/* END profile-header-cover */}
                        {/* BEGIN profile-header-content */}
                        <div className="profile-header-content">
                          {/* BEGIN profile-header-img */}
                          <div className="profile-header-img">
                            <img src="http://bootdey.com/img/Content/avatar/avatar7.png" alt />
                          </div>
                          {/* END profile-header-img */}
                          {/* BEGIN profile-header-info */}
                          <div className="profile-header-info">
                            <h4 className="m-t-10 m-b-5">{this.props.name}</h4>
                            <p className="m-b-10">Web Developer</p>
                            <a onClick={this.handleClick.bind(this)} href="#" className="btn btn-xs btn-yellow">Add Friend</a>
                          </div>
                          {/* END profile-header-info */}
                        </div>
                        {/* END profile-header-content */}
                        {/* BEGIN profile-header-tab */}
                        <ul className="profile-header-tab nav nav-tabs">
                          <li onClick={this.showPostList} className="nav-item"><a href="#profile-post" className="nav-link" data-toggle="tab">POSTS</a></li>
                          <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
                          <li onClick={this.friendClick} className="nav-item"><a href="#profile-friends" data-toggle="tab">FRIENDS</a></li>
                        </ul>
                        {/* END profile-header-tab */}
                      </div>
                    </div>
                  </div></div></div></div></div>
      )
    }
    theyAreFriend=()=>{
      return(
      <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div id="content" className="content content-full-width">
                    {/* begin profile */}
                    <div className="profile">
                      <div className="profile-header">
                        {/* BEGIN profile-header-cover */}
                        <div className="profile-header-cover" />
                        {/* END profile-header-cover */}
                        {/* BEGIN profile-header-content */}
                        <div className="profile-header-content">
                          {/* BEGIN profile-header-img */}
                          <div className="profile-header-img">
                            <img src="http://bootdey.com/img/Content/avatar/avatar7.png" alt />
                          </div>
                          {/* END profile-header-img */}
                          {/* BEGIN profile-header-info */}
                          <div className="profile-header-info">
                            <h4 className="m-t-10 m-b-5">{this.props.name}</h4>
                            <p className="m-b-10">Web Developer</p>
                            <a onClick={this.deleteClick.bind(this)} href="#" className="btn btn-xs btn-yellow">Delete Friend</a>
                          </div>
                          {/* END profile-header-info */}
                        </div>
                        {/* END profile-header-content */}
                        {/* BEGIN profile-header-tab */}
                        <ul className="profile-header-tab nav nav-tabs">
                          <li onClick={this.showPostList} className="nav-item"><a href="#profile-post" className="nav-link" data-toggle="tab">POSTS</a></li>
                          <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
                          <li onClick={this.friendClick} className="nav-item"><a href="#profile-friends"  data-toggle="tab">FRIENDS</a></li>
                        </ul>
                        {/* END profile-header-tab */}
                      </div>
                    </div>
                  </div></div></div></div></div>
      )

    }

    render(){
    if(this.state.inFriendList === false){
      if( this.props.currentProfile === this.props.currentUser){
      return(
        <div>
          {
            this.currentProfile()
          }
          <PostList setProfile ={this.props.setProfile}/>
        </div>
      )
      }else{
          if(this.areFriends(this.props.currentUser,this.props.currentProfile)){
            return(
              <div>
                  {
                     this.theyAreFriend()
                  }
                  <PostList setProfile ={this.props.setProfile}/>
              </div>
             
            )
          }else{
          return(
            <div>
              {
            this.notCurrentProfile()
              }
              <PostList setProfile ={this.props.setProfile}/>
            </div>
          )
          }
      }
    }else{
      if( this.props.currentProfile === this.props.currentUser){
        return(
          <div>
            {
              this.currentProfile()
            }
            <FriendList setProfile ={this.props.setProfile}/>
          </div>
        )
        }else{
            if(this.areFriends(this.props.currentUser,this.props.currentProfile)){
              return(
                <div>
                    {
                       this.theyAreFriend()
                    }
                    <FriendList setProfile ={this.props.setProfile}/>
                </div>
               
              )
            }else{
            return(
              <div>{this.notCurrentProfile()} <FriendList setProfile ={this.props.setProfile}/></div>
              
            )
            }
        }
      

    }
    }
     
  }

const mapDispatchToProps = {
  addFriend,
  deleteFriend,
  updateFriend
}
 const mapStateToProps = (state) => {
   return {
     cle: state.currentUser.cle,
     currentUser: state.currentUser.idUser,
     name: state.currentProfile.name,
     friends: state.currentFriends,
     currentProfile:state.currentProfile.idUser,
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)