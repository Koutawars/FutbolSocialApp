import React, {Component} from 'react';
import { getJwt } from '../../helpers/jwt'
// import axios from 'axios';
import { withRouter } from "react-router-dom";
export default function (Componente){
    class AuthenticatedComponent extends Component {
        constructor(props){
            super(props);
            this.state = {
                id: null,
                tipoId: null,
                nombres: null,
                apellidos: null
            }
        }
        componentDidMount() {
            const jwt = getJwt();
            if(!jwt){
                this.props.history.push('/login');
            }
            this.setState({
                id: 1,
                tipoId: 1,
                nombres: "Carlos",
                apellidos: "Campo Navarro"
            });

            /*
            axios.post("http://" + window.location.hostname + ':5000/api/auth', {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            } )
            .then(res => {
                this.setState({
                    id: res.data.id,
                    tipoId: res.data.tipoId,
                    nombre: res.data.nombre
                });
            }).catch(err => {
                console.log(err);
                localStorage.removeItem('jwt');
                this.props.history.push('/login');
            });
            */
        }
          
        render(){
            return <Componente data = {{...this.state}}></Componente>;
        }
    }
    return withRouter(AuthenticatedComponent);
}