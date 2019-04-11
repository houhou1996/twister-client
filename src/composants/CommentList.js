import React from 'react'
import Comment from './Comment'
class CommentList extends React.Component{
    constructor(props){
        super(props)
        this.state={display:false}
    }

    setDisplay(){
        this.setState({display:true})
    }
    

    render(){
        return(
            <div>
                {
                    this.props.post.comments.map(comment=>{
                        return(
                            <p key = {comment._id}>
                                    <Comment comment={comment}>

                                    </Comment>
                            </p>
                        )
                    })
                }
            </div>
        )
    }

}

export default (CommentList)