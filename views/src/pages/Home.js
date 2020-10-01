import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import {Col, Row} from 'react-bootstrap'
import Menu from '../components/HomeComponents/Menu'
class Home extends Component {
    render(){
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Row>
                    <Col xs lg="3">
                        <Menu></Menu>
                    </Col>
                    <Col xs lg="6">
                        Hola
                    </Col>
                    <Col xs lg="3">
                        Hola
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Home;