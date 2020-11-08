import React, {Component} from 'react';

import {withRouter} from "react-router-dom"
import Field from "../FieldComponents/Field"
import {Col} from 'react-bootstrap';

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
                console.log(res.data);
                this.setState({
                    ...this.state,
                    fields:res.data.results
                })
            });
        }
    }
    render(){
        let fields = this.state.fields.map((field) => 
            <Col key = {field.id} className="pt-1" xs={6}>
                <Field {...field} />
            </Col>
        );
        return (fields);
    }
}

export default withRouter(Main);