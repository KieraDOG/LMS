import { SIGN_IN_SUCCESSFUL, REQUEST_SIGN_IN } from "../type";
import signIn from "../../../apis/signIn";

export default (data) => async (dispatch) => {
  dispatch({
    type: REQUEST_SIGN_IN,
  });
  
  const authentication = await signIn(data);
  dispatch({
    type: SIGN_IN_SUCCESSFUL,
    authentication,
  });
};