import React, {Component} from 'react';

import {withRouter} from "react-router-dom"
import Field from "../FieldComponents/Field"
import {Col, Row} from 'react-bootstrap';

import User from './User';

import CONSTANT from '../../helpers/constant'
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';
class Main extends Component {
    constructor(){
        super();
        this.state = {
            fields: [],
            users: []
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props !== prevProps){
            // buscar canchas 
            let url_string = window.location.href;
            let url_object = new URL(url_string);
            let textSearch = url_object.searchParams.get("q");
            let url = CONSTANT.URL + "/api/user/searchFields?q=" + textSearch;
            const jwt = getJwt();
            axios.get(url, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            }).then(res => {
                this.setState({
                    ...this.state,
                    fields:res.data.results
                })
            });
            // buscar personas 
            url = CONSTANT.URL + "/api/user/searchUsers?q=" + textSearch;
            axios.get(url, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            }).then(res => {
                this.setState({
                    ...this.state,
                    users:res.data.results
                })
            });


        }
    }
    render(){
        let fields = this.state.fields.map((field) => 
            <Col key = {field.id} className="pt-1" xs={4}>
                <Field {...field} />
            </Col>
        );
        let users = this.state.users.map((user) => 
        <Col key = {user.id} className="pt-1" xs={4}>
            <User {...user} />
        </Col>
    );
        return (
        <Row>
            {users}
            {fields}
        </Row>);
    }
}

export default withRouter(Main);