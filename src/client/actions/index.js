import axios from "axios";

const basePath = "https://react-ssr-api.herokuapp.com";

export const FETCH_USERS = "fetch_users";

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get(`${basePath}/users`);
  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};
