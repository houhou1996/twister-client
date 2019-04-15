import React from 'react'
import '../style/main.css'
import {searchPosts} from '../actions/index'
import {connect} from 'react-redux'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={content:""}
    }
    handleChange=(event)=>{
        this.setState({content: event.target.value})
    }
    handleSearch=()=>{
        this.props.searchPosts(this.state.content)
        this.setState({content: ""})
  
    }
    search=(e)=>{
        if(e.key==='Enter'){
            this.handleSearch()
        }
       
    }

    render(){
        return (
            
                    
            <input value={this.state.content}onKeyPress={this.search} onChange={this.handleChange} type="text" placeholder="Search.." />

            
        
        )
    }
}
const mapDispatchToProps =  {
    searchPosts
}
export default connect(null,mapDispatchToProps)(Search)