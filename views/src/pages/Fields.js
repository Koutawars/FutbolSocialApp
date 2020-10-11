import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import {Col, Row} from 'react-bootstrap'
import Menu from '../components/Menu'
import Main from '../components/FieldComponents/Main'
class Fields extends Component {
    render(){
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Row>
                    <Col className="lex-xl-nowrap" xs ="2" sm="1" md="1" lg="3" >
                        <Menu></Menu>
                    </Col>
                    <Col xs="10" sm="11" md="11" lg ="9">
                        <Main {...this.props} />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}


export default Fields;