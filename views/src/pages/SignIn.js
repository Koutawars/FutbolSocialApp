import React, {Component} from 'react';
import {Form, Col, Button, Row, Container} from 'react-bootstrap'; 
import axios from 'axios';
import CONSTANT from '../helpers/constant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignIn extends Component {
    
    componentDidMount() {
        document.title = "Registrarse";
    }
    constructor(props){
        super(props);
        this.state = {
            correo: null,
            password: null,
            nombres: null,
            apellidos: null,
            cedula: null
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let url = CONSTANT.URL + "/api/register";
        axios.post(url, this.state).then(res => {
            toast.success("¡Registrado con exito!", {
                autoClose: 3000,
                position: "bottom-left"
            });
            setTimeout(() => { this.props.history.push('/login'); }, 3000);
        }).catch((err) => {
            console.log(err.response.data.error);
        });
    }

    render(){
        return (
            <Container md="auto">
                <ToastContainer />
                <Row className="justify-content-md-center">
                    <Col xs lg="5">
                        <h4 className = "text-center">Registro</h4>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="correo">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control onChange = {this.handleChange} type="email" placeholder="Correo" />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control onChange = {this.handleChange} type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <Form.Group controlId="nombres">
                            <Form.Label>Nombres</Form.Label>
                                <Form.Control onChange = {this.handleChange} type="text" placeholder="Primer y segundo nombre" />
                            </Form.Group>
                            <Form.Group controlId="apellidos">
                            <Form.Label>Apellidos</Form.Label>
                                <Form.Control onChange = {this.handleChange} type="text" placeholder="Primer y segundo apellido" />
                            </Form.Group>
                            <Form.Group controlId="cedula">
                            <Form.Label>Cédula</Form.Label>
                                <Form.Control onChange = {this.handleChange} type="number" placeholder="Cédula" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default SignIn;

