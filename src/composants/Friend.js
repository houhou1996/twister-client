import React from 'react'
import {connect} from 'react-redux'
import {switchProfile} from '../actions/index'
import {switchProfilePost} from '../actions/index'

 class Friend extends React.Component{

        constructor(props){
            super(props)
        }
    handleClick(id){
        console.log(id)
        this.props.switchProfile(id)
    this.props.switchProfilePost(id)
    this.props.setProfile(id)
    }
    render(){
        return (
            <div>
            <hr />
            <div className="container bootstrap snippet">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-box no-header clearfix">
                    <div className="main-box-body clearfix">
                      <div className="table-responsive">
                        <table className="table user-list">
                          <thead>
                            <tr>
                              <th><span>Friend</span></th>
                              <th><span>Created</span></th>
                              <th className="text-center"><span>Status</span></th>
                              <th><span>Email</span></th>
                              <th>&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img src="https://bootdey.com/img/Content/user_1.jpg" alt />
                                <a onClick={()=>this.handleClick(this.props.friend.idFriend)}
                                href="#" className="user-link">{this.props.friend.name}</a>
                              </td>
                              <td>{this.props.friend.date}</td>
                              <td className="text-center">
                                <span className="label label-default">Inactif</span>
                              </td>
                              <td>
                                <a href="#">{this.props.friend.login}</a>
                              </td>
                              <td style={{width: '20%'}}>
                                <a href="#" className="table-link">
                                  <span className="fa-stack">
                                    <i className="fa fa-square fa-stack-2x" />
                                    <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                                  </span>
                                </a>
                                <a href="#" className="table-link">
                                  <span className="fa-stack">
                                    <i className="fa fa-square fa-stack-2x" />
                                    <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                                  </span>
                                </a>
                                <a href="#" className="table-link danger">
                                  <span className="fa-stack">
                                    <i className="fa fa-square fa-stack-2x" />
                                    <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                                  </span>
                                </a>
                              </td>
                            </tr>
                            <tr>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
    
}

const mapDispatchToProps = {
    switchProfile,
    switchProfilePost

}

export default connect(null,mapDispatchToProps)( Friend)