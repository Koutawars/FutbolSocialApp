import React, {Component} from 'react';
import {Row, Col, Spinner} from 'react-bootstrap'
import Posts from '../PostComponents/Posts'

import CONSTANT from '../../helpers/constant';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';
class Main extends Component {
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            postsArray: [],
            estado: 0
        }
    }
    componentDidMount(){
        this._isMounted = true;
    }
    componentDidUpdate(prevProps) {
        if(this.props !== prevProps){ 
            let url = CONSTANT.URL + "/api/user/getPostAllUsers";
            const jwt = getJwt();
            axios.get(url, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            }).then(res => {
                if(this._isMounted){
                    let postsArray = res.data.result;
                    if(postsArray.lenght !== 0){
                        postsArray.map(post => {
                            post.idUsuario = post.id;
                            post.usuario = post.Usuario.nombres + " " + post.Usuario.apellidos;
                            return post;
                        })
                        this.setState({
                            ...this.state,
                            postsArray,
                            estado:1
                        });
                    } else {
                        this.setState({
                            estado: 2
                        })
                    }
                }
            });
        }
    }
    render(){
        let posts = <div />;
        if(this.state.estado === 0) {
            posts = <div className="text-center text-primary mt-5"><Spinner animation="border" /></div>;
        }else if(this.state.estado === 1) {
            posts = <Posts posts = {this.state.postsArray} />;
        }else {
            posts = <div>No hay posts</div>;
        }
        return (
            <div>
                <Row>
                    <Col>
                        {posts}
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Main;