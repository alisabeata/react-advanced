import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer, { moduleName as authModule } from '../ducks/auth';

export default history =>
  combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    [authModule]: authReducer
  });
