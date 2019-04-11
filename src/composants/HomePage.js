import React from 'react'
import PostInput from './PostInput'
import PostList from './PostList'
import FriendList from './FriendList';
class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    
    
    
    render(){
            return(
                <div>
                    <PostInput cle={this.props.cle}></PostInput>
                    <PostList setIdUser={this.props.setIdUser} setProfile={this.props.setProfile}  cle ={this.props.cle}></PostList>
                    <FriendList cle ={this.props.cle}></FriendList>
                </div>
            )
    }
}
export default HomePage