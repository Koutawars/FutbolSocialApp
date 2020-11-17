import React, {Component} from 'react';
import {InputGroup, FormControl, Image, Form} from 'react-bootstrap'

class MakeComment extends Component {
    constructor(props){
        super(props);
        let idInput = "content" + this.props.idPost;
        this.state = {
            [idInput]: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    };
    comentar = (e) => {
        e.preventDefault();
        let idInput = "content" + this.props.idPost;
        this.setState({
            [idInput]: ""
        });
        document.getElementById(idInput).value = "";
    }
    render(){
        let idInput = "content" + this.props.idPost;
        return(
        <Form className="d-block" onSubmit={this.comentar} inline>
            <InputGroup className="mt-1">
                <InputGroup.Prepend>
                    <InputGroup.Text className="p-1" id="basic-addon1">
                        <Image style={{"width":"28px"}} src={this.props.imagen} roundedCircle fluid  />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl autoComplete="off" onChange = {this.handleChange} id={idInput} placeholder="Comenta algo..."/>
            </InputGroup>
        </Form>
        );
    }
}
export default MakeComment;