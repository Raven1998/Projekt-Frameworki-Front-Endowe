import { ISingleComment } from '../../interfaces/ISingleComment';

export const GET_COMMENT = 'GET_COMMENT';

export interface IPostTypes {
    GET_COMMENT: {
        commentList: ISingleComment[];
    };
}