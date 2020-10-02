import React, {Component} from 'react';
import Post from '../PostComponents/Post'
import image from '../../Images/test.jpg'
import {Row, Col} from 'react-bootstrap'
import MakePost from '../PostComponents/MakePost'
class Main extends Component {
    render(){
        return (
            <div>
                <Row>
                    <Col>
                        <MakePost/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Post contenido = "Este es un post de prueba."></Post>
                        <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                        <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                        <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                        <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                        <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                        <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Main;