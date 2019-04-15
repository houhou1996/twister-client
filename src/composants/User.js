import React from 'react'
import {connect} from 'react-redux'
import {addFriend,deleteFriend,switchProfile,switchProfilePost,updateFriend} from '../actions/index'
class User extends React.Component{

    deleteClick(){
        this.props.deleteFriend(this.props.cle,this.props.currentUser,this.props.user.id)
      }
    handleClick(){
        this.props.addFriend(this.props.cle,this.props.user.id)
    }
    areFriends = (idUser,idFriend) =>{
          let trouve = false
          this.props.friends.map(friend=>{
                if(idUser === friend.idUser && idFriend === friend.idFriend){
                    trouve = true
                }    
          })  
        return trouve
    }
    switchProfile(id,name){
      this.props.updateFriend(id)
        this.props.switchProfile(id,name)
        this.props.switchProfilePost(id)
        this.props.setProfile(id)
    }
    render(){
        if( !this.areFriends(this.props.currentUser,this.props.user.id)){
            if(this.props.currentUser === this.props.user.id){
                return(
                <table>
                <td>
                <span className="glyphicon glyphicon-file" />
                <a onClick={()=>this.switchProfile(this.props.user.id,this.props.user.name)}  href="#" >{this.props.user.name}</a> 
            </td>
            </table>
                )
        

            }else{
        return (
        <table>
            <td>
            <span className="glyphicon glyphicon-file" />
            <a onClick={()=>this.switchProfile(this.props.user.id,this.props.user.name)}  href="#" >{this.props.user.name}</a> 
          </td>
          <td className="text-right text-nowrap">
            <button onClick={this.handleClick.bind(this)} className="btn btn-xs btn-info">add</button>
          </td>
          </table>
        )
        }
    }else{
            return(
            <table>
            <td>
            <span className="glyphicon glyphicon-file" />
           <a onClick={()=>this.switchProfile(this.props.user.id,this.props.user.name)}  href="#" >{this.props.user.name}</a> 
          </td>
          <td className="text-right text-nowrap">
            <button onClick={this.deleteClick.bind(this)} className="btn btn-xs btn-info">remove</button>
          </td>
          </table>
            )

        }

    }

}
const mapDispatchToProps = {
    addFriend,
    deleteFriend,
    switchProfilePost,
    switchProfile,
    updateFriend
  }
   const mapStateToProps = (state) => {
     return {
       cle: state.currentUser.cle,
       currentUser: state.currentUser.idUser,
       friends: state.currentFriends,
       currentProfile:state.currentProfile.idUser
     }
   }
  
  export default connect(mapStateToProps,mapDispatchToProps)(User)
