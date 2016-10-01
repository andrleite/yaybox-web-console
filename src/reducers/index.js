import { combineReducers } from 'redux';
import kubeReducer from './kube_reducer';
import appReducer from './app_reducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form,
  app: appReducer,
  k8s: kubeReducer
});
export default rootReducer;