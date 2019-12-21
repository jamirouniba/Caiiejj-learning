
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../layout/modal';
import history from '../../history';
import { getDipartimento,deleteDipartimento } from '../../actions/dipartimentoAction';

class DipDelete extends Component {
  componentDidMount() {
    this.props.getDipartimento(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.dipartimento) {
      return 'Are you sure you want to delete this task?';
    }
    return `Are you sure you want to delete the task: ${this.props.dipartimento.id}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteDipartimento(id)}
          className='ui negative button'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title='Delete Dipartimento'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  dipProp: state.DipartimentoReducer[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { deleteDipartimento,getDipartimento }
)(DipDelete);