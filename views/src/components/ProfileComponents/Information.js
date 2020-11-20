import React, {Component} from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
import testPerfil from '../../Images/testperfil.webp'
import { BsFillPersonFill } from "react-icons/bs";
import {GrDocumentText} from "react-icons/gr"

import { getJwt } from '../../helpers/jwt'
import axios from 'axios';
import CONSTANT from '../../helpers/constant'
class Information extends Component {
    constructor(props){
        super(props);
        this.state = {
            seguir:null
        }
        this.buttonFollow = React.createRef();
    }
    followAsk = () => {

    }
    follow = () => {
        let url = CONSTANT.URL + "/api/user/seguirUsuario";
        const jwt = getJwt();
        axios.post(url, {
            id: this.props.id
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        }).then(res => {
            if(res.status === 200) {
                this.setState({
                    seguir:2
                })
            }
        });
    }
    render(){
        let imagen = this.props.imagen ? this.props.imagen:testPerfil;
        let button = <div></div>;
        if(this.props.showBotton && this.props.id) {
            if(this.state.seguir) {
                if(this.state.seguir === 1) {
                    button = <Button onClick={this.follow} className="text-white" variant="primary">Seguir</Button>;
                }else {
                    button = <Button variant="outline-secondary">Dejar de seguir</Button>;
                }
            }else {
                this.followAsk();
            }
        }

        return(
            <Row className = "py-2">
                <Col xs = "3">
                    <Image src={imagen} roundedCircle fluid  />
                </Col>
                <Col xs = "9">
                    <h4 className = "pt-4"><span className="text-primary"><BsFillPersonFill/></span> {this.props.nombres} {this.props.apellidos}</h4>
                    <h5><GrDocumentText></GrDocumentText> {button}</h5>
                </Col>
            </Row>
        );
    }
}
export default Information;