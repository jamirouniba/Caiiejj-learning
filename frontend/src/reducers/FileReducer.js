import _ from 'lodash';
import {ADD_FILE, DELETE_FILE, EDIT_FILE, GET_FILE} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {

        case GET_FILE:
            return {
                ..._.mapKeys(action.payload, 'id')
            };

        case ADD_FILE:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case EDIT_FILE:
            return {
                ...state,
                [action.payload.id]: action.payload

            };
        case DELETE_FILE:
            return _.omit(state, action.payload);

        default:
            return state;
    }
};