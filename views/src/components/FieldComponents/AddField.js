import {Button, Modal, Form} from 'react-bootstrap'
import { BiAddToQueue } from "react-icons/bi";
import React, { Component } from 'react';
class AddField extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            nombre: null,
            descrip: null,
            precio: null
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.nombre && this.state.descrip && this.state.precio){
            this.setState({...this.state, show:false});
            this.props.update();
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
                        <Form.Group controlId="precio">
                            <Form.Label>Precio por hora</Form.Label>
                            <Form.Control onChange = {this.handleChange} type="number" placeholder="$ por hora" />
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