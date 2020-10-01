import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
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
            <ul class="nav flex-column nav-pills">
                <this.NavLinkComp link="/" nombre="Home" icon={AiFillHome}></this.NavLinkComp>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/muro"><h5>Link</h5></NavLink>
                </li>
            </ul>
        );
    }
}
export default withRouter(Menu);