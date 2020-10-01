import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { AiOutlineLogout } from "react-icons/ai";
import {withRouter} from 'react-router-dom'
class NavbarComp extends Component {
    logOut= (e) => {
        e.preventDefault();
        localStorage.clear();
        this.props.history.push("/login");
    }
    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        <Nav.Link className="text-danger" onClick = {this.logOut}><AiOutlineLogout/></Nav.Link>
                    </Form>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default withRouter(NavbarComp);