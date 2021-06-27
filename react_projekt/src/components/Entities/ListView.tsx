import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../styleHelpers/Colors';
import { fontSize } from '../styleHelpers/FontSizes';
import { imageSize } from '../styleHelpers/ImageSize';
import { IState } from '../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IPostReducer } from '../../reducers/postsReducers';


const MiniBoxesContent = styled.div`
    background-color:white;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom: 20px;
    padding-top: 30px;
`;


const MiniBoxData = styled.div`
    background-color:white;
    box-shadow:1px 2px 5px 2px ${Colors.lightgrey};
    width: 90%;
    height: 70px;
    display:flex;
    margin-bottom: 2.5em;
`;
const MiniBoxDataLeft = styled.div`
    width: 60px;
    height: 60px;
    img {
        width: 60px;
        height: 60px;
    }
`;
const MiniBoxDataRight = styled.div`
    width: 80%;
    height: 100px;
    text-align:left;
    box-sizing: border-box;
    padding: 10px;
    margin-left:15px;
`;
const DescriptionMiniBox = styled.p`
font-size: ${fontSize[12]};
color: ${Colors.leftmenufontcolor};
margin-top: 2em;
`;
const TitleMiniBox = styled.span`
font-size: ${fontSize[16]};
font-weight: bold;
color:#3d50a6;
`;
const ImgMiniBox = styled.img`
width: ${imageSize[17]};
height: ${imageSize[17]};
border-radius: 10px;
margin-left: 10px;
margin-top:5px;
`;
function ListView({ photoList }: any) {

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    return (
        <MiniBoxesContent>
            {
                photoList.slice(0, 30).map((v: any) => {
                    return (

                        <MiniBoxData>
                            <MiniBoxDataLeft>
                                <ImgMiniBox src={v.url} alt="api-image" />
                            </MiniBoxDataLeft>
                            <MiniBoxDataRight>
                                <TitleMiniBox>{v.title}</TitleMiniBox>
                                <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1]?.address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                            </MiniBoxDataRight>
                        </MiniBoxData>
                    )
                })
            }
        </MiniBoxesContent>
    )
}

export default ListView