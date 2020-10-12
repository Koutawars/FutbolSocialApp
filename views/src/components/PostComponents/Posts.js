import React, {Component} from 'react';
import Post from './Post'

class Posts extends Component {
    render(){
        let {posts} = this.props;
        let listPosts = posts.map((post) => 
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