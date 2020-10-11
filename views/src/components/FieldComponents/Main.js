import React, {Component} from 'react';
import Fields from './Fields'
import {Row} from 'react-bootstrap'
import {CONSTANT} from '../../helpers/constant'
import AddField from './AddField';

class Main extends Component {
    render(){
        let botonAgregar = this.props.data.tipoId === CONSTANT.ADMIID? (
                <Row>
                    <AddField />
                </Row>
            ): <Row></Row>;
        return  (
            <div>
                {botonAgregar}
                <Row>
                    <Fields {...this.props} />
                </Row>
            </div>
        )
    }
}

export default Main;