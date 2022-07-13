import { ADD_USER, DELETE_USER, EDIT_USER, FETCH_ALLUSERS, FILTER_USER } from "../action/action-types";


const initialState = {
    users: [{
        id: 11,
        name: "Abc",
        email: "abc@gmail.com",
        gender: "male",
        status: "active"
    }],
    filter: {
      selectedGender: "",
      selectedStatus: ""
    }
}

// Central Store
export const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case FETCH_ALLUSERS:
      return {...state, users: action.payload};
    case ADD_USER:
      return {...state, users: action.payload};
    case EDIT_USER:
      // find by payload user id & replace user in list with payload user
      return state.users.filter((user) => {
        if(user.id === action.payload.id)
          user = action.payload
      });
    case DELETE_USER:
      // find by payload user id & delete user in list by payload user id
      return state.users.filter((user) => user.id !== action.payload.id);
      
    // case FILTER_USER:
    //   return state.users.filter((user) => {
    //     user.status === action.payload.selectedStatus && user.gender === action.payload.selectedGender
    //   });
    case FILTER_USER:
        return {...state, filter: action.payload}
    default:
      return state;
  }
};