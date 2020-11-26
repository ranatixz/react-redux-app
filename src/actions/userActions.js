import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_REQUEST_SUCCESSFUL,
    FETCH_USERS_REQUEST_FAILURE
} from "../types/userTypes";
import axios from "axios";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};

export const fetchUsersRequestSuccessful = users => {
    return {
        type: FETCH_USERS_REQUEST_SUCCESSFUL,
        payload: users
    };
};

export const fetchUsersRequestFailure = error => {
    return {
        type: FETCH_USERS_REQUEST_FAILURE,
        payload: error
    };
};

export const fetchUsers = () => dispatch => {
    dispatch(fetchUsersRequest());
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            dispatch(fetchUsersRequestSuccessful(res.data));
        })
        .catch(err => dispatch(fetchUsersRequestFailure(err.message)));
};
