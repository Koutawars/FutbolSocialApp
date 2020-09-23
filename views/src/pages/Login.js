import { Link } from 'react-router-dom';
import React, {Component} from 'react';

import { Container, Form, Button } from 'react-bootstrap';  
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        console.log("Correo: " + this.state.email + " Contraseña: " + this.state.password);
    }
    render(){
        return (
            <Container md="auto">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control onChange = {this.handleChange} type="email" placeholder="Escribir correo" />
                        <Form.Text className="text-muted">
                        Nosotros no compartimos tu correo con nadie mas.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control onChange = {this.handleChange} type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <Form.Text className="text-muted">
                        ¿No tiene una cuenta? Registrese <Link to="/registrar">aquí.</Link>
                    </Form.Text>
                </Form>
            </Container>
        );
    }
}

export default Login;