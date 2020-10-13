import {Button, Modal, Form} from 'react-bootstrap'
import React, { Component } from 'react';
import axios from 'axios';
import { getJwt } from '../../helpers/jwt';
import CONSTANT from '../../helpers/constant'
class EditField extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            id: null,
            nombre: null,
            descrip: null,
            valor_hora: null,
            imagen: null
        }
        this.props.handler(() => this.setState({...this.state, show:true}));
    }
    componentDidUpdate(prevProps){
        if(this.props.info !== prevProps.info){
            this.setState({
                ...this.state, 
                id: this.props.info.id,
                nombre: this.props.info.nombre,
                descrip: this.props.info.descrip,
                valor_hora: this.props.info.valor_hora
            });
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.nombre && this.state.descrip && this.state.valor_hora){
            let url = CONSTANT.URL + "/api/admin/field/update/" + this.state.id;
            const jwt = getJwt();
            axios.put(url, this.state,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${jwt}`
                    }
                })
            .then(res => {
                this.setState({...this.state, show:false});
                this.props.update();
             }).catch(err => {
                console.log(err);
             });
        }
    }
    handleChangeImage = async (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =  () => {
            this.setState({
                imagen: reader.result
            })
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
export default EditField;