import axios from 'axios';

import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import { useLocation, useNavigate } from 'react-router-dom';


export const signup = (formData) => async (dispatch) => {

  dispatch({ type: AUTH_REQUEST });

  return axios.post('https://money-mentor.onrender.com/LoginUsers', formData).then((res) => {
    // console.log(res)
    dispatch({ type: AUTH_SUCCESS, payload: res.data })
    return res.data
  }).catch((err) => {
    // setSubmissiondisbled(false)
    dispatch({ type: AUTH_ERROR, payload: err.message })
    // console.log(err.message);
  })

}


// export const login = (loginData) => async (dispatch) => {

//   dispatch({ type: LOGIN_REQUEST })
//   return axios.get(`https://money-mentor.onrender.com/LoginUsers`).then((res) => {
//     // console.log(res)
//     res.data.map((el) => {
//       if (el.email == loginData.email && el.password == loginData.password) {
//         dispatch({ type: LOGIN_SUCCESS, payload: el })
//         console.log("el:", el)
//         // return res.data
//       }

//     })

//   }).catch((err) => {
//     dispatch({ type: LOGIN_FAILURE })
//   })
// }
export const login = (loginData) => async (dispatch) => {


  dispatch({ type: LOGIN_REQUEST });

  try {
    const res = await axios.get(`https://money-mentor.onrender.com/LoginUsers`);

    const user = res.data.find((el) => el.email === loginData.email && el.password === loginData.password);

    if (user) {
      dispatch({ type: LOGIN_SUCCESS, payload: user });
      console.log("User found:", user);
      return true;
    } else {
      dispatch({ type: LOGIN_FAILURE });
      return false;
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE });
  }
};


