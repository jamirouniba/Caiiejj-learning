
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDipartimento,editDipartimento } from '../../actions/dipartimentoAction';
import DipForm from '../Form/DipForm';

class EditDipartimento extends Component {
  componentDidMount() {
    this.props.getDipartimento(this.props.match.params.id);
    console.log(this.props)
  }

  onSubmit = formValues => {
    this.props.editDipartimento(this.props.match.params.id, formValues);

  };

  render() {
    return (
      <div className='ui container'>
        <h2 style={{ marginTop: '2rem' }}>Edit Dipartimento</h2>
        <DipForm
          initialValues={_.pick(this.props.dipProp,['codice','nome','id'])}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) =>( {
 dipProp:state.DipartimentoReducer[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { getDipartimento, editDipartimento }
)(EditDipartimento);