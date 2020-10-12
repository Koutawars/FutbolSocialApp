import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
import imagefield from '../../Images/fieldTest.jpg'
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

class Field extends Component {
    render(){
        let triggerEdit = () => {
            this.props.infoEdit(this.props);
        }
        let triggerDelete = () => {
            this.props.handleDelete(this.props.id);
        }
        let botonAdmin = this.props.admin ? (
            <>
                <Card.Link className="text-danger" onClick= {triggerDelete}><BsFillTrashFill/></Card.Link>
                <Card.Link className="text-info"  onClick ={triggerEdit}><AiFillEdit/></Card.Link>
            </>
        ):(
            <>
                <Card.Link href="#"></Card.Link>
                <Card.Link href="#"></Card.Link>
            </>
        );
        return  (
            <Card>
                <Card.Img variant="top" src={imagefield} />
                <Card.Body>
                <Card.Title>{this.props.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${this.props.valor_hora}/hora</Card.Subtitle>
                    <Card.Text>
                        {this.props.descrip}
                    </Card.Text>
                    {botonAdmin}
                </Card.Body>
            </Card>
        )
    }
}

export default Field;