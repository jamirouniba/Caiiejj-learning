import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Button, Divider, Form} from "semantic-ui-react";
import {LabelInputField} from "react-semantic-redux-form";


class deleteUserForm extends Component {


    onSubmit = (formValues) => {
        this.props.onSubmit(formValues.current_password);
    };

    render() {

        return (

            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <h4 className="text-md-center">Inserisci la password per eliminare il tuo account(Attenzione,non
                    richiede conferma)</h4>
                <Field name='current_password' type='password' component={LabelInputField}
                       label={{children: 'Password'}}
                       validate={required}/>
                <Divider/>
                <Button primary>Elimina</Button>
            </Form>
        );
    }

}
const required = value => (value ? undefined : 'Required');

export default reduxForm({
    form: 'DeleteUserForm'
})(deleteUserForm);