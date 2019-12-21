import _ from 'lodash';
import {ADD_SYLLABO, DELETE_SYLLABO, EDIT_SYLLABO, GET_SYLLABO} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {

        case GET_SYLLABO:
            return {
                ..._.mapKeys(action.payload, 'id')
            };

        case ADD_SYLLABO:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case EDIT_SYLLABO:
            return {
                ...state,
                [action.payload.id]: action.payload

            };
        case DELETE_SYLLABO:
            return _.omit(state, action.payload);

        default:
            return state;
    }
};