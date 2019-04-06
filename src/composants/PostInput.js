import React from 'react'
import "../style/postInput.css"
class PostInput extends React.Component{


    render(){
        return(
            <div className="text">
                <textarea rows="4" cols="100" placeholder="What's in your mind"></textarea>
                <div>
                <button className="btn">Post</button>
                </div>
            </div>
            
        )
    }
}
export default PostInput