import { Dispatch } from 'redux';
import * as actionsTypes from '../actions/actionTypes/photoTypes';
import { IPhoto } from '../interfaces/IPhoto';

export const getPhoto = (): Promise<IPhoto[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((photoList: IPhoto[]) => {
            dispatch({
                type: actionsTypes.GET_PHOTO,
                photoList
            })
        })
}) as any;