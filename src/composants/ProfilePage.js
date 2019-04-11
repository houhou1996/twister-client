import React from 'react'
import PostInput from './PostInput'
import PostList from './PostList'
import FriendList from './FriendList'
import '../style/profile.css'
import UserDetails from './UserDetails'

class ProfilePage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
            return(
                  
                        <div id="user-profile-2" className="user-profile">
                          <div className="tabbable">
                            
                            <div className="tab-content no-border padding-24">
                              <div id="home" className="tab-pane in active">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-3 center">
                                    <span className="profile-picture">
                                      <img className="editable img-responsive" alt=" Avatar" id="avatar2" src="http://bootdey.com/img/Content/avatar/avatar6.png" />
                                    </span>
                                    <div className="space space-4" />
                                    <a href="#" className="btn btn-sm btn-block btn-success">
                                      <i className="ace-icon fa fa-plus-circle bigger-120" />
                                      <span className="bigger-110">Add as a friend</span>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-block btn-primary">
                                      <i className="ace-icon fa fa-envelope-o bigger-110" />
                                      <span className="bigger-110">Send a message</span>
                                    </a>
                                  </div>{/* /.col */}


                                            <UserDetails idUser={this.props.idUser}/>





                                  </div>{/* /.col */}
                                </div>{/* /.row */}
                                </div>
                                </div>
                                <PostList>
                                    
                                </PostList>
                            </div>
                                
                                
                       
                    
            )
    }
}
 

export default (ProfilePage)