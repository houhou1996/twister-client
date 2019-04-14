import React from 'react'
import Comment from './Comment'
import {connect} from 'react-redux'
class CommentList extends React.Component{

    

    render(){
        return(
            <div>
                {
                    <Comment setProfile={this.props.setProfile} post = {this.props.post._id}/>
                    
                }
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        posts: state.Posts
    }
}

export default connect(mapStateToProps,null)(CommentList)