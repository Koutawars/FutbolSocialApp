import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

// https://stackoverflow.com/questions/39235506/render-component-in-different-order-depending-on-screen-size-react
class Menu extends Component {
    NavLinkComp(props){
        return(
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to={props.link}>
                <h5>
                    <props.icon/><span style={{"top": "4px", "left": "30px", "position": "relative"}}>{props.nombre}</span>
                </h5>
            </NavLink>
        </li>);
    }
    render(){
        return (
            <ul style={{"top":"60px"}} className="nav flex-column nav-pills sticky-top">
                <this.NavLinkComp link="/" nombre="Inicio" icon={AiFillHome}></this.NavLinkComp>
                <this.NavLinkComp link="/perfil" nombre="Perfil" icon={BsFillPersonFill}></this.NavLinkComp>
            </ul>
        );
    }
}
export default withRouter(Menu);