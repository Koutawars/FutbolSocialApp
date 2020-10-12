import React, {Component} from 'react';
import Field from './Field';
import {Col, Spinner} from 'react-bootstrap';
import CONSTANT from '../../helpers/constant'
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';

class Fields extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: null,
            deleteId: null
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.data !== prevProps.data || this.props.update !== prevProps.update){
            const jwt = getJwt();
            let admin = this.props.data.tipoId === CONSTANT.ADMIID;
            let url = CONSTANT.URL + ((admin) ?"/api/admin/field":"/api/user/getFields");
            console.log(url);
            axios.get(url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            } )
            .then(res => {
                this.setState(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }
    render(){
        let listFields = () => {
            let fields = this.state.fields;
            let renderListFields = <div></div>;
            let admin = this.props.data.tipoId === CONSTANT.ADMIID;
            if(fields === null){
                renderListFields = <Col className = "mx-auto mt-5 col-3" xs = {12}><Spinner animation="border" role="status">
                <span className="sr-only">Cargando...</span>
              </Spinner></Col>;
            } else {
                renderListFields = fields.map((field) => 
                    <Col key = {field.id} className="pt-1" xs={4}>
                        <Field {...field} infoEdit = {this.props.infoEdit} handleDelete = {this.props.handleDelete} admin = {admin}/>
                    </Col>
                );
            }
            return renderListFields;
        }
        return  (
            <React.Fragment>
                {listFields()}
            </React.Fragment>
        )
    }
}

export default Fields;