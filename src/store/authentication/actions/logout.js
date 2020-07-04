import { LOG_OUT_SUCCESSFUL } from "../type";

export default () => {
  localStorage.removeItem('authorization');

  return {
    type: LOG_OUT_SUCCESSFUL,
  };
};
