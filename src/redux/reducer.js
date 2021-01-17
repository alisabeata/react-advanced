import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer, { moduleName as authModule } from "../ducks/auth";
import eventsReducer, { moduleName as eventsModule } from "../ducks/events";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    [authModule]: authReducer,
    [eventsModule]: eventsReducer,
  });
