import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostInput from './PostInput'
import PostList from './PostList'
import FriendList from './FriendList';
class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    
    
    
    render(){
            return(
            <div className ="container">
                <div className="row">
                    <div className="col">
                        <PostInput cle={this.props.cle}></PostInput>
                        <PostList setIdUser={this.props.setIdUser} setProfile={this.props.setProfile}  cle ={this.props.cle}></PostList>
                        
                    </div>
                    <div className="col">
                        <FriendList setProfile ={this.props.setProfile}cle ={this.props.cle}></FriendList>
                    </div>
                </div>
            </div>
            )
    }
}
export default HomePage