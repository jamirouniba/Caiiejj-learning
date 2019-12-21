import React, {Component} from "react";
import {reduxForm} from "redux-form";
import {Button, Divider, Form} from "semantic-ui-react";


class ConfirmForm extends Component {


    onSubmit = () => {
        this.props.onSubmit();
    };

    render() {

        return (

            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <h4 className="text-md-center">Clicca qui per attivare il tuo account</h4>
                <Divider/>
                <Button primary>Attiva</Button>
            </Form>
        );
    }

}


export default reduxForm({
    form: 'ConfirmForm'
})(ConfirmForm);