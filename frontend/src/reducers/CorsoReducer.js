import _ from 'lodash';
import {
    ADD_CORSO,
    DELETE_CORSO,
    EDIT_CORSO,
    GET_CORSO,
    GET_CORSOCDL
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {

    case GET_CORSOCDL:
      return {
      ..._.mapKeys(action.payload, 'id')
      };
    case GET_CORSO:
    case ADD_CORSO:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case EDIT_CORSO:
      return {
        ...state,
        [action.payload.id]: action.payload

      };
    case DELETE_CORSO:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};