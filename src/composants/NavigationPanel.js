import React from 'react'
import Login from './Login'
import Logout from './Logout'
import Search from './Search';
import Signin from './Signin';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import '../style/navigation.css'

    class NavigationPannel extends React.Component{
        constructor(props){
            super(props)
            
        }
       
        render(){
            if(this.props.isConnected === true){
                if(this.props.isInHomePage===true){
                    return(
                        <div>
                        <nav className="navigation">
                        <div className="container"> 
                            <div className="row">
                            <div className="col-8">
                                        <Search></Search>
                                    </div>
                                <div className="col-1">
                                    <button onClick={this.props.profile} className="accueil">Profile</button>
                                </div>
                                    <div className="col-1">
                                        <button onClick={this.props.homePage} className="accueil">Accueil</button>
                                    </div>
                                <div className="col-1">

                                    <Logout logout ={this.props.logout}/>
                                </div>
                                    
                                    
                            
                            </div>
                        
                        </div>
                        </nav>
                        <div>
                        <HomePage></HomePage>
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
                                    <button onClick={this.props.profile} className="accueil">Profile</button>
                                </div>
                                    <div className="col-1">
                                        <button onClick={this.props.homePage} className="accueil">Accueil</button>
                                    </div>
                                <div className="col-1">

                                    <Logout logout ={this.props.logout}/>
                                </div> 
                            </div>                       
                        </div>
                    </nav>
                    <ProfilePage>
                    </ProfilePage>
                    </div>
                )
            }
            
         } else{
                return(
                    <nav>
                        <Login connexion ={this.props.login} cle ={this.props.cle}/>
                        <Signin/>
                    </nav>
                )
            }
        }

    }


export default NavigationPannel