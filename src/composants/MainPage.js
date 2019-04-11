import React from 'react'
import Login from './Login'
import Logout from './Logout'
import Search from './Search';
import Signin from './Signin';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import '../style/navigation.css'
import {connect} from 'react-redux'
import {listPosts} from '../actions/index'
import {switchProfile} from '../actions/index'
import {switchProfilePost} from '../actions/index'
class MainPage extends React.Component{
        constructor(props){
            super(props)
            this.state = {isConnected : false, pageCourante: "login",isInHomePage :true,key:"",idUser:0}
            this.getConnected = this.getConnected.bind(this)
            this.setLogout = this.setLogout.bind(this)
            this.setHomePage = this.setHomePage.bind(this)
            this.setProfile = this.setProfile.bind(this)
            this.setKey = this.setKey.bind(this)
            this.setIdUser = this.setIdUser.bind(this)
            this.setProfile2 = this.setProfile2.bind(this)
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
}
setProfile(id){
    this.setState(()=>({isInHomePage: false}))
}
setProfile2(){
    this.props.switchProfilePost(this.props.currectUserId)
    this.props.switchProfile(this.props.currectUserId)
    this.setState(()=>({isInHomePage: false}))
}
setKey(cle){
    this.setState({key: cle})
}
setIdUser(id){
    this.setState({idUser: id})
}
render(){
    if(this.state.isConnected === true){
        if(this.state.isInHomePage===true){
            return(
                <div>
                <nav className="navigation">
                <div className="container"> 
                    <div className="row">
                    <div className="col-8">
                                <Search></Search>
                            </div>
                        <div className="col-1">
                            <button onClick={this.setProfile2} className="accueil">Profile</button>
                        </div>
                            <div className="col-1">
                                <button onClick={this.setHomePage}  className="accueil">Accueil</button>
                            </div>
                        <div className="col-1">

                            <Logout logout={this.setLogout} cle={this.state.key} setKey={this.setKey}/>
                        </div>
                            
                            
                    
                    </div>
                
                </div>
                </nav>
                <div>
                <HomePage setIdUser={this.setIdUser} setProfile={this.setProfile} cle={this.state.key}></HomePage>

            </div>
            </div>
            )
    }else{
        return(
        <div>
        <nav className="navigation">
                <div className="container"> 
                    <div className="row">
                    <div className="col-8">
                                <Search></Search>
                            </div>
                        <div className="col-1">
                            <button onClick={this.setProfile2} className="accueil">Profile</button>
                        </div>
                            <div className="col-1">
                                <button onClick={this.setHomePage} className="accueil">Accueil</button>
                            </div>
                        <div className="col-1">

                            <Logout setKey={this.setKey} logout ={this.setLogout} cle={this.state.key}/>
                        </div> 
                    </div>                       
                </div>
            </nav>
            <ProfilePage idUser={this.props.idUser}> 
                
            </ProfilePage>
            </div>
        )
    }
    
 } else{
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
        idUser: state.currentProfile.idUser
    }
}

const mapDispatchToProps  = {
    listPosts, 
    switchProfile,
    switchProfilePost
}
export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
