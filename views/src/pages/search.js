import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import {Col, Row} from 'react-bootstrap'
import Menu from '../components/Menu'
import Main from '../components/SearchComponents/Main'
class Search extends Component {
    render(){
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Row>
                    <Col className="lex-xl-nowrap" xs ="2" sm="1" md="1" lg="3" >
                        <Menu></Menu>
                    </Col>
                    <Col xs="10" sm="8" md="7" lg ="5">
                        <Main/>
                    </Col>
                    <Col xs="0" sm="3" md="4" lg="4">   
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
export default Search;