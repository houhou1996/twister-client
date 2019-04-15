import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostInput from './PostInput'
import PostList from './PostList'
import FriendList from './FriendList';
class HomePage extends React.Component{
 
    
    
    
    render(){
            return(
            <div>
            <PostInput cle={this.props.cle}></PostInput>
                <div >
                
                    <div >
                       
                        <PostList setProfile={this.props.setProfile}></PostList>
                        
                    </div>
                </div>
            </div>
            )
    }
}
export default HomePage