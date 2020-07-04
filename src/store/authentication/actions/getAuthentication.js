import getAuthentication from "../../../apis/getAuthentication";
import { REQUEST_SIGN_IN, SIGN_IN_SUCCESSFUL } from "../type";

export default (data) => async (dispatch) => {
  dispatch({
    type: REQUEST_SIGN_IN,
  });
  
  const authentication = await getAuthentication();
  dispatch({
    type: SIGN_IN_SUCCESSFUL,
    authentication,
  });
};