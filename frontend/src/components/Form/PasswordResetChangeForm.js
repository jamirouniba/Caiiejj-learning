
import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Button, Container, Form} from "semantic-ui-react";
import {LabelInputField} from 'react-semantic-redux-form';
const queryString = require('query-string');
const uid = queryString.parse(location.search).uid;
const token = queryString.parse(location.search).token;

class PasswordResetChangeForm extends Component {


    state = {
        new_password: ' ', re_new_password: '', uid:uid,token:token,
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
        formValues.uid= uid;
        formValues.token = token;
        this.props.onSubmit(formValues);
    };

    render() {

        return (
            <Container className="card-margin">
                <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='new_password' type='password' component={LabelInputField}
                           label={{children: 'Nuova password'}}
                           validate={required}/>
                    <Field name='re_new_password' type='password' component={LabelInputField}
                           label={{children: 'Conferma  nuova password'}}
                           validate={[required, match('new_password')]}/>
                    <Button primary>Conferma</Button>
                </Form>
            </Container>
        );
    }

}


const required = value => (value ? undefined : 'Required');

 const match = matchName => (value, allValues, props) =>
  value !== allValues[matchName]
    ? `This field must match with ${matchName} field`
    : undefined;

export default reduxForm({
    form: "passwordResetChangeform",
})(PasswordResetChangeForm);

