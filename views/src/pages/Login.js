import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import logo from '../Images/Logo.png'
import { getJwt } from './../helpers/jwt'
import axios from 'axios';
import CONSTANT from '../helpers/constant'

    
import { Container, Form, Button, Row, Col, Image} from 'react-bootstrap';  
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            correo: null,
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
        let url = CONSTANT.URL + "/api/login";
        axios.post(url,  {
            correo: this.state.correo,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('jwt', res.data.jwt);
            this.props.history.push('/');
        }).catch((err) => {
            console.log("Correo o contraseña incorrectos");
        });
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
                            <Form.Group controlId="correo">
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