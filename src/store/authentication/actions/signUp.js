import signUp from "../../../apis/signUp";
import { REQUEST_SIGN_UP, SIGN_UP_SUCCESSFUL } from "../type";

export default (data) => async (dispatch) => {
  dispatch({
    type: REQUEST_SIGN_UP,
  });
  
  const authentication = await signUp(data);
  dispatch({
    type: SIGN_UP_SUCCESSFUL,
    authentication,
  });
};