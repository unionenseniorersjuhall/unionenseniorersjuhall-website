import { GET_DATA } from '../actions';

function app(state = {}, action) {
  switch (action.type) {
    case GET_DATA:
      return state;
    default:
      return state;
  }
}

export default app;
