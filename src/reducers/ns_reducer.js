import { NAMESPACE } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case NAMESPACE:
      return [ ...state, action.payload ];
  }
  return state;
}