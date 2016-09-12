import { combineReducers } from 'redux';
import kubeReducer from './kube_reducer';

const rootReducer = combineReducers({
  kube: kubeReducer
});

export default rootReducer;
