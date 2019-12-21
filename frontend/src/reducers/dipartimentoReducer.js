import _ from 'lodash';
import {
  ADD_DIPARTIMENTO,
  DELETE_DIPARTIMENTO,
  EDIT_DIPARTIMENTO,
  GET_DIPARTIMENTI,
  GET_DIPARTIMENTO
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {

    case GET_DIPARTIMENTI:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_DIPARTIMENTO:
    case ADD_DIPARTIMENTO:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case EDIT_DIPARTIMENTO:
      return {
        ...state,
        [action.payload.id]: action.payload

      };
    case DELETE_DIPARTIMENTO:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};