import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import logo from '../Images/Logo.png'
import { getJwt } from './../helpers/jwt'
    
import { Container, Form, Button, Row, Col, Image} from 'react-bootstrap';  
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
        if(this.state.email === "admin@gmail.com" && this.state.password === "admin"){
            localStorage.setItem('jwt', 'XD');
            this.props.history.push('/');
        }
    }
    
    componentDidMount(){
        if(getJwt()){
            this.props.history.push('/');
        }
    }
    render(){
        return (
            <Container md="auto">
                <Row className="justify-content-md-center">
                    <Col xs lg="5">
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Image width="200px" src={logo} rounded />
                        </div>
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
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;