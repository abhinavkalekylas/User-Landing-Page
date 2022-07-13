import { ADD_USER, DELETE_USER, EDIT_USER, FETCH_ALLUSERS, FILTER_USER } from "./action-types";

export const fetchAllUsers = (users: any) => {
    return {
        type: FETCH_ALLUSERS,
        payload: users
    }
}

export const addUser = (user: any) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const editUser = (user: any) => {
    return {
        type: EDIT_USER,
        payload: user
    }
}

export const deleteUser = (user: any) => {
    return {
        type: DELETE_USER,
        payload: user
    }
}

export const filterUser = (filterType: any) => {
    return {
        type: FILTER_USER,
        payload: filterType
    }
}



