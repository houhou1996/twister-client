import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/logout.css"
class Logout extends React.Component{
    render(){
        return (
        
            <button type="button" onClick={this.props.logout}  className="logout">Logout</button>
        )
    }
}
export default Logout