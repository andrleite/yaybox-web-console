import { FETCH_APP } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_APP:
      return [ ...state, action.payload ];
  }
  return state;
}