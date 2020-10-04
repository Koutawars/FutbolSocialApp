import React, {Component} from 'react';
import Post from './Post'

class Posts extends Component {
    render(){
        var {posts} = this.props;
        var listPosts = posts.map((post) => 
            <Post key = {post.id} {...post} />
        );
        return(
            <React.Fragment>
                {listPosts}
            </React.Fragment>
        );
    }
}
export default Posts;