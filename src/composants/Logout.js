import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/logout.css"
import axios from 'axios'
import {connect} from 'react-redux'
import {disconnect} from '../actions/index'
class Logout extends React.Component{
    constructor(props){
        super(props)
        this.state={key:"",status:"",texterror:""}
    }
    logout(){

            axios.get('http://localhost:8080/twister/logout?key='+this.props.cle)
            .then(response=>{
                if(!response.data.code){
                    console.log(response.data)
                    this.setState({key: ""})
                    this.props.logout()
                    this.props.setKey(this.state.key)
                    this.props.disconnect()
                    

                }else{
                    this.setState({status: "error",texterror: response.data.message})
                }
                
            })
    }
    render(){
        return (
        
            <button type="button" onClick={this.logout.bind(this)}  className="logout">Logout</button>
        )
    }
}
const mapDispatchToProps ={
    disconnect
}
export default connect(null,mapDispatchToProps)(Logout)