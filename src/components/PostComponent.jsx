import React, { Component } from 'react';
import PostServices from '../services/PostServices';

class PostComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            post: []
        }
        this.addPost = this.addPost.bind(this);
    }

    componentDidMount(){
        PostServices.getAllPosts().then( res => {
            console.log(res.data);
            this.setState({
                post : res.data
            });
        });
    }

    addPost(){
        this.props.history.push('/create-post');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Post List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPost}> Add Post</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Post Id</th>
                                    <th> Post Title</th>
                                    <th> Post Body</th>
                                    <th> Post UserId</th>
                                    <th> Buttons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.post.map(
                                        post => 
                                        <tr key = {post.id}>
                                             <td> {post.id} </td>   
                                             <td> {post.title}</td>
                                             <td> {post.body}</td>
                                             <td> {post.userId}</td>
                                             <td>
                                                 <button  onClick={ () => this.editPost(post.id)} className="btn btn-info">Update </button>
                                                 <button  onClick={ () => this.deletePost(post.id)} className="btn btn-danger">Delete </button>
                                                 <button  onClick={ () => this.viewPost(post.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        );
    }
}

export default PostComponent;