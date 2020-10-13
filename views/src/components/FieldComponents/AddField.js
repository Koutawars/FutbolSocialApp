import {Button, Modal, Form} from 'react-bootstrap'
import { BiAddToQueue } from "react-icons/bi";
import React, { Component } from 'react';
import axios from 'axios';
import { getJwt } from '../../helpers/jwt';
import CONSTANT from '../../helpers/constant'

class AddField extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            nombre: null,
            descrip: null,
            valor_hora: null,
            imagen: null
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    handleChangeImage = async (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =  () => {
            this.setState({
                imagen: reader.result
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.nombre && this.state.descrip && this.state.valor_hora){
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
                this.setState({...this.state, show:false});
                this.props.update();
             }).catch(err => {
                console.log(err);
             });
        }
    }
    render(){
        const handleClose = () => this.setState({show:false});
        const handleShow = () => this.setState({show:true});
        return (
            <>
                <div className="ml-auto mr-3 mt-1">
                    <Button onClick={handleShow} variant="success">
                        <BiAddToQueue/> Agregar
                    </Button>
                </div>
                <Form>
                    <Modal show={this.state.show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Agregar una cancha</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange = {this.handleChange} type="text" placeholder="Ingrese nombre de la cancha" />
                        </Form.Group>
                        <Form.Group controlId="descrip">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control onChange = {this.handleChange} type="text" placeholder="Ingrese descripción de la cancha" />
                        </Form.Group>
                        <Form.Group controlId="valor_hora">
                            <Form.Label>Precio por hora</Form.Label>
                            <Form.Control onChange = {this.handleChange} type="number" placeholder="$ por hora" />
                        </Form.Group>
                        <Form.Group  controlId="imagen">
                            <Form.File
                            className="position-relative"
                            required
                            name="Imagen"
                            label="Imagen"
                            onChange={this.handleChangeImage}
                            feedbackTooltip
                            />
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
                </Form>
            </>
        );
    }
}
export default AddField;