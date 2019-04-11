import React from 'react'
import { connect } from 'react-redux'
import {afficheFriends} from '../actions/index'
class FriendList extends React.Component{

componentWillMount(){
    
    this.props.afficheFriends(this.props.cle)
}
 
    render (){
        if(this.props.friends!== undefined){
        return(
           <div>
              {
                  this.props.friends.map((friend,index)=>{
                      return(
                    <p key ={index}> 
                      {
                            friend.name
                      }
                      </p>
                      );
                  })
              }
           </div>
        )
    }else{
        return(
            <div>

            </div>
        )
    }
}

    
}

const  mapStateToProps = (state) =>{    
    return {
        friends: state.friends.friends
    }
}
const mapDispatchToProps ={
    afficheFriends
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendList)