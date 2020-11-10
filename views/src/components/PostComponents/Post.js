import React, {Component} from 'react';
import {Card, Image} from 'react-bootstrap'
import testPerfil from '../../Images/testperfil.webp'
import { Link } from "react-router-dom";

class Post extends Component {
    render(){
        var imagen = (imagen) => {
            return imagen?<Card.Img variant="bottom" src={imagen} />: <div/>;
        }
        let url = "/perfil/" + this.props.idUsuario;
        return (
            <Card style = {{"marginBottom":"16px"}}>
                <div className = "inline">
                    <Link to = {url}  className="text-decoration-none">
                        <Image className="pt-1 pl-2" style={{"width": "8%"}} src={testPerfil} roundedCircle />
                        <h5 className = "d-inline mt-1 ml-1 mb-0 small">{this.props.usuario}</h5>
                    </Link>
                </div>
                <Card.Body className="pt-0 pl-2 pb-2">{this.props.contenido}</Card.Body>
                {imagen(this.props.imagen)}
            </Card>
        );
    }
}
export default Post;