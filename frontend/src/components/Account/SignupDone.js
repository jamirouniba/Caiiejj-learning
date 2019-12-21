import React, { Component } from "react";
import {Container} from "semantic-ui-react";

export default class SignupDone extends Component {
    render() {
        return (
            <Container className="card-margin">
                Grazie per la registrazione, è stata mandata una e-mail all'account specificato per confermare
                l'iscrizione.
            </Container>
        )
    }
}