import React, { Component } from 'react'
import PostServices from '../services/PostServices'

export default class ViewPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            operation: this.props.match.params.ops,
            post: {}
        }
    }

    componentDidMount(){
        PostServices.getPostById(this.state.operation).then(
            res=> {
                this.setState({
                    post: res.data
                })
            }
        );
    }

    render() {
        return (
            <div>
                 <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Post Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Post Title: </label>
                            <div> { this.state.post.title }</div>
                        </div>
                        <div className = "row">
                            <label> Post Body: </label>
                            <div> { this.state.post.body }</div>
                        </div>
                        <div className = "row">
                            <label> Post User ID: </label>
                            <div> { this.state.post.id }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
