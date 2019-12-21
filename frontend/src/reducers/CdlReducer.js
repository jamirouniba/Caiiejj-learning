import _ from 'lodash';
import {
  ADD_CDL,
  DELETE_CDL,
  EDIT_CDL,
  GET_CDLSDIP,
  GET_CDL
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {

    case GET_CDLSDIP:
      return {
      ..._.mapKeys(action.payload, 'id')
      };
    case GET_CDL:
    case ADD_CDL:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case EDIT_CDL:
      return {
        ...state,
        [action.payload.id]: action.payload

      };
    case DELETE_CDL:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};