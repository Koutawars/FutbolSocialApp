import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import MakePost from '../PostComponents/MakePost';
import Information from './Information'
import Posts from '../PostComponents/Posts'

import CONSTANT from '../../helpers/constant';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';
class Main extends Component {
    constructor(){
        super();
        this.state = {
            postsArray: [],
            usuario: {
                nombres: null,
                apellidos:null,
                imagen:null
            }
        }
    }
    componentDidUpdate(prevProps) {
        if(this.props !== prevProps){ 
            let url = CONSTANT.URL + "/api/user/getPostUsuario/" + this.props.id;
            const jwt = getJwt();
            axios.get(url, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            }).then(res => {
                if (res.data.usuario){
                    let postsArray = res.data.usuario.Posts;
                    postsArray.map(post => {
                        post.idUsuario = res.data.usuario.id;
                        post.usuario = res.data.usuario.nombres + " " + res.data.usuario.apellidos;
                        return post;
                    })
                    res.data.usuario.Posts = null;
                    let usuario = res.data.usuario;
                    this.setState({
                        ...this.state,
                        postsArray,
                        usuario
                    })
                }
            });
        }
    }
    render(){
        return (
            <div>
                <Row>
                    <Col>
                        <Information {...this.state.usuario} />
                        <MakePost/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Posts posts = {this.state.postsArray} />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Main;