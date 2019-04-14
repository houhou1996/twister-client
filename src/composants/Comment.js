import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/comment.css'
import {connect} from 'react-redux'
import {deleteComment,switchProfile,switchProfilePost} from '../actions/index'
class Comment extends React.Component{
    constructor(props){
        super(props)
    }

    
    deleteClick(idPost,idComment){
        this.props.deleteComment(idPost,idComment)

    }
    handleClick(id){
    this.props.switchProfile(id)
    this.props.switchProfilePost(id)
    this.props.setProfile(id)

    }
    
    render(){
        
            return(
                <div>
                    {
                        this.props.comments.map(comment=>{
                            if(comment.id_post === this.props.post){
                                if(this.props.idUser === comment.id_user){
                                return(
                                    <div className="card">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-2">
                                          <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
                                        </div>
                                        <div className="col-md-10">
                                          <p>
                                            <a onClick={()=>this.handleClick(comment.id_user)} className="float-left" href="#"><strong>{comment.name}</strong></a>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                          </p>
                                          <div className="clearfix" />
                                          <p>{comment.text}</p>
                                          <div class="clearfix"></div>

                                                <p>
                                                    <a  onClick={()=>this.deleteClick(this.props.post,comment._id)}className="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Delete</a>
                                                   
                                            </p>
                                            </div>

                                        </div>
                                      </div>
                                    </div>
                                )
                            }else{
                                return(
                                    <div className="card">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-2">
                                          <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
                                        </div>
                                        <div className="col-md-10">
                                          <p>
                                            <a onClick={()=>this.handleClick(comment.id_user)} className="float-left" href="#"><strong>{comment.name}</strong></a>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                          </p>
                                          <div className="clearfix" />
                                          <p>{comment.text}</p>
                                          <div class="clearfix"></div>
                                            </div>

                                        </div>
                                      </div>
                                    </div>
                                )
                            }
                        }
                        })
                    }
                </div>
            )
    }
}
const mapDispatchToProps = {
    deleteComment,
    switchProfile,
    switchProfilePost
}
const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        idUser: state.currentUser.idUser
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Comment)