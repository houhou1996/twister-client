import React from 'react'
import {connect} from 'react-redux'

class UserDetails extends React.Component{
    constructor(props){
        super(props)
    }

render(){
    return(
        <div>
            {
                this.props.users.map((user)=>{
                    if(user.id === this.props.idUser){
                        return(
                            <div key ={user.id} className="col-xs-12 col-sm-9">
                                    
                                    <div className="profile-user-info">
                                      <div className="profile-info-row">
                                        <div className="profile-info-name"> Username </div>
                                        <div className="profile-info-value">
                                          <span>{
                                              user.name
                                          }</span>
                                        </div>
                                      </div>
                                      <div className="profile-info-row">
                                        <div className="profile-info-name"> Mobile Phone </div>
                                        <div className="profile-info-value">
                                          <i  />
                                          <span>{
                                              user.mobilePhone
                                          }
                                          </span>
                                        </div>
                                      </div>
                                      <div className="profile-info-row">
                                        <div className="profile-info-name"> Login </div>
                                        <div className="profile-info-value">
                                          <span>{user.login}</span>
                                        </div>
                                      </div>
                                      <div className="profile-info-row">
                                      </div>
                                      <div className="profile-info-row">
                                      </div>
                                    </div>
                                    <div className="hr hr-8 dotted" />
                                    <div className="profile-user-info">
                                      <div className="profile-info-row">
                                        <div className="profile-info-name"> Website </div>
                                        <div className="profile-info-value">
                                          <a href="#" target="_blank">www.twister.com</a>
                                        </div>
                                      </div>
                                      <div className="profile-info-row">
                                        <div className="profile-info-name">
                                          <i className="middle ace-icon fa fa-facebook-square bigger-150 blue" />
                                        </div>
                                        <div className="profile-info-value">
                                          <a href="facebook">Find me on Facebook</a>
                                        </div>
                                      </div>
                                      <div className="profile-info-row">
                                        <div className="profile-info-name">
                                          <i className="middle ace-icon fa fa-twitter-square bigger-150 light-blue" />
                                        </div>
                                        <div className="profile-info-value">
                                          <a href="twitter">Follow me on Twitter</a>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                        )
                    }
                })
            }
        </div>
    )
}

}

const mapStateToProps = (state) => {
    return {
        users: state.Users
    }
}
export default connect(mapStateToProps)(UserDetails)

