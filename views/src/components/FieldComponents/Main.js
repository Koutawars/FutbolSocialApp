import React, {Component} from 'react';
import Fields from './Fields'
import {Row} from 'react-bootstrap'
import CONSTANT from '../../helpers/constant'
import AddField from './AddField';
import EditField from './EditField'

import { getJwt } from '../../helpers/jwt';
import axios from 'axios';
class Main extends Component {
    constructor(){
        super();
        this.state = {
            update: false,
            editHandler: null,
            info: {
                nombre: null,
                descrip: null,
                precio: null,
                imagen: null
            }
        }
    }
    updateFields = async () => {
        await this.setState({update:!this.state.update});
    }

    editFieldHandler = (editHandler) => {
        this.setState({
            ...this.state,
            editHandler
        })
    }
    infoEdit = async (info) => {
        await this.setState({
            ...this.state,
            info
        });
        this.state.editHandler();
    }
    
    handleDelete = (id) => {
        let url = CONSTANT.URL + "/api/admin/field/delete/" + id;
        const jwt = getJwt();
        axios.delete(url, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(res => {
            this.updateFields();
        }).catch(err => {
            console.log(err);
        });
    }
    render(){
        let botonAgregar = this.props.data.tipoId === CONSTANT.ADMIID? (
            <Row>
                <AddField update = {this.updateFields} />
                <EditField info = {this.state.info} update = {this.updateFields} handler = {this.editFieldHandler} />
            </Row>
        ): <Row></Row>;
        return  (
            <div>
                {botonAgregar}
                <Row>
                    <Fields {...this.props} handleDelete = {this.handleDelete} infoEdit = {this.infoEdit} update = {this.state.update} />
                </Row>
            </div>
        )
    }
}

export default Main;