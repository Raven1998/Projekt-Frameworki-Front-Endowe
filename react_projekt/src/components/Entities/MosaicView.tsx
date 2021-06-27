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

const Container3 = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
margin-top: 3em;
`;
const MiniContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-bottom: 2em;
`;
const MainBox = styled.div`
width: 80%;
height:10em;
display: flex;
flex-direction: row;
box-shadow: 0px 5px 5px 0px ${Colors.lightgrey};
padding: 10px;
margin-bottom:1em;
margin-left:10px;
`;
const MiniBox1 = styled.div`
display: flex;
align-items: center;
`;
const ImgMiniBox = styled.img`
width: ${imageSize[17]};
height: ${imageSize[17]};
border-radius: 10px;
margin-left: 10px;
`;
const MiniBox2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 6px;
`;
const TitleMiniBox = styled.span`
font-size: ${fontSize[16]};
font-weight: bold;
color:#3d50a6;
`;
const DescriptionMiniBox = styled.p`
font-size: ${fontSize[12]};
color: ${Colors.leftmenufontcolor};
margin-top: 2em;
`;

function MosaicView({ photoList }: any) {

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));



    if (usersList?.length > 0) {
        return (
            <Container3>
                {
                    photoList.slice(0, 4).map((v: any) => {
                        return (


                            <MiniContainer>

                                <MainBox>
                                    <MiniBox1>
                                        <ImgMiniBox src={v?.url} alt="api-image" />
                                    </MiniBox1>
                                    <MiniBox2>
                                        <TitleMiniBox>{v?.title}</TitleMiniBox>
                                        <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1]?.address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                    </MiniBox2>
                                </MainBox>

                                <MainBox>
                                    <MiniBox1>
                                        <ImgMiniBox src={v.url} alt="api-image" />
                                    </MiniBox1>
                                    <MiniBox2>
                                        <TitleMiniBox>{v?.title}</TitleMiniBox>
                                        <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1]?.address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                    </MiniBox2>
                                </MainBox>

                                <MainBox>
                                    <MiniBox1>
                                        <ImgMiniBox src={v.url} alt="api-image" />
                                    </MiniBox1>
                                    <MiniBox2>
                                        <TitleMiniBox>{v?.title}</TitleMiniBox>
                                        <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1]?.address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                    </MiniBox2>
                                </MainBox>

                                <MainBox>
                                    <MiniBox1>
                                        <ImgMiniBox src={v.url} alt="api-image" />
                                    </MiniBox1>
                                    <MiniBox2>
                                        <TitleMiniBox>{v?.title}</TitleMiniBox>
                                        <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1]?.address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                    </MiniBox2>
                                </MainBox>

                                <MainBox>
                                    <MiniBox1>
                                        <ImgMiniBox src={v.url} alt="api-image" />
                                    </MiniBox1>
                                    <MiniBox2>
                                        <TitleMiniBox>{v?.title}</TitleMiniBox>
                                        <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1]?.address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                    </MiniBox2>
                                </MainBox>

                                <MainBox>
                                    <MiniBox1>
                                        <ImgMiniBox src={v.url} alt="api-image" />
                                    </MiniBox1>
                                    <MiniBox2>
                                        <TitleMiniBox>{v?.title}</TitleMiniBox>
                                        <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1]?.address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                    </MiniBox2>
                                </MainBox>


                            </MiniContainer>
                        )
                    })
                }
            </Container3>
        )

    }
    else {
        return (<MiniContainer />)
    }
};
export default MosaicView