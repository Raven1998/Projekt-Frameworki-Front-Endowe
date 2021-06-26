import { ISinglePost } from '../interfaces/ISinglePost';
import * as actionTypes from '../actions/actionTypes/postTypes';

export interface IPostReducer {
    postList: ISinglePost[];
}

const defaultState = (): IPostReducer => ({
    postList: [],
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_POST: {
            const postData: actionTypes.IPostTypes['GET_POST'] = action;
            return {
                ...state,
                postList: postData.postList
            }
        }
        default: {
            return state;
        }
    }
}