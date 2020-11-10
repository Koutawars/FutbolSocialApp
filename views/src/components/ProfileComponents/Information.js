import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import testPerfil from '../../Images/testperfil.webp'
import { BsFillPersonFill } from "react-icons/bs";
import {GrDocumentText} from "react-icons/gr"

class Information extends Component {
    render(){
        let imagen = this.props.imagen ? this.props.imagen:testPerfil;
        return(
            <Row className = "py-2">
                <Col xs = "3">
                    <Image src={testPerfil} roundedCircle fluid  />
                </Col>
                <Col xs = "9">
                    <h4 className = "pt-4"><span className="text-primary"><BsFillPersonFill/></span> {this.props.nombres} {this.props.apellidos}</h4>
                    <h5><GrDocumentText></GrDocumentText> {this.props.cedula}</h5>
                </Col>
            </Row>
        );
    }
}
export default Information;