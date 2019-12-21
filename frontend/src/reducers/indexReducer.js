
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import DipartimentoReducer from './dipartimentoReducer';
import CdlReducer from "./CdlReducer";
import LezioneReducer from "./LezioneReducer"
import auth from './authReducer'
import { LOGOUT_SUCCESS } from '../actions/types';
import CorsoReducer from "./CorsoReducer";
import SyllaboReducer from "./SyllaboReducer";
import MediaReducer from "./MediaReducer";
import FileReducer from "./FileReducer";

const appReducer = combineReducers({
  form: formReducer,
  DipartimentoReducer,
  LezioneReducer,
  MediaReducer,
  FileReducer,
  SyllaboReducer,
  CorsoReducer,
  CdlReducer,
  auth
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;