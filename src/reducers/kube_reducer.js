import { FETCH_PODS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PODS:
      return [ action.payload.data.items, ...state ];
  }
  return state;
}