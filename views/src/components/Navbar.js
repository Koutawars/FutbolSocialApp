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
            saldo: null,
            saldoActual: null
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
    componentDidMount() {
        let usuario = JSON.parse(localStorage.getItem('usuario'));
        let {saldo} = usuario;
        this.setState({
            saldoActual:saldo
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.saldo){
            let url = CONSTANT.URL + "/api/user/recargar";
            const jwt = getJwt();
            axios.post(url, {saldo: this.state.saldo},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwt}`
                    }
                })
            .then(res => {
                console.log("DATA: ", res.data);
                let saldo = res.data.usuario.saldo;
                let usuario = JSON.parse(localStorage.getItem('usuario'));
                usuario.saldo = saldo;
                usuario = JSON.stringify(usuario);
                localStorage.setItem('usuario', usuario);
                this.setState({
                    saldoActual:saldo,
                    show: false
                });
            }).catch(err => {
                console.log(err);
            });
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.saldoActual !== this.props.saldoActual){
            this.setState({
                saldoActual: this.props.saldoActual
            })
        }
    }
    render(){
        let saldo = this.state.saldoActual != null ? this.state.saldoActual: this.props.saldo;
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