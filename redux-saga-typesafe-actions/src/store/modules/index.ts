import { combineReducers } from "redux";
import { combineSagas } from "../lib";
import employee from "./employee";

export default {
  rootReducer: combineReducers({
    employee: employee.reducer,
  }),
  rootSagas: combineSagas({ employee: employee.saga }),
};
