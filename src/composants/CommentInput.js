import React from 'react'
import "../style/post.css"
import {connect} from 'react-redux'
import {addComment} from '../actions/index'
class CommentInput extends React.Component{
    constructor(props){
        super(props)
        this.state={content:""}
    }

    updateTextValue = (evt) =>{
        this.setState({content: evt.target.value})
        
    }
    pressEnter = (e)=>{
        if(e.key==='Enter'){
            this.handleClick()
        }
    }
handleClick =() =>{

    this.props.addComment(this.props.cle,this.props.post._id,this.state.content)
    this.setState({content: ""})

}
    render(){
        return(
            
            <div  class="input-group"> 
            <input value={this.state.content} onChange={this.updateTextValue} onKeyPress={this.pressEnter} className="form-control" placeholder="Add a comment" type="text"/>
            
        </div>
        )
    }



}
const mapStateToProps = (state) => {
    return{
        cle: state.currentUser.cle
    }
}
const mapDispatchToProps={
    addComment
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentInput)