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
handleClick =() =>{

    this.props.addComment(this.props.cle,this.props.post._id,this.state.content,this.props.indice)

}
    render(){
        return(
            <div>
                
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