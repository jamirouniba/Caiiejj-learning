// Sync field level validation for password match
import {Field, reduxForm} from "redux-form";


import React, {Component} from "react";
import {Button, Container, Form} from "semantic-ui-react";

import {LabelInputField} from 'react-semantic-redux-form';

class PasswordChangeForm extends Component {


    state = {
        current_password: ' ', new_password: ' ', re_new_password: '',
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
                    <Field name='current_password' type='password' component={LabelInputField}
                           label={{children: 'Password attuale'}}
                           validate={required}/>
                    <Field name='new_password' type='password' component={LabelInputField}
                           label={{children: 'Nuova password'}}
                           validate={required}/>
                    <Field name='re_new_password' type='password' component={LabelInputField}
                           label={{children: 'Conferma  nuova password'}}
                           validate={[required]}/>
                    <Button primary>Conferma</Button>
                </Form>


            </Container>
        );
    }

}


const required = value => (value ? undefined : 'Required');


const validateForm = values => {
    const errors = {};
    const {new_password, re_new_password} = values;
    if (new_password !== re_new_password) {
        errors.new_password2 = "Password does not match."
    }
    return errors;
};

export default reduxForm({
    form: "PasswordChangeForm",

    validate: validateForm
})(PasswordChangeForm);

