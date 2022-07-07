import { ADD_USER, DELETE_USER, EDIT_USER, FETCH_ALLUSERS } from "../action/action-types";


const initialState = {
    users: [{
        id: 11,
        name: "Abc"
    }]
}

// Central Store
export const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case FETCH_ALLUSERS:
      return {...state, users: action.payload};
    case ADD_USER:
      return {...state, users: action.payload};
    case EDIT_USER:
      //TODO
      // find by payload user id & replace user in list with payload user
      return state.users.filter((user) => {
        if(user.id === action.payload.id)
          user = action.payload
      });
    case DELETE_USER:
      //TODO
      // find by payload user id & delete user in list by payload user id
      return state.users.filter((user) => user.id !== action.payload.id);
    default:
      return state;
  }
};