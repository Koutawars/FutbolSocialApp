import React, {Component} from 'react';
import image from '../../Images/test.jpg'
import {Row, Col} from 'react-bootstrap'
import MakePost from '../PostComponents/MakePost'
import Posts from '../PostComponents/Posts'
class Main extends Component {
    render(){
        var postsArray = [
            {id:1, contenido: "Este es un post de prueba."},
            {id:2, contenido: "Este es un post de prueba.", imagen:image},
            {id:3, contenido: "Este es un post de prueba.", imagen:image},
            {id:4, contenido: "Este es un post de prueba.", imagen:image},
            {id:5, contenido: "Este es un post de prueba."},
            {id:6, contenido: "Este es un post de prueba."},
            {id:7, contenido: "Este es un post de prueba.", imagen:image}
        ]
        return (
            <div>
                <Row>
                    <Col>
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