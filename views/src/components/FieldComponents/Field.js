import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
// import imagefield from '../../Images/fieldTest.jpg'
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

class Field extends Component {
    constructor(props){
        super(props);
        this.state = {
            imagen: null
        }
    }

    UNSAFE_componentWillMount(){
        if(this.props.imagen){
            this.setState({
                ...this.state,
                imagen:this.props.imagen
            });
        }
    }
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
        var cardImg = this.props.imagen? <Card.Img variant="top" src={this.state.imagen} />: <></>;
        return  (
            <Card>
                {cardImg}
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