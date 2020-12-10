import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button, Modal } from 'react-bootstrap'
import { AiOutlineLogout } from "react-icons/ai";
import { withRouter } from 'react-router-dom'
import { AiFillPlusCircle } from "react-icons/ai";
import axios from 'axios';
import { getJwt } from '../helpers/jwt';
import CONSTANT from '../helpers/constant'

class NavbarComp extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            saldo: null
        }
    }
    logOut= (e) => {
        e.preventDefault();
        localStorage.clear();
        this.props.history.push("/login");
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    buscar= (e) => {
        e.preventDefault();
        let textSearch = document.querySelector("#textSearch").value;
        this.props.history.push("/search?q="+ textSearch);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.saldo){
            console.log(this.state.saldo);
            let url = CONSTANT.URL + "/api/admin/field/add";
            const jwt = getJwt();
            axios.post(url, this.state,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwt}`
                    }
                })
            .then(res => {
                console.log("DATA: ", res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }
    render(){
        let saldo = this.props.saldo? this.props.saldo: 0;
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
        return (
            <Navbar sticky="top" bg="light" expand="lg">
                <Navbar.Brand href="/">Red social futbol</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <h6>Saldo:<span> ${saldo}</span></h6>
                        <AiFillPlusCircle onClick={handleShow} style={{cursor: "pointer"}} className="mt-1 mr-1 text-primary"/>
                    </Nav>
                    <Form onSubmit={this.buscar} inline>
                        <FormControl id="textSearch" type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button className="mr-sm-2" onClick={this.buscar} variant="outline-success">Buscar</Button>
                        <Nav.Link className="text-danger" onClick = {this.logOut}><AiOutlineLogout/></Nav.Link>
                    </Form>
                </Navbar.Collapse>
                <Modal show={this.state.show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Recargar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="saldo">
                            <Form.Label>Saldo</Form.Label>
                            <Form.Control onChange = {this.handleChange} type="number" placeholder="Ingrese el valor a recargar" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                        </Button>
                        <Button type="submit" variant="primary" onClick={this.handleSubmit}>
                            Guardar cambios
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Navbar>
        );
    }
}
export default withRouter(NavbarComp);