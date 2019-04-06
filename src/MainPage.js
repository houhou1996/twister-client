import React from 'react'
import NavigationPanel from './composants/NavigationPanel'
import Signin from './composants/Signin'
class MainPage extends React.Component{
        constructor(props){
            super(props)
            this.state = {isConnected : false, pageCourante: "login",isInHomePage :true,key:""}
            this.getConnected = this.getConnected.bind(this)
            this.setLogout = this.setLogout.bind(this)
            this.setHomePage = this.setHomePage.bind(this)
            this.setProfile = this.setProfile.bind(this)
            this.setKey = this.setKey.bind(this)
        }
    

getConnected(){
    this.setState(()=>({isConnected: true,pageCourante: "HomePage"}))
}
setLogout(){
    this.setState(()=>({isConnected: false,pageCourante: "Login"}))
}
setHomePage(){
    this.setState(()=>({isInHomePage: true}))
}
setProfile(){
    this.setState(()=>({isInHomePage: false}))
}
setKey(cle){
    this.setState(()=>({key: cle}))
}

render(){
    return(
        <div>
            <NavigationPanel 
            login={this.getConnected} 
            cle={this.setKey}
            logout={this.setLogout} 
            isConnected={this.state.isConnected}
            homePage={this.setHomePage} 
            profile={this.setProfile}
            isInHomePage={this.state.isInHomePage}/>
        </div>
    )
    
}

}
export default MainPage
