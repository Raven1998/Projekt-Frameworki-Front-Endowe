import { IPhoto } from '../../interfaces/IPhoto';

export const GET_PHOTO = 'GET_PHOTO';

export interface IPhotoTypes {
    GET_PHOTO: {
        photoList: IPhoto[];
    };
}