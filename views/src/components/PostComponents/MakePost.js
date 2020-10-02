import React, {Component} from 'react';
import {Form, Row, Col, Image, Button} from 'react-bootstrap'
import testPerfil from '../../Images/testperfil.webp'
import { AiFillFileImage } from "react-icons/ai";


class MakePost extends Component {
    constructor() {
        super();
        this.formFile = React.createRef();
    }
    render(){
        let uploadImage = () => {
            this.formFile.current.click();
        }
        return (
            <Form>
                <Row>
                    <Col className="px-0" xs={2}>
                        <div className="mx-4 my-2" style={{"width": "60%"}}>
                            <Image src={testPerfil} roundedCircle fluid  />
                        </div>
                    </Col>
                    <Col className="pl-0" xs={10}>
                        <Form.Group className="mb-0" controlId="exampleForm.ControlTextarea1">
                            <Form.Control placeholder="¿Que estas pensando?" as="textarea" rows="2" />
                        </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <Button className="float-right mb-2" variant="outline-primary">Publicar</Button>
                        <Button type="submit" onClick={uploadImage} className="float-right mr-1" variant ="outline-secondary"><AiFillFileImage/></Button>
                        <Form.File accept="image/*" className="d-lg-none" ref={this.formFile} />
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default MakePost;