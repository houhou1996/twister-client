import { combineReducers } from 'redux';
import FriendsReducer from './reducer-friend'
import Posts from './reducer-post'
import UserReducer from './reducer-currentUser'
import Users from './reducer-users'

const rootReducer = combineReducers({
  currentUser: UserReducer,
  Users,
  friends : FriendsReducer,
  Posts
});

export default rootReducer;