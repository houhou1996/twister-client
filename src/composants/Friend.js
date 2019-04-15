import React from 'react'
import {connect} from 'react-redux'
import {switchProfile} from '../actions/index'
import '../style/profile.css'
import {switchProfilePost,updateFriend,addFriend,deleteFriend} from '../actions/index'

 class Friend extends React.Component{
  constructor(props){
    super(props)
    this.areFriends = this.areFriends.bind(this)
  }
  deleteClick(){
    this.props.deleteFriend(this.props.cle,this.props.currentUserId,this.props.friend.idFriend)
  }
addClick(){
  console.log("wesh")
    this.props.addFriend(this.props.cle,this.props.friend.idFriend)
}


    handleClick(id,name){
      this.props.updateFriend(id)
    this.props.switchProfile(id,name)
    this.props.switchProfilePost(id)
    this.props.setProfile(id)
    }
    areFriends(){
      
      let trouve = false
      this.props.friends.map(friend=>{
           
            if(this.props.currentUserId === friend.idUser && this.props.friend.idFriend === friend.idFriend){
              trouve = true
            }  
      })
    return trouve
}
    render(){

                  if(this.areFriends()){
                    return(
                      <div>

                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt className="media-object img-circle" />
                              </a>
                              <div className="media-body valign-middle">
                                <a href="#profile" onClick={()=>this.handleClick(this.props.friend.id,this.props.friend.name)}className="text-inverse">{this.props.friend.name}</a>
                              </div>
                              
                                  <button onClick={this.deleteClick.bind(this)} className="btn btn-default">delete Friend</button>
                               
                            </div>
                          </div>
                        </div>

                    )
                  }else{
                    return (
                      <div>

                          <div className="p-10 bg-white">
                            <div className="media media-xs overflow-visible">
                              <a className="media-left" href="javascript:;">
                                <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt className="media-object img-circle" />
                              </a>
                              <div className="media-body valign-middle">
                                <a href="#profile" onClick={()=>this.handleClick(this.props.friend.id,this.props.friend.name)}className="text-inverse">{this.props.friend.name}</a>
                              </div>
                
  
                                  <button onClick={this.addClick.bind(this)} className="btn btn-default">add Friend</button>
                        
                        
                            </div>
                          </div>
                        </div>
                    )
                  }
                  
                
    }
    
}
const mapStateToProps = (state) => {
  return {
         currentUserId: state.currentUser.idUser,
        idUser: state.currentProfile.idUser,
        friends :state.currentFriends,
        cle: state.currentUser.cle
  }
}
const mapDispatchToProps = {
    switchProfile,
    switchProfilePost,
    updateFriend,
    addFriend,
    deleteFriend

}

export default connect(mapStateToProps,mapDispatchToProps)(Friend)