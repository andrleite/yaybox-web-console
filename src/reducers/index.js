import { combineReducers } from 'redux';
import kubeReducer from './kube_reducer';
import appReducer from './app_reducer';

const rootReducer = combineReducers({
  app: appReducer,
  k8s: kubeReducer
});
export default rootReducer;