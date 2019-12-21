import _ from 'lodash';
import {ADD_LEZIONE, DELETE_LEZIONE, EDIT_LEZIONE, GET_LEZIONE} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {

        case GET_LEZIONE:
            return {
                ..._.mapKeys(action.payload, 'id')
            };

        case ADD_LEZIONE:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case EDIT_LEZIONE:
            return {
                ...state,
                [action.payload.id]: action.payload

            };
        case DELETE_LEZIONE:
            return _.omit(state, action.payload);

        default:
            return state;
    }
};