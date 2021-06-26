import { combineReducers } from 'redux';
import users, { IUsersReducer } from './usersReducers';
import posts, { IPostReducer } from './postsReducers';
import comment, { ICommentReducer } from './commentsReducers';
import photo, { IPhotoReducer } from './photoReducers';


export default combineReducers({
    users,
    posts,
    comment,
    photo
});

export interface IState {
    users: IUsersReducer;
    posts: IPostReducer;
    comment: ICommentReducer,
    photo: IPhotoReducer
}