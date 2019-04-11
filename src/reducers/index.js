import { combineReducers } from 'redux';
import friends from './reducer-friend'
import Posts from './reducer-post'
import UserReducer from './reducer-currentUser'
import Users from './reducer-users'
import ProfileReducer from './reducer-profile'

const rootReducer = combineReducers({
  currentUser: UserReducer,
  Users,
  friends,
  Posts,
  currentProfile: ProfileReducer
});

export default rootReducer;