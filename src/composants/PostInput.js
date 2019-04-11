import React from 'react'
import "../style/postInput.css"
import {addPost} from '../actions/index'
import { connect } from 'react-redux'
class PostInput extends React.Component{
    constructor(props){
        super(props)
        this.state={content:""}
    }

    updateTextValue(evt){
        this.setState({content: evt.target.value})
        
    }

handleClick(cle,content){
    this.props.addPost(cle,content)
    this.setState({content: ""})
}
    render(){
        return(
            <div>
            <div className="col-xs-12 col-sm-7" id="new_status">

              <div className="col-xs-12" id="post_content">
              
                        <textarea className="col-xs-11" 
                        value={this.state.content}
                        onChange={this.updateTextValue.bind(this)}
                        placeholder="What's on your mind?"/>
            </div>
            
              <div className="col-xs-12" id="post_footer">
                <div className="col-xs-5">
                  <button className="btn btn-primary" onClick={()=>this.handleClick(this.props.cle,this.state.content)}>Post</button>
                </div>
              </div>
            </div>
            </div>
            
        )
    }

}
const mapStateToProps = (state) => {
    return {
        cle: state.currentUser.cle
    }
}
 const mapDispatchToProps = {
    addPost
}
export default connect(mapStateToProps,mapDispatchToProps)(PostInput)