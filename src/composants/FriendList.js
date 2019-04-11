import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {afficheFriends} from '../actions/index'
import '../style/friendList.css'
import Friend from './Friend';
class FriendList extends React.Component{
 
    render (){
        return(
            this.props.friends.map(friend=>{
                    return(
                        <Friend setProfile={this.props.setProfile} friend ={friend}/>
                    )
            })
    
        )
    }
    
}

const  mapStateToProps = (state) =>{    
    return {
        friends: state.friends
    }
}
const mapDispatchToProps ={
    afficheFriends
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendList)