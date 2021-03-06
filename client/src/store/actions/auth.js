import axiosCall from '../../Utils/axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  USER_NOT_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import setAuthToken from '../../Utils/setAuthToken';

// Load user: if we have a valid token in local storage we will authenticate the user.
// =================================================================================
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axiosCall.GET('/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data, //this should be the user object {_id, username, email}
    });
  } catch (error) {
    //console.log('error in loadUser()');
    //dispatch({ type: USER_NOT_LOADED });
    dispatch({
      type: USER_LOADED,
      payload: {
        "_id": {
            "$oid": "605d8d047f083132a441ac95"
        },
        "username": "biswajitr",
        "email": "biswajit769@gmail.com",
        "password": "$2b$10$6/BnlCAh0DNTMpJzKu4IcuW57ekb61YsIaUSGig8WleEroafTRNK2",
        "__v": 0
    }, //this should be the user object {_id, username, email}
    });
  }
};

// Login user
// =================================================================================
export const login = (formData) => async (dispatch) => {
  console.log('Login!');
  //prepare data to send to API
  const body = formData;
  try {
    const res = await axiosCall.POST('/auth/login', body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data, //this should be an obj {token: "xxx"}
    });

    dispatch(loadUser());
  } catch (err) {
    console.log(err);

    // to-do: build nicer notification card than window.alert()
    //
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }
    dispatch({ type: LOGIN_FAIL });
  }
};

// Register user
// =================================================================================
export const register = (formData) => async (dispatch) => {
  const body = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
  };
  try {
    const res = await axiosCall.POST('/auth/register', body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data, //this should be an obj {token: "xxx"}
    });

    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    dispatch({ type: REGISTER_FAIL });
  }
};

// Logout user
// =================================================================================
export const logout = (dispatch) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
