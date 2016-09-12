import axios from 'axios';

import { FETCH_PODS } from './types';

const KUBE_API_URL = process.env.KUBE_API_URL;
const KUBE_API_TOKEN = process.env.KUBE_API_TOKEN;
const KUBE_API_PORT = process.env.KUBE_API_PORT;

const header = {
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + KUBE_API_TOKEN }
};

// using namespace default for tests purpose.

/*export function fetchPods() {
  return function(dispatch) {
    axios.get(`${KUBE_API_URL}:${KUBE_API_PORT}/api/v1/namespaces/default/pods`, header)
      .then(response => {
        dispatch({
          type: FETCH_PODS,
          payload: response.items
      });
    });
   }
}*/

export function fetchPods() {
  const request = axios.get(`${KUBE_API_URL}:${KUBE_API_PORT}/api/v1/namespaces/default/pods`, header);

  return {
    type: FETCH_PODS,
    payload: request
  };
}