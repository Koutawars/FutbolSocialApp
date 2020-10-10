import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GiFootyField } from "react-icons/gi";

class Menu extends Component {
    NavLinkComp(props){
        let width = window.innerWidth;
        let nombre = props.nombre;
        let sizeToHideName = 993;
        if(width < sizeToHideName){
            nombre = "";
        }
        return(
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" exact to={props.link}>
                <h5>
                    <props.icon/><span style={{"top": "4px", "left": "30px", "position": "relative"}}>{nombre}</span>
                </h5>
            </NavLink>
        </li>);
    }
    render(){
        return (
            <ul style={{"top":"60px"}} className="nav flex-column nav-pills sticky-top">
                <this.NavLinkComp link="/" nombre="Inicio" icon={AiFillHome}></this.NavLinkComp>
                <this.NavLinkComp link="/perfil" nombre="Perfil" icon={BsFillPersonFill}></this.NavLinkComp>
                <this.NavLinkComp link="/canchas" nombre="Canchas" icon={GiFootyField}></this.NavLinkComp>
            </ul>
        );
    }
}
export default withRouter(Menu);