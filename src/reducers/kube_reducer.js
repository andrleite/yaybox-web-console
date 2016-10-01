import { FETCH_DEPLOYMENTS, CREATE_APP } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_DEPLOYMENTS:
      return [ ...state, action.payload ];
     case CREATE_APP:
      return [ ...state, action.paylaod ]; 
  }
  return state;
}