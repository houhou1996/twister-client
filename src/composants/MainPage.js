import React from 'react'
import Login from './Login'
import Logout from './Logout'
import Search from './Search';
import Signin from './Signin';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import '../style/main.css'
import {connect} from 'react-redux'
import {listPosts} from '../actions/index'
import {switchProfile} from '../actions/index'
import {switchProfilePost} from '../actions/index'
import UserList from './UserList';
class MainPage extends React.Component{
        constructor(props){
            super(props)
            this.state = {isConnected : false, pageCourante: "login",isInAddFriend: false,isInHomePage :true}
            this.getConnected = this.getConnected.bind(this)
            this.setLogout = this.setLogout.bind(this)
            this.setHomePage = this.setHomePage.bind(this)
            this.setProfile = this.setProfile.bind(this)
            this.setProfile2 = this.setProfile2.bind(this)
            this.setAddFriend = this.setAddFriend.bind(this)

        }
    

getConnected(){
    this.setState(()=>({isConnected: true,pageCourante: "HomePage"}))
}
setLogout(){
    this.setState(()=>({isConnected: false,pageCourante: "Login"}))
}
setHomePage(){
    this.props.listPosts("")
    this.props.switchProfile(this.props.currectUserId)
    this.setState(()=>({isInHomePage: true}))
    this.setState(()=>({isInAddFriend: false}))
}
setProfile(id){
    this.setState(()=>({isInHomePage: false}))
    this.setState(()=>({isInAddFriend: false}))
}
setProfile2(){
    this.props.switchProfilePost(this.props.currectUserId)
    this.props.switchProfile(this.props.currectUserId)
    this.setState(()=>({isInHomePage: false}))
    this.setState(()=>({isInAddFriend: false}))
}
setAddFriend(){
    this.setState(()=>({isInAddFriend:true}))
}
render(){
    if(this.state.isConnected === true){
        if(this.state.isInAddFriend=== true){
            return(
                <div>
                        <div className="topnav">
                                    <a onClick={this.setProfile2}  className="active" href="#profile">{this.props.name}</a>
                                    <a onClick={this.setHomePage}  href="#home">Accueil</a>
                                    <a onClick={this.setAddFriend}href="#AddFriend">Add Friend</a>
                                    <Logout logout={this.setLogout}/>
                                    <Search/>
                        </div>
               
               <div className="home">
                    <UserList setProfile={this.setProfile}/>
                </div>
            </div>
            )
        }else{
        if(this.state.isInHomePage===true){
            return(
                <div>
                        <div className="topnav">
                                    <a onClick={this.setProfile2}  className="active" href="#profile">{this.props.name}</a>
                                    <a onClick={this.setHomePage}  href="#home">Accueil</a>
                                    <a onClick={this.setAddFriend}href="#AddFriend">Add Friend</a>
                                    <Logout logout={this.setLogout}/>
                                    <Search/>
                        </div>
               
               <div className="home">
                    <HomePage  setProfile={this.setProfile}></HomePage>
                </div>
            </div>
       
            )
    }else{
        return(
        <div>
            <div className="topnav">
                                    <a onClick={this.setProfile2}  className="active" href="#profile">{this.props.name}</a>
                                    <a onClick={this.setHomePage}  href="#home">Accueil</a>
                                    <a onClick={this.setAddFriend} href="#addFriend">Add Friend</a>
                                    <Logout logout={this.setLogout}/>
                                    <Search/>
                        </div>
            <ProfilePage setProfile={this.setProfile} idUser={this.props.idUser}> 
                
            </ProfilePage>
            </div>
        )
    }
    
 } }else{
        return(
            <nav>
                <Login 
                connexion ={this.getConnected} setIdUser={this.setIdUser} 
                idUser={this.state.idUser}setKey={this.setKey} 
                cle ={this.state.key}/>
                <Signin/>
            </nav>
        )
    }

}

}
const mapStateToProps = (state) => {
    return {
        currectUserId: state.currentUser.idUser,
        idUser: state.currentProfile.idUser,
        cle: state.currentUser.cle,
        name: state.currentUser.name
    }
}

const mapDispatchToProps  = {
    listPosts, 
    switchProfile,
    switchProfilePost
}
export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
