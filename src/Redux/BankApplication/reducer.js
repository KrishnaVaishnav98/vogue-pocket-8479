import React from 'react'
import { ALL_USER_ERROR, ALL_USER_REQUEST, ALL_USER_SUCCESS, LOAN_DATA_ERROR, LOAN_DATA_REQUEST, LOAN_DATA_SUCCESS } from './actionTypes'

const initialState = {
    isError: false,
    isLoading: false,
    loans: [],
    allUsersError: false,
    allUsersLoading: false,
    allUsers: []
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOAN_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOAN_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                loans: [...state.loans, payload]
            }
        }
        case LOAN_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case ALL_USER_REQUEST: {
            return {
                ...state,
                allUsersLoading: true,
            }
        }
        case ALL_USER_SUCCESS: {
            return {
                ...state,
                allUsersLoading: false,
                allUsers: payload
            }
        }
        case ALL_USER_ERROR: {
            return {
                ...state,
                allUsersLoading: false,
                allUsersError: true
            }
        }
        default: {
            return state
        }
    }

}
