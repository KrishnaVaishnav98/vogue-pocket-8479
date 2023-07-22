import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"
import axios from "axios"

export const getProducts = (paramobj) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST })
    axios
        .get("https://money-mentor.onrender.com/Banks", paramobj)
        .then((res) => {
           
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: PRODUCT_FAILURE, payload: err.message })
        })
}