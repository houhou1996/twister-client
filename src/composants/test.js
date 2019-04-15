
      if( this.props.currentProfile === this.props.currentUser){
        return(
          <div id="user-profile-2" className="user-profile">
             
             
                    <div className="tabbable">
                      
                      <div className="tab-content no-border padding-24">
                        <div id="home" className="tab-pane in active">
                          <div className="row">
                            <div className="col-xs-12 col-sm-3 center">
                              <span className="profile-picture">
                                <img className="editable img-responsive" alt=" Avatar" id="avatar2" src="http://bootdey.com/img/Content/avatar/avatar6.png" />
                              </span>
                              <div className="space space-4" />
                        
                            </div>{/* /.col */}


                                      <UserDetails idUser={this.props.idUser}/>





                            </div>{/* /.col */}
                          </div>{/* /.row */}
                          </div>
                          </div>
                          <PostList 
                          setIdUser={this.props.setIdUser} 
                          setProfile={this.props.setProfile} 
                           cle ={this.props.cle}>
                              
                          </PostList>
                      </div>
                          
                          
                 
              
      )
}else{
if( this.areFriends(this.props.currentUser,this.props.currentProfile)){
  return(
    <div id="user-profile-2" className="user-profile">
  
           <div className="tabbable">
             
             <div className="tab-content no-border padding-24">
               <div id="home" className="tab-pane in active">
                 <div className="row">
                   <div className="col-xs-12 col-sm-3 center">
                     <span className="profile-picture">
                       <img className="editable img-responsive" alt=" Avatar" id="avatar2" src="http://bootdey.com/img/Content/avatar/avatar6.png" />
                     </span>
                     <div className="space space-4" />
                     <a href="#" className="btn btn-sm btn-block btn-success">
                       <i className="ace-icon fa fa-plus-circle bigger-120" />
                       <span onClick={this.deleteClick.bind(this)}
                       className="bigger-110">delete friend</span>
                     </a>
                    
                   </div>{/* /.col */}


                             <UserDetails idUser={this.props.idUser}/>





                   </div>{/* /.col */}
                 </div>{/* /.row */}
                 </div>
                 </div>
                 <PostList 
                 setIdUser={this.props.setIdUser} 
                 setProfile={this.props.setProfile} 
                  cle ={this.props.cle}>
                     
                 </PostList>
             </div>
                 
                 
        
     
)}
else{

return(
  <div id="user-profile-2" className="user-profile">
  
         <div className="tabbable">
           <div className="tab-content no-border padding-24">
             <div id="home" className="tab-pane in active">
               <div className="row">
                 <div className="col-xs-12 col-sm-3 center">
                   <span className="profile-picture">
                     <img className="editable img-responsive" alt=" Avatar" id="avatar2" src="http://bootdey.com/img/Content/avatar/avatar6.png" />
                   </span>
                   <div className="space space-4" />
                   <a href="#" className="btn btn-sm btn-block btn-success">
                     <i className="ace-icon fa fa-plus-circle bigger-120" />
                     <span onClick={this.handleClick.bind(this)}
                     className="bigger-110">Add as a friend</span>
                   </a>
                  
                 </div>{/* /.col */}


                           <UserDetails idUser={this.props.idUser}/>





                 </div>{/* /.col */}
               </div>{/* /.row */}
               </div>
               </div>
               <PostList 

               setProfile={this.props.setProfile} 
                />
           </div>
               
               
      
   
)
}

}