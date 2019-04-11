import React from 'react'
import {connect} from 'react-redux'
import {normalize,schema} from 'normalizr'
import Post from './Post';
class PostList extends React.Component{


    render (){
        return(
            <div>
                {
                    this.props.myPosts.map((post,index)=>{
                        return(
                            <p key = {post._id}>
                                {
                                   <Post setIdUser={this.props.setIdUser} 
                                   setProfile={this.props.setProfile} 
                                   indice = {index}cle={this.props.cle} 
                                   post={post}></Post>
                                }
                            </p>
                        )
                    })
                }
            </div>
        )
    }


}
function mapStateToProps(state) {
    return {
        cle: state.currentUser.cle,
         myPosts : state.Posts,
         store: state
    }
}

export default connect(mapStateToProps,null)(PostList)