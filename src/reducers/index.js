import { combineReducers } from 'redux';
import friends from './reducer-friend'
import Posts from './reducer-post'
import UserReducer from './reducer-currentUser'
import Users from './reducer-users'
import ProfileReducer from './reducer-profile'
import comments from './reducer-comment'

const rootReducer = combineReducers({
  currentUser: UserReducer,
  Users,
  friends,
  Posts,
  comments,
  currentProfile: ProfileReducer
});

export default rootReducer;