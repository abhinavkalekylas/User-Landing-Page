import { combineReducers } from "redux"
import {userReducer} from "./userReducer";

const reducers = combineReducers({
    allUserInfo: userReducer,
})

export default reducers;
