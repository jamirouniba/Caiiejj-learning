
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDipartimento } from '../../actions/dipartimentoAction';
import DipForm from '../Form/DipForm';

class DipCreate extends Component {
  onSubmit = formValues => {
    this.props.addDipartimento(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <DipForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addDipartimento }
)(DipCreate);