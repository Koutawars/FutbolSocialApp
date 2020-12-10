import React, {Component} from 'react';
import {Row, Image, Col, Button, Modal, Form} from 'react-bootstrap'
import CONSTANT from '../../helpers/constant'
import {withRouter} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { getJwt } from '../../helpers/jwt';
import axios from 'axios';
var moment = require('moment');

class Main extends Component {
    constructor(){
        super();
        this.state = {
            id: null,
            descrip: "",
            imagen: null,
            nombre: "",
            valor_hora: null,
            fecha_inicio: null,
            fecha_final: null,
            show: false
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let url = CONSTANT.URL + "/api/user/getField/" + id;
        const jwt = getJwt();
        axios.get(url, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(res => {
            this.setState(res.data.field);
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.id;
        let url = CONSTANT.URL + "/api/user/alquilerPosible/" + id;
        const jwt = getJwt();
        axios.post(url, {
            fecha_inicio: this.state.fecha_inicio, 
            fecha_final: this.state.fecha_final
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            })
        .then(res => {
            console.log("DATA: ", res.data);
            this.setState({show:false, fecha_inicio: null, fecha_final: null});
            this.props.updateSaldo(res.data.saldoActual);
            toast.success("¡Escenario reservado!", {
                autoClose: 3000,
                position: "bottom-left"
            });
        }).catch(err => {
            toast.error(err.response.data, {
                autoClose: 3000,
                position: "bottom-left"
            });
        });

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    getISOStringWithoutSecsAndMillisecs1(date) {
        const dateAndTime = date.toISOString().split('T')
        const time = dateAndTime[1].split(':')
        
        return dateAndTime[0]+'T'+time[0]+':'+time[1]
   }
    render(){
        const handleClose = () => this.setState({show:false, fecha_inicio: null, fecha_final: null});
        const handleShow = () => this.setState({show:true});
        let jsx = <></>;
        if(this.state.fecha_inicio && this.state.fecha_final) {
            let {fecha_inicio, fecha_final,valor_hora} = this.state;
            fecha_inicio = moment(fecha_inicio);
            fecha_final = moment(fecha_final);
            let horas = moment.duration(fecha_final.diff(fecha_inicio)).asHours();
            let valor = valor_hora*(horas);
            valor = Math.trunc(valor) + 1;
            horas = Math.trunc(horas);
            jsx = <p>N°Horas: {horas} - Costo por ${valor}</p>;
        }
        let fechaActual = this.getISOStringWithoutSecsAndMillisecs1(new Date);
        return(
            <>
                <Row>
                    <Col xs="7">
                        <Row>
                            <Image style = {{width:"100%"}} src={this.state.imagen}/>
                        </Row>
                        <Row>
                            <figure>
                                <h4>{this.state.nombre}</h4> <Button onClick={handleShow} className="text-white">Alquilar</Button>
                                <h6>Valor: ${this.state.valor_hora}/hora</h6>
                                <blockquote >
                                    {this.state.descrip}
                                </blockquote>
                            </figure>
                        </Row>
                    </Col>
                    <Col xs="5">
                    </Col>
                    <ToastContainer />
                    <Modal show={this.state.show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Escoger fecha de alquilar</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group controlId="fecha_inicio">
                                <Form.Label>Fecha inicio</Form.Label>
                                <Form.Control min={fechaActual} onChange = {this.handleChange} type="datetime-local" name="fecha_inicio" placeholder="Date of Birth" />
                            </Form.Group>
                            <Form.Group controlId="fecha_final">
                                <Form.Label>Fecha final</Form.Label>
                                <Form.Control  min={fechaActual} onChange = {this.handleChange} type="datetime-local" name="fecha_final" placeholder="Date of Birth" />
                            </Form.Group>
                            {jsx}
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
                </Row>
            </>
        );
    }
}

export default withRouter(Main);