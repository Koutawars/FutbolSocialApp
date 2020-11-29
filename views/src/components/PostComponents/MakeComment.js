import React, {Component} from 'react';
import {InputGroup, FormControl, Image, Form} from 'react-bootstrap'

import { getJwt } from '../../helpers/jwt'
import axios from 'axios';
import CONSTANT from '../../helpers/constant'
class MakeComment extends Component {
    constructor(props){
        super(props);
        let idInput = "content" + this.props.idPost;
        this.state = {
            [idInput]: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    comentar = (e) => {
        e.preventDefault();
        let url = CONSTANT.URL + "/api/user/addComentario/" + this.props.idPost;
        const jwt = getJwt();
        let idInput = "content" + this.props.idPost;
        let body = {
            content: this.state[idInput]
        }
        axios.post(url, body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            })
        .then(res => {
            if(res.status === 200){
                let idInput = "content" + this.props.idPost;
                this.setState({
                    [idInput]: ""
                });
                document.getElementById(idInput).value = "";
                this.props.updateComment();
            }
         }).catch(err => {
            console.log(err);
         });
    }
    render(){
        let idInput = "content" + this.props.idPost;
        return(
        <Form className="d-block" onSubmit={this.comentar} inline>
            <InputGroup className="mt-1">
                <InputGroup.Prepend>
                    <InputGroup.Text className="p-1" id="basic-addon1">
                        <Image style={{"width":"28px"}} src={this.props.imagen} roundedCircle fluid  />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl autoComplete="off" onChange = {this.handleChange} id={idInput} placeholder="Comenta algo..."/>
            </InputGroup>
        </Form>
        );
    }
}
export default MakeComment;