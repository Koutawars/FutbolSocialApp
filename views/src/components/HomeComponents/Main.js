import React, {Component} from 'react';
import Post from '../PostComponents/Post'
import image from '../../Images/test.jpg'
class Main extends Component {
    render(){
        return (
            <div>
                <Post contenido = "Este es un post de prueba."></Post>
                <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                <Post contenido = "Este es un post de prueba." imagen={image}></Post>
                <Post contenido = "Este es un post de prueba." imagen={image}></Post>
            </div>
        );
    }
}
export default Main;