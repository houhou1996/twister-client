import React from 'react'
import {connect} from 'react-redux'

import Post from './Post';
class PostList extends React.Component{


    render (){
        return(
            <div>
                {
                    this.props.myPosts.map((post)=>{
                    if(post !== undefined){
                        return(
                            <div key = {post._id}>
                                {
                                   <Post 
                                   setProfile={this.props.setProfile} 
                                   post={post}></Post>
                                }
                            </div>
                        )
                            }
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