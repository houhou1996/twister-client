import React from 'react'
import {connect} from 'react-redux'
class PostList extends React.Component{

    render (){
        return(
            <div>
                <ul className ="col-md-4">
                    {
                        this.props.posts.map((post)=>{
                            <li className="list-group-item" key={post.id}>
                                {
                                    post.text
                                }
                            </li>
                        })
                    }

                </ul>
            </div>
        )
    }


}
function mapStateToProps(state) {
    return {
         myPosts : state.posts
    }
}
export default connect(mapStateToProps)(PostList)