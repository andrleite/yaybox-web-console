import axios from 'axios';
import { browserHistory } from 'react-router';
import { FETCH_DEPLOYMENTS, FETCH_APP, DELETE_APP, UNAUTH_USER } from './types';

const KUBE_API_URL = process.env.KUBE_API_URL;
const KUBE_API_TOKEN = process.env.KUBE_API_TOKEN;
const KUBE_API_PORT = process.env.KUBE_API_PORT;

const header = {
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + KUBE_API_TOKEN }
};

/*export function fetchPods() {
  const request = axios.get(`${KUBE_API_URL}:${KUBE_API_PORT}/api/v1/namespaces/default/pods`, header);

  return {
    type: FETCH_PODS,
    payload: request
  };
}*/

export function fetchDeployments() {
  return function(dispatch) {
    axios.get(`${KUBE_API_URL}:${KUBE_API_PORT}/apis/extensions/v1beta1/namespaces/default/deployments`, header)
      .then(response => {
        dispatch({ 
          type: FETCH_DEPLOYMENTS,
        payload: response.data.items });
    });
  }
}

export function fetchDeployment(name) {
  return function(dispatch) {
    axios.get(`${KUBE_API_URL}:${KUBE_API_PORT}/apis/extensions/v1beta1/namespaces/default/deployments/${name}`, header)
      .then(response => { dispatch({ 
        type: FETCH_APP,
        payload: response.data
      });
    });
  }
}

export function deleteApp(name) {
  const request = axios.delete(`${KUBE_API_URL}:${KUBE_API_PORT}/apis/extensions/v1beta1/namespaces/default/deployments/${name}`, header)
  return {
    type: DELETE_APP,
    payload: request
  }
}

export function signoutUser() {
  window.sessionStorage.removeItem('token');

  return { type: UNAUTH_USER };
}