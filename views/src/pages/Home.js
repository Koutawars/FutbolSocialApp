import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import {Col, Row} from 'react-bootstrap'
import Menu from '../components/HomeComponents/Menu'
import Main from '../components/HomeComponents/Main'
class Home extends Component {
    render(){
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Row>
                    <Col className="lex-xl-nowrap" xs="3" md="3" >
                        <Menu></Menu>
                    </Col>
                    <Col xs="9" md="5">
                        <Main></Main>
                    </Col>
                    <Col xs="0" md="4">
                        Hola
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Home;