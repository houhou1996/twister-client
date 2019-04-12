import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/comment.css'
import {connect} from 'react-redux'
class Comment extends React.Component{
    constructor(props){
        super(props)
    }

    
    
    
    render(){
            return(
                <div>
                    {
                        this.props.comments.map(comment=>{
                            if(comment.id_post === this.props.post){
                                return(
                                    <div className="card">
                                    <div className="card-body">
                                      <div className="row">
                                        <div className="col-md-2">
                                          <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
                                        </div>
                                        <div className="col-md-10">
                                          <p>
                                            <a className="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>{comment.name}</strong></a>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                            <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                          </p>
                                          <div className="clearfix" />
                                          <p>{comment.text}</p>
                                          <div class="clearfix"></div>

                                                <p>
                                                    <a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Delete</a>
                                                   
                                            </p>
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
        comments: state.comments
    }
}
export default connect(mapStateToProps,null)(Comment)