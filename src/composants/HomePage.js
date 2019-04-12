import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostInput from './PostInput'
import PostList from './PostList'
import FriendList from './FriendList';
class HomePage extends React.Component{
 
    
    
    
    render(){
            return(
            <div className ="container">
            <PostInput cle={this.props.cle}></PostInput>
                <div className="row">
                
                    <div className="col-md-7">
                       
                        <PostList setProfile={this.props.setProfile}></PostList>
                        
                    </div>
                    <div className="col-md-5">
                        <FriendList setProfile ={this.props.setProfile}cle ={this.props.cle}></FriendList>
                    </div>
                </div>
            </div>
            )
    }
}
export default HomePage