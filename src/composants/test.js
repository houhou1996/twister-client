
            <div className="container bootstrap snippet">
              <div className="col-sm-10">
                <div className="panel panel-white post panel-shadow">
                  <div className="post-heading">
                    <div className="pull-left image">
                      <img src="https://bootdey.com/img/Content/user_1.jpg" className="img-circle avatar" alt="user profile" />
                    </div>
                    
                    <div className="pull-left meta">
                      <div className="title h5">
                        <a onClick={()=>this.handleClick(this.props.post.id_user)}>
                          <b>
                          {this.props.post.name}
                          </b>
                        </a>
                      </div>
                    </div>
            
                  </div> 
                  
                  
                  <div className="post-description"> 
                
                <button type="Submit" onClick={this.supprimer.bind(this,this.props.post._id)}className="text-muted time">delete</button>
            
                    <h3>
                      {
                        this.props.post.text
                      }
                    </h3>
                    <div className="stats">
                    <p>
                        <Like post={this.props.post}/>
                    </p>
                
                    </div>
                  </div>
                  <div className="post-footer">
                    <div className="input-group"> 
                      <CommentInput indice={this.props.indice} post={this.props.post}>

                      </CommentInput>

                    </div>
                    <div>
                      <CommentList setProfile={this.props.setProfile} post ={this.props.post}>

                      </CommentList>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

          )
      }else{
          return(
            <div className="container bootstrap snippet">
              <div className="col-sm-10">
                <div className="panel panel-white post panel-shadow">
                  <div className="post-heading">
                    <div className="pull-left image">
                      <img src="https://bootdey.com/img/Content/user_1.jpg" className="img-circle avatar" alt="user profile image" />
                    </div>
        
                    <div className="pull-left meta">
                      <div className="title h5">
                        <a onClick={()=>this.handleClick(this.props.post.id_user)}>
                          <b>
                          {this.props.post.name}
                          </b>
                        </a>
                      </div>
                    </div>
            
                  </div> 
                  
                  
                  <div className="post-description"> 
                    <h3>
                      {
                        this.props.post.text
                      }
                    </h3>
                    <div className="stats">
                    <p>
                        <Like post={this.props.post}/>
                      </p>
                      
                    </div>
                  </div>
                  <div className="post-footer">
                    <div className="input-group"> 
                      <CommentInput post={this.props.post}>

                      </CommentInput>

                    </div>
                    <div>
                      <CommentList setProfile={this.props.setProfile} post ={this.props.post}>

                      </CommentList>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>