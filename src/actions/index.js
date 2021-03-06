import axios from 'axios';
import { browserHistory } from 'react-router';
import { CREATE_APP, FETCH_DEPLOYMENTS, FETCH_APP, DELETE_APP, UNAUTH_USER, NAMESPACE } from './types';
import { CrossStorageClient } from 'cross-storage';
import jwtDecode from 'jwt-decode';

const KUBE_API_URL = process.env.KUBE_API_URL;
const KUBE_API_TOKEN = process.env.KUBE_API_TOKEN;
const KUBE_API_PORT = process.env.KUBE_API_PORT;

//const token = window.localStorage.getItem('token');
//const storage = new CrossStorageClient('http://yaybox.com.br:8080/hub');
const header = {
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + KUBE_API_TOKEN }
};

/*export function getNameSpace() {
      return function(dispatch) {
        storage.onConnect().then(function() {
        return storage.get('token');
      }).then(function(res) {
          dispatch({ type: NAMESPACE, payload: res});
        });
    }
  }
*/

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

export function createDeployment({appname, dockerimage, nscale, description, plan}){
  const data_deploy = {
    'apiVersion': 'extensions/v1beta1',
    'kind': 'Deployment',
    'metadata': {
      "name": appname,
      "labels": { "app": appname }
    },
    'spec': {
      'replicas': nscale,
      'selector': {
        'matchLabels': { 'app': appname }
      },
      'template': {
        'metadata': {
          'labels': { 'app': appname }
        },
        'spec': {
          'containers': [{
            'name': appname,
            'image': dockerimage,
            'resources': {
              'requests': { 'cpu': '100m', 'memory': '100Mi' }
            },
            'ports': [{
              'containerPort': 80,
              'protocol': 'TCP'
            }]
          }]
        }
      }
    },
    'strategy': {
      'type': 'RollingUpdate',
      'rollingUpdate': { 'maxUnavailable': 1, 'maxSurge': 1 }
    }
  }

  const data_service = {
    'kind': 'Service',
    'apiVersion': 'v1',
    'metadata': {
      'name': appname + '-service',
      'labels': {'app': appname }
    },
    'spec': {
      'type': 'LoadBalancer',
      'ports': [{ 'port': 80 }],
      'selector': { 'app': appname }
    }
  }

  return function(dispatch) {
    axios.all([
      axios.post(`${KUBE_API_URL}:${KUBE_API_PORT}/apis/extensions/v1beta1/namespaces/default/deployments`, data_deploy , header)
      //axios.post(`${KUBE_API_URL}:${KUBE_API_PORT}/api/v1/namespaces/default/services`, data_service , header)
      ])
      .then(axios.spread( (deployResponse, serviceResponse) => {
        window.location.href = 'http://console.yaybox.com.br:3000';          
        dispatch({ 
          type: CREATE_APP,
          payload: deployResponse.data });
      }));
    }
  }

  export function UpdateDeployment({dockerimage}){
  const data_deploy = {
    'apiVersion': 'extensions/v1beta1',
    'kind': 'Deployment',
    'metadata': {
      "name": 'testefiap'
    },
    'spec': {
      'selector': {
        'matchLabels': { 'app': 'testfiap' }
      },
      'template': {
        'metadata': {
          'labels': { 'app': 'testefiap' }
        },
        'spec': {
          'containers': [{
            'name': testefiap,
            'image': dockerimage,
            'resources': {
              'requests': { 'cpu': '100m', 'memory': '100Mi' }
            },
            'ports': [{
              'containerPort': 80,
              'protocol': 'TCP'
            }]
          }]
        }
      }
    },
    'strategy': {
      'type': 'RollingUpdate',
      'rollingUpdate': { 'maxUnavailable': 1, 'maxSurge': 1 }
    }
  }

  const data_service = {
    'kind': 'Service',
    'apiVersion': 'v1',
    'metadata': {
      'name': appname + '-service2',
      'labels': {'app': appname }
    },
    'spec': {
      'type': 'LoadBalancer',
      'ports': [{ 'port': 80 }],
      'selector': { 'app': appname }
    }
  }

  return function(dispatch) {
    axios.all([
      axios.post(`${KUBE_API_URL}:${KUBE_API_PORT}/apis/extensions/v1beta1/namespaces/default/deployments`, data_deploy , header),
      axios.post(`${KUBE_API_URL}:${KUBE_API_PORT}/api/v1/namespaces/default/services`, data_service , header)
      ])
      .then(axios.spread( (deployResponse, serviceResponse) => {
        window.location.href = 'http://console.yaybox.com.br:3000';          
        dispatch({ 
          type: CREATE_APP,
          payload: deployResponse.data });
      }));
    }
  }

export function deleteApp(name) {
    const request = axios.delete(`${KUBE_API_URL}:${KUBE_API_PORT}/apis/extensions/v1beta1/namespaces/default/deployments/${name}`, header);
    return {
      type: DELETE_APP,
      payload: response.data };
  }

export function signoutUser() {
  window.localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}