import _ from 'lodash';
import {ADD_MEDIA, DELETE_MEDIA, EDIT_MEDIA, GET_MEDIA} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {

        case GET_MEDIA:
            return {

                ..._.mapKeys(action.payload, 'id')
            };

        case ADD_MEDIA:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case EDIT_MEDIA:
            return {
                ...state,
                [action.payload.id]: action.payload

            };
        case DELETE_MEDIA:
            return _.omit(state, action.payload);

        default:
            return state;
    }
};