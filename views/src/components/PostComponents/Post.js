import React, {Component} from 'react';
import {Card} from 'react-bootstrap'

class Post extends Component {
    render(){
        var imagen = (imagen) => {
            return imagen?<Card.Img variant="bottom" src={imagen} />: <div/>;
        }
        return (
            <Card style = {{"marginBottom":"16px"}}>
                <Card.Body>{this.props.contenido}</Card.Body>
                {imagen(this.props.imagen)}
            </Card>
        );
    }
}
export default Post;