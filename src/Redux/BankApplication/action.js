import axios from "axios"
import { ALL_USER_ERROR, ALL_USER_REQUEST, ALL_USER_SUCCESS, BANK_DATA_ERROR, BANK_DATA_REQUEST, BANK_DATA_SUCCESS, GET_LOAN_DATA_ERROR, GET_LOAN_DATA_REQUEST, GET_LOAN_DATA_SUCCESS, LOAN_DATA_ERROR, LOAN_DATA_REQUEST, LOAN_DATA_SUCCESS } from "./actionTypes"

export const handleLoanDataSubmit = (id, loanData) => (dispatch) => {

    dispatch({ type: LOAN_DATA_REQUEST })
    return axios.patch(`https://money-mentor.onrender.com/LoginUsers/${id}`, { loans: loanData })
        .then((res) => {
            dispatch({ type: LOAN_DATA_SUCCESS, payload: res.data.loans })
            console.log(res.data.loans)
        })
        .catch((err) => {
            dispatch({ type: LOAN_DATA_ERROR })
        })
}

export const getLoanData = (id) => (dispatch) => {

    dispatch({ type: GET_LOAN_DATA_REQUEST })
    return axios.get(`https://money-mentor.onrender.com/LoginUsers/${id}`)
        .then((res) => {
            dispatch({ type: GET_LOAN_DATA_SUCCESS, payload: res.data.loans })
            console.log(res.data.loans)
        })
        .catch((err) => {
            dispatch({ type: GET_LOAN_DATA_ERROR })
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

export const getBankData = (id) => async (dispatch) => {

    dispatch({ type: BANK_DATA_REQUEST })
    return axios.get(`https://money-mentor.onrender.com/Banks/${id}`).then((res) => {
        console.log("Bank by id", res.data)
        dispatch({ type: BANK_DATA_SUCCESS, payload: res.data })

    }).catch((err) => {
        dispatch({ type: BANK_DATA_ERROR })
    })
}