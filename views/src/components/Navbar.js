import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { AiOutlineLogout } from "react-icons/ai";
import { withRouter } from 'react-router-dom'
import { AiFillPlusCircle } from "react-icons/ai";

class NavbarComp extends Component {
    logOut= (e) => {
        e.preventDefault();
        localStorage.clear();
        this.props.history.push("/login");
    }
    buscar= (e) => {
        e.preventDefault();
        let textSearch = document.querySelector("#textSearch").value;
        this.props.history.push("/search?q="+ textSearch);
    }
    render(){
        let saldo = this.props.saldo? this.props.saldo: 0;
        return (
            <Navbar sticky="top" bg="light" expand="lg">
                <Navbar.Brand href="/">Red social futbol</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <h6>Saldo:<span> ${saldo}</span></h6>
                        <AiFillPlusCircle style={{cursor: "pointer"}} className="mt-1 mr-1 text-primary"/>
                    </Nav>
                    <Form onSubmit={this.buscar} inline>
                        <FormControl id="textSearch" type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button className="mr-sm-2" onClick={this.buscar} variant="outline-success">Buscar</Button>
                        <Nav.Link className="text-danger" onClick = {this.logOut}><AiOutlineLogout/></Nav.Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default withRouter(NavbarComp);