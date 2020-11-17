import React, {Component} from 'react';
import {Card, Image} from 'react-bootstrap'
import testPerfil from '../../Images/testperfil.webp'
import { Link } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";

import Comments from './Comments';
import MakeComment from './MakeComment';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            showComment: 0,
            comments: []
        }
    }
    getComments = (e) => {
        this.setState({
            showComment: 1
        });
        // cargar comentarios
        let comments = [
            {id:1, content: "Hola.", usuario: "Anderson Hernandez", idUsuario:2},
            {id:2, content: "Hi.", usuario: "Carlos Campo", idUsuario:1},
        ]
        this.setState({
            comments,
            showComment: 2
        })
    }

    render(){
        var imagen = (imagen) => {
            return imagen?<Card.Img variant="bottom" src={imagen} />: <div/>;
        }
        let url = "/perfil/" + this.props.idUsuario;
        let commentsJsx = <div></div>;
        if(this.state.showComment === 0) {
            commentsJsx = (
            <div onClick={this.getComments} className="text-center text-primary" style = {{"fontSize":"20px", "cursor":"pointer"}}>
                <BiCommentDetail />
            </div>);
        }else if(this.state.showComment === 1){
            commentsJsx = (
            <div className="my-1"> 
                <div className="spinner-grow text-primary mx-auto d-block" role="status">
                <span className="sr-only">Cargando...</span>
                </div>
            </div>);
        } else {
            commentsJsx = (
            <React.Fragment>
                <Comments comments={this.state.comments}/>
                <MakeComment imagen={testPerfil} idPost = {this.props.id}/>
            </React.Fragment>);
        } 
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
                {commentsJsx}
            </Card>
        );
    }
}
export default Post;