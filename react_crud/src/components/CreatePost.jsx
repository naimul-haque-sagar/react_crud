import React, { Component } from 'react'
import PostServices from '../services/PostServices';

export default class CreatePost extends Component {
    constructor(props){
        super(props)
        this.state = {
            operation : this.props.match.params.ops,
            postTitle: '',
            postBody: '',
            userId: ''
        };

        this.changePostTitleHandler = this.changePostTitleHandler.bind(this);
        this.changePostBodyHandler = this.changePostBodyHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    }

    componentDidMount(){
        if(this.state.operation === 'create'){
            return
        }else{
            PostServices.getPostById(this.state.operation).then(res => {
                console.log(res.data)
                let post= res.data;

                this.setState({
                    postTitle : post.title,
                    postBody: post.body,
                    userId: post.userId
                });
            });
        }
    }

    changePostTitleHandler = (event) =>{
        this.setState({ postTitle : event.target.value});
    }

    changePostBodyHandler = (event) => {
        this.setState({ postBody : event.target.value});
    }

    changeUserIdHandler = (event) =>{
        this.setState({ userId : event.target.value});
    }

    getTitle(){
        if(this.state.operation === 'create'){
            return <h1 className="text-center">Create Post</h1>
        }else{
            return <h1 className="text-center">Update Post</h1>
        }
    }

    saveOrUpdatePost = (event) => {
        event.preventDefault();
        let post= {postTitle: this.state.postTitle, postBody : this.state.postBody, userId: this.state.userId};
        console.log('save or update' + JSON.stringify(post))

        if(this.state.operation === "create"){
            PostServices.createPost(post).then(res => {
                console.log(res);
                this.props.history.push('/posts');
            });
        }else{
            let updatePost= {postId: this.state.operation, postTitle: this.state.postTitle, 
                postBody : this.state.postBody, userId: this.state.userId};

            PostServices.updatePost(updatePost,this.state.operation).then(res=>{
                console.log(res);
                this.props.history.push('/posts');
            });
        }
    }

    cancel(){
        this.props.history.push('/posts');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Post Title: </label>
                                            <input placeholder="Post Title" name="postTitle" className="form-control" 
                                                value={this.state.postTitle} onChange={this.changePostTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Post Body: </label>
                                            <input placeholder="Post Body" name="postBody" className="form-control" 
                                                value={this.state.postBody} onChange={this.changePostBodyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> User Id: </label>
                                            <input placeholder="User Id" name="userId" className="form-control" 
                                                value={this.state.userId} onChange={this.changeUserIdHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePost}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
