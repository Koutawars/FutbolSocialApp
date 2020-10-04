import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import testPerfil from '../../Images/testperfil.webp'
import { BsFillPersonFill } from "react-icons/bs";

class Information extends Component {
    render(){
        return(
            <Row className = "py-2">
                <Col xs = "3">
                    <Image src={testPerfil} roundedCircle fluid  />
                </Col>
                <Col xs = "9">
                    <h4 className = "pt-4"><span className="text-primary"><BsFillPersonFill/></span> {this.props.nombres} {this.props.apellidos}</h4>
                </Col>
            </Row>
        );
    }
}
export default Information;