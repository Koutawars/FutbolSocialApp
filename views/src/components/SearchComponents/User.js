import React, {Component} from 'react';

import {Card, Image} from 'react-bootstrap'
import testPerfil from '../../Images/testperfil.webp'

import { Link } from "react-router-dom";
class User extends Component {
    render() {
        console.log(this.props);
        let imagen = this.props.imagen?this.props.imagen:testPerfil;
        let url = "/perfil/" + this.props.id;
        return (
            <Card style = {{"marginBottom":"16px"}}>
                <div className = "inline">
                    <Link to = {url}  className="text-decoration-none">
                        <Image className="py-1 pl-2" style={{"width": "35%"}} src={imagen} roundedCircle />
                        <h5 className = "d-inline mt-1 ml-1 mb-0 small">{this.props.nombres} {this.props.apellidos}</h5>
                    </Link>
                </div>
            </Card>
        );
    }
}

export default User;