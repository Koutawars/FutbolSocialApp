import React, {Component} from 'react';
import {Image, Col, Row} from 'react-bootstrap'
import testPerfil from '../../Images/testperfil.webp'
import { Link } from "react-router-dom";
class Comment extends Component {
    render(){
        let url = "/perfil/" + this.props.idUsuario;
        return (
            <Row>
                <Col xs="1">
                    <Link to = {url}  className="text-decoration-none">
                        <Image className="pt-1 pl-2" style={{"width": "270%"}} src={testPerfil} roundedCircle />
                    </Link>
                </Col>
                <Col xs="11">
                    <span>
                        <Link to = {url}  className="text-decoration-none">
                            <h5 className = "mt-1 ml-1 mb-0 small">{this.props.usuario}</h5>
                        </Link>
                        <span className="small">{this.props.content}</span>
                    </span>
                </Col>
            </Row>
        );
    }
}
export default Comment;