import { 
  LOG_OUT_SUCCESSFUL, 
  REQUEST_SIGN_IN, REQUEST_SIGN_UP, 
  SIGN_IN_SUCCESSFUL, SIGN_UP_SUCCESSFUL,
} from './type';

const initialState = {
  data: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_SIGN_IN:
    case REQUEST_SIGN_UP:
    case LOG_OUT_SUCCESSFUL:
      return {
        ...state,
        data: null,
      };

    case SIGN_IN_SUCCESSFUL:
    case SIGN_UP_SUCCESSFUL: 
      return {
        ...state,
        data: action.authentication
      };

    default:
      return state;
  }
}