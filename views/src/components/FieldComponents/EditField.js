import {Button, Modal, Form} from 'react-bootstrap'
import React, { Component } from 'react';
class EditField extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            id: props.info.id,
            nombre: props.info.nombre,
            descrip: props.info.descrip,
            valor_hora: props.info.valor_hora
        }
        this.props.handler(() => this.setState({...this.state, show:true}));
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.nombre && this.state.descrip && this.state.valor_hora){
            this.setState({...this.state, show:false});
            this.props.update();
        }
    }
    render(){
        const handleClose = () => this.setState({...this.state, show:false});
        return (
            <>
                <Form>
                    <Modal show={this.state.show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar una cancha</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control defaultValue={this.props.info.nombre} onChange = {this.handleChange} type="text" placeholder="Ingrese nombre de la cancha" />
                        </Form.Group>
                        <Form.Group controlId="descrip">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control defaultValue={this.props.info.descrip} onChange = {this.handleChange} type="text" placeholder="Ingrese descripción de la cancha" />
                        </Form.Group>
                        <Form.Group controlId="valor_hora">
                            <Form.Label>Precio por hora</Form.Label>
                            <Form.Control defaultValue={this.props.info.valor_hora} onChange = {this.handleChange} type="number" placeholder="$ por hora" />
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
export default EditField;