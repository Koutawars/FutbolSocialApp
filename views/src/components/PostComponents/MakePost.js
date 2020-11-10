import React, {Component} from 'react';
import {Form, Row, Col, Image, Button} from 'react-bootstrap'
import testPerfil from '../../Images/testperfil.webp'
import { AiFillFileImage } from "react-icons/ai";

import { getJwt } from '../../helpers/jwt'
import axios from 'axios';
import CONSTANT from '../../helpers/constant'

class MakePost extends Component {
    constructor() {
        super();
        this.state = {
            contenido: "",
            imagen: null
        }
        this.formFile = React.createRef();
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
                ...this.state,
                imagen: reader.result
            });
            
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // http://localhost:5000/api/user/addPost
        let url = CONSTANT.URL + "/api/user/addPost";
        const jwt = getJwt();
        axios.post(url, this.state,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            })
        .then(res => {
            if(res.status == 200){
                this.props.updatePost();
                document.querySelector("#contenido").value = "";
                document.querySelector("#imagen").value = "";
                this.setState({
                    contenido: "",
                    imagen: null
                })
            }
         }).catch(err => {
            console.log(err);
         });
    }
    render(){
        let uploadImage = () => {
            this.formFile.current.click();
        }

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col className="px-0" xs={2}>
                        <div className="mx-4 my-2" style={{"width": "60%"}}>
                            <Image src={testPerfil} roundedCircle fluid  />
                        </div>
                    </Col>
                    <Col className="pl-0" xs={10}>
                        <Form.Group className="mb-0" controlId="contenido">
                            <Form.Control onChange = {this.handleChange} placeholder="¿Que estas pensando?" as="textarea" rows="2" />
                        </Form.Group>
                    </Col>

                    <Col xs={12}>
                        <Button type="submit" className="float-right mb-2" variant="outline-primary">Publicar</Button>
                        <Button onClick={uploadImage} className="float-right mr-1" variant ="outline-secondary"><AiFillFileImage/></Button>
                        <Form.File id="imagen" onChange={this.handleChangeImage} accept="image/*" className="d-lg-none" ref={this.formFile} />
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default MakePost;