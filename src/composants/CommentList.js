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
                
            </div>
        )
    }

}

export default (CommentList)