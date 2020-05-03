import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import headerReducer from './header/header.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};
const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  header: headerReducer,
});

export default persistReducer(persistConfig, rootReducer);
