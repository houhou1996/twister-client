import React from 'react'
import { connect } from 'react-redux'
import {afficheFriends} from '../reducers/AfficheFriends'
import {bindActionCreators} from 'redux'
class FriendList extends React.Component{

    render (){
        return(
            <div>
                {
                    this.props.afficheFriends(this.props.cle).bind(this)
                }
            </div>
        )
    }


}
function  mapStateToProps(state) {    
    return {
        
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({afficheFriends:afficheFriends},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendList)