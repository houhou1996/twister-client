import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {listFriends} from '../actions/index'
import '../style/friendList.css'
import Friend from './Friend';
class FriendList extends React.Component{
 
    render (){
        return(
            this.props.friends.map((friend,index)=>{
                    return(
                        <div key = {index}>
                            <Friend setProfile={this.props.setProfile} friend ={friend}/>
                        </div>  
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
    listFriends
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendList)