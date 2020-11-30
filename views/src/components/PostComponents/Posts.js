import React, {Component} from 'react';
import Post from './Post'
import getUsuario from '../../helpers/usuario';

class Posts extends Component {
    constructor(){
        super();
        this.state = {
            usuario: getUsuario()
        }
    }
    render(){
        let {posts} = this.props;
        let listPosts = posts.map((post) => 
            <Post key = {post.id} {...post} myId = {this.state.usuario.id} updateUsuario = {this.props.updateUsuario}/>
        );
        return(
            <React.Fragment>
                {listPosts}
            </React.Fragment>
        );
    }
}
export default Posts;