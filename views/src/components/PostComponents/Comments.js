import React, {Component} from 'react';
import Comment from './Comment'

class Posts extends Component {
    render(){
        let {comments} = this.props;
        let listComments = comments.map((comment) => 
            <Comment key = {comment.id} {...comment} />
        );
        return(
            <React.Fragment>
                {listComments}
            </React.Fragment>
        );
    }
}
export default Posts;