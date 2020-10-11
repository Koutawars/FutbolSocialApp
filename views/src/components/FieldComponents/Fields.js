import React, {Component} from 'react';
import Field from './Field'
import {Col} from 'react-bootstrap'
import {CONSTANT} from '../../helpers/constant'


class Fields extends Component {
    render(){
        let admin = this.props.data.tipoId === CONSTANT.ADMIID;
        return  (
            <React.Fragment>
                <Col className="pt-1" xs={4}>
                    <Field admin = {admin}/>
                </Col>
                <Col className="pt-1" xs={4}>
                    <Field admin = {admin}/>
                </Col>
                <Col className="pt-1" xs={4}>
                    <Field admin = {admin}/>
                </Col>
                <Col className="pt-1" xs={4}>
                    <Field admin = {admin}/>
                </Col>
                <Col className="pt-1" xs={4}>
                    <Field admin = {admin}/>
                </Col>
                <Col className="pt-1" xs={4}>
                    <Field admin = {admin}/>
                </Col>
            </React.Fragment>
        )
    }
}

export default Fields;