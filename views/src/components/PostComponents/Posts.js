import React, {Component} from 'react';
import Post from './Post'
import usuario from '../../helpers/usuario';

class Posts extends Component {
    render(){
        let {posts} = this.props;
        let listPosts = posts.map((post) => 
            <Post key = {post.id} {...post} myId = {usuario.id} updateUsuario = {this.props.updateUsuario}/>
        );
        return(
            <React.Fragment>
                {listPosts}
            </React.Fragment>
        );
    }
}
export default Posts;