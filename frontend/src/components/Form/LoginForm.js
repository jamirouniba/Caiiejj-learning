import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Button, Container, Form} from "semantic-ui-react";

import {LabelInputField} from 'react-semantic-redux-form';

class UserForm extends Component {


    state = {
        username: ' ', password: ' '
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
                    <Field name='username' type='text' component={LabelInputField}
                           label={{children: 'Username'}}
                           validate={[required, minLength3, maxLength15]}/>
                    <Field name='password' type='password' component={LabelInputField}
                           label={{children: 'Password'}}
                           validate={required}/>
                    <Button primary>Login</Button>
                </Form>


            </Container>
        );
    }

}


const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
    value && value.length < min
        ? `Must be at least ${min} characters`
        : undefined;

const minLength3 = minLength(3);

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength15 = maxLength(15);

export default reduxForm({
    form: 'LoginForm'
})(UserForm);