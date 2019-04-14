import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getUsers} from '../actions/index'
import '../style/friendList.css'
import User from './User'
import '../style/user.css'
class FriendList extends React.Component{
 
    render (){
        return(
            <div className="container">
  <div className="panel panel-default">
    <table className="table table-hover">
      <tbody>
        <tr>
                {
                    this.props.users.map(user=>{
                            return (
                                <div>
                                    <User setProfile={this.props.setProfile} user ={user}/>
                                </div>
                            )
                    })
                    
                } 
            
          
        </tr>
      </tbody>
    </table>
  </div>
</div>
    
        )
    }
    
}

const  mapStateToProps = (state) =>{    
    return {
        users: state.Users
    }
}
const mapDispatchToProps ={
    getUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendList)




