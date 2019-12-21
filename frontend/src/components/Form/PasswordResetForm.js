import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Button, Container, Form} from "semantic-ui-react";

import {LabelInputField} from 'react-semantic-redux-form';

class PasswordResetForm extends Component {


    state = {
         email: ' '
    };


    renderField = ({input, label, type, meta: {touched, error}}) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} type={type}/>
                {touched && error && (
                    <span className='ui pointing red basic label'>{error}</span>
                )}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {

        return (
            <Container className="card-margin">
                <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='email' type='email' component={LabelInputField}
                           label={{children: 'Email'}} validate={required}/>
                    <Button primary>Conferma</Button>
                </Form>
            </Container>
        );
    }

}


const required = value => (value ? undefined : 'Required');

export default reduxForm({
    form: 'PasswordResetForm'
})(PasswordResetForm);