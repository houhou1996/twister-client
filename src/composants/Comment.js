import React from 'react'

class Comment extends React.Component{
    constructor(props){
        super(props)
    }

    
    
    
    render(){
            return(
                <div>
                    <p>
                        {
                            this.props.comment.text
                        }
                    </p>
                </div>
            )
    }
}
export default Comment