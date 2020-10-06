import React, {Component} from 'react';
import image from '../../Images/test.jpg'
import {Row, Col} from 'react-bootstrap'
import MakePost from '../PostComponents/MakePost';
import Information from './Information'
import Posts from '../PostComponents/Posts'
class Main extends Component {
    render(){
        var postsArray = [
            {id:1, contenido: "Este es un post de prueba de perfil."},
            {id:2, contenido: "Este es un post de prueba de perfil.", imagen:image},
            {id:3, contenido: "Este es un post de prueba de perfil.", imagen:image},
            {id:4, contenido: "Este es un post de prueba de perfil.", imagen:image},
            {id:5, contenido: "Este es un post de prueba de perfil."},
            {id:6, contenido: "Este es un post de prueba de perfil."},
            {id:7, contenido: "Este es un post de prueba de perfil.", imagen:image}
        ]
        return (
            <div>
                <Row>
                    <Col>
                        <Information nombres="Carlos" apellidos="Campo"/>
                        <MakePost/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Posts posts = {postsArray} />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Main;