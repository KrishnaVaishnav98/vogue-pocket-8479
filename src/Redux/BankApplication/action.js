import axios from "axios"
import { ALL_USER_ERROR, ALL_USER_REQUEST, ALL_USER_SUCCESS, LOAN_DATA_ERROR, LOAN_DATA_REQUEST, LOAN_DATA_SUCCESS } from "./actionTypes"

export const handleLoanDataSubmit = (id, loanData) => (dispatch) => {

    dispatch({ type: LOAN_DATA_REQUEST })
    return axios.patch(`https://money-mentor.onrender.com/LoginUsers/${id}`, { loans: loanData })
        .then((res) => {
            dispatch({ type: LOAN_DATA_SUCCESS, payload: res.data.loans })
            // console.log(res.data.loans)
        })
        .catch((err) => {
            dispatch({ type: LOAN_DATA_ERROR })
        })
}

export const getAllUsers = () => async (dispatch) => {

    dispatch({ type: ALL_USER_REQUEST })
    return axios.get(`https://money-mentor.onrender.com/LoginUsers`).then((res) => {
        // console.log(res)
        dispatch({ type: ALL_USER_SUCCESS, payload: res.data })

    }).catch((err) => {
        dispatch({ type: ALL_USER_ERROR })
    })
}