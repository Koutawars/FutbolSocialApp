import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'
import MakePost from '../PostComponents/MakePost';
import Information from './Information'
import Posts from '../PostComponents/Posts'

import CONSTANT from '../../helpers/constant';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';
class Main extends Component {
    _isMounted = false;
    constructor(){
        super();
        this.state = {
            postsArray: [],
            usuario: {
                nombres: null,
                apellidos:null,
                imagen:null
            },
            update: false
        }
    }
    componentDidMount(){
        this._isMounted = true;
    }
    updatePost = () => {
        this.setState({
            update: true
        })
    }
    getPostUsuario = () => {
        let url = CONSTANT.URL + "/api/user/getPostUsuario/" + this.props.id;
        const jwt = getJwt();
        axios.get(url, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        }).then(res => {
            if(this._isMounted){
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
                        usuario,
                        update:false
                    })
                }
            }
        });
    }
    componentDidUpdate(prevProps) {
        if(this.props !== prevProps || this.state.update){ 
            this.getPostUsuario();
        }
    }
    render(){
        let showBotton = this.state.usuario.id !== this.props.data.id;
        let makePost = showBotton?<div/>:<MakePost updatePost = {this.updatePost}/>;
        return (
            <div>
                <Row>
                    <Col>
                        <Information {...this.state.usuario} showBotton = {showBotton} />
                        {makePost}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Posts posts = {this.state.postsArray} updateUsuario = {this.getPostUsuario}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Main;