import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
import imagefield from '../../Images/fieldTest.jpg'
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

class Field extends Component {
    render(){
        let botonAdmin = this.props.admin ? (
            <>
                <Card.Link className="text-danger" href="#"><BsFillTrashFill/></Card.Link>
                <Card.Link className="text-info" href="#"><AiFillEdit/></Card.Link>
            </>
        ):(
            <>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </>
        );
        return  (
            <Card>
                <Card.Img variant="top" src={imagefield} />
                <Card.Body>
                    <Card.Title>Nombre de campo</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Estado del campo</Card.Subtitle>
                    <Card.Text>
                    Descripción del campo
                    </Card.Text>
                    {botonAdmin}
                </Card.Body>
            </Card>
        )
    }
}

export default Field;