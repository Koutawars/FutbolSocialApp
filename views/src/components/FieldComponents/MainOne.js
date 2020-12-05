import React, {Component} from 'react';
import {Row, Image, Col} from 'react-bootstrap'
import CONSTANT from '../../helpers/constant'
import {withRouter} from "react-router-dom"

import { getJwt } from '../../helpers/jwt';
import axios from 'axios';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            id: null,
            descrip: "",
            imagen: null,
            nombre: "",
            valor_hora: null
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let url = CONSTANT.URL + "/api/user/getField/" + id;
        const jwt = getJwt();
        axios.get(url, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(res => {
            this.setState(res.data.field);
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        });
    }
    render(){
        return(
            <>
                <Row>
                    <Col xs="7">
                        <Row>
                            <Image style = {{width:"100%"}} src={this.state.imagen}/>
                        </Row>
                        <Row>
                            <figure>
                                <h4>{this.state.nombre}</h4>
                                <h6>Valor: ${this.state.valor_hora}/hora</h6>
                                <blockquote >
                                    {this.state.descrip}
                                </blockquote>
                            </figure>
                        </Row>
                    </Col>
                    <Col xs="5">
                    </Col>
                </Row>
            </>
        );
    }
}

export default withRouter(Main);