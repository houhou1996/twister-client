import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Login.css'
import axios from 'axios'
class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={login:"",password:"",key:"",status:"",texterror:""}
        this.updateLoginValue = this.updateLoginValue.bind(this)
        this.updatePasswordValue = this.updatePasswordValue.bind(this)

    }

    updateLoginValue(evt){
        this.setState({login: evt.target.value})
    }
    updatePasswordValue (evt){
        this.setState({password: evt.target.value})
    
    }
    pressEnter = (e)=>{
        if(e.key==='Enter'){
            this.handleClick()
        }
    }
   handleClick(){
    axios.get('http://localhost:8080/twister/login?login='+this.state.login+'&password='+this.state.password)
    .then(response=>{
        if(!response.data.clé){
            this.setState({status: "error",texterror: response.data.message})
            
        }else{
            this.setState({key: response.data.clé})
            this.props.connexion()
            this.props.setKey(this.state.key)

        }
        
    })
    
   }
    render(){
       
        return (
    
            <header>
            <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <img src ="https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg" width="80"/>
                </div>
                <div className="col-sm-6 hidden-xs">
                    <div className="row">
                        <div className="col-sm-5">
                              <div className="form-group">
                                <input type="text" value={this.state.login} 
                                className="form-control" tabIndex="1"
                                onKeyPress={this.pressEnter.bind(this)} onChange={this.updateLoginValue} 
                                placeholder="Email Address"/>
                                <div className="login-bottom-text checkbox hidden-sm">
                                    <label>
                                      <input type="checkbox" id=""/>
                                      Remember me
                                    </label>
                                  </div>
                              </div>
                        </div>	
                        <div className="col-sm-5">
                             <div className="form-group">
                                <input type="password" 
                                tabIndex="2"
                                onKeyPress={this.pressEnter.bind(this)}
                                className="form-control"
                                 placeholder="Password"
                                 value={this.state.password}
                                 onChange={this.updatePasswordValue}
                                 />
                                
                              </div>
                        </div>
                        <div className="col-sm-2">
                             <div className="form-group">
                                <button type="button"
                                onClick={this.handleClick.bind(this)}>
                                connexion </button>
                              </div>
                        </div>
                    </div>	
                </div>
            </div>
            </div>
        </header>
        )
    }
        
    
}
export default Login