import { FETCH_DEPLOYMENTS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_DEPLOYMENTS:
      return [ ...state, action.payload ];
  }
  return state;
}