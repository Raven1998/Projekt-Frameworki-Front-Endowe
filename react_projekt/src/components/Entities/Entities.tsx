import { FC, useState, ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../styleHelpers/Colors';
import { fontSize } from '../styleHelpers/FontSizes';
import { imageSize } from '../styleHelpers/ImageSize';
import { IState } from '../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { IPostReducer } from '../../reducers/postsReducers';

/*-------------style-for-all-elements------------*/
const BC = styled.div`
height:100vh;
width:100%;
`;
const Wrapper = styled.div`
width:79%;
display:flex;
flex-direction:column;
background-color:${Colors.white};
font-size: ${fontSize[14]};
box-shadow:2px 2px 10px ${Colors.lightgrey};
margin-top:2em;
`;
/*-------------Container-1-------------------------*/
const Container1 = styled.div`
width:100%;
height:2.5em;
display:flex;
flex-direction:row;
margin-top:2em;
`;
/*----------------------*/
const Box1 = styled.div`
width:30%;
height:2em;
display:flex;
margin-left:1em;
`;
const Title1 = styled.span`
font-size:${fontSize[18]};
font-weight:bold;
color:${Colors.leftmenufontcolor};
`;
const Img1 = styled.img`
width:${imageSize[12]};
height:${imageSize[12]};
margin-left:10px;
cursor:pointer;
`;
/*----------------------*/
const Box2 = styled.div`
width:68%;
height:2em;
display:flex;
justify-content:flex-end;
`;
const Button1 = styled.button`
width:8em;
display:flex;
align-items:center;
justify-content:center;
background-color:#eaecf5;
border:1px solid #eaecf5;
border-radius:5px 0px 0px 5px;
cursor:pointer;
`;
const IconButton1 = styled.img`
width: ${imageSize[12]};
height: ${imageSize[12]};
`;
const TextButton1 = styled.span`
font-size: ${fontSize[16]};
font-weight: bold;
color:#3a4ea4;
margin-left: 8px;
`;
const Button2 = styled.button<{ flex: boolean }>`
${props => props.flex && css`
color:red;
`}
width: 5.5em;
display: flex;
align-items: center;
justify-content: center;
background-color:#ffffff;
border: none;
border: 1px solid #eaecf5;
border-radius: 0px 5px 5px 0px;
cursor: pointer;
`;
const IconButton2 = styled.img`
width: ${imageSize[12]};
height: ${imageSize[12]};
`;
const TextButton2 = styled.span`
font-size: ${fontSize[16]};
font-weight: bold;
color:#3a4ea4;
margin-left: 8px;
`;
/*-------------Container-2-----------------*/
const Container2 = styled.div`
width: 100%;
height: 5em;
display: flex;
flex-direction: row;
`;
/*----------header-filter,title,-----------*/
const ResumeWorkHeaderContainer = styled.div`
width: 100%;
height: 3em;
display: flex;
flex-direction: row;
margin-bottom: 2px;
`;
const ResumeWorkHeaderDiv1 = styled.div`
width: 40%;
display: flex;
flex-direction: row;
justify-content: flex-start;
`;
/*--------*/
const AllButton = styled.button`
width: 6em;
display: flex;
align-items: center;
margin-left: 15px;
margin-top: 15px;
background-color:#eaecf5;
border: 1px solid #eaecf5;
border-radius: 5px;
cursor: pointer;
`;
const ImgAll1 = styled.img`
width: ${imageSize[12]};
height: ${imageSize[12]};
`;
const ImgAll2 = styled.img`
width: ${imageSize[12]};
height: ${imageSize[12]};
`;
const TextAll = styled.span`
margin-left: 7px;
margin-right: 7px;
font-size: ${fontSize[12]};
font-weight: bold;
color:#3d50a6;
`;
/*-------*/
const CircleButton = styled.button`
width: 3em;
display: flex;
align-items: center;
margin-left: 15px;
margin-top: 15px;
border: none;
background-color:#ffffff;
border-radius: 5px;
cursor: pointer;
`;
const TextCircle = styled.span`
font-size: ${fontSize[16]};
font-weight: bold;
`;
/*-------*/
const SortButton = styled.button`
width: 5em;
display: flex;
align-items: center;
margin-left: 15px;
margin-top: 15px;
background-color:#ffffff;
border-left: 1px solid ${Colors.lightgrey};
border-right: none;
border-top: none;
border-bottom: none;
cursor: pointer;
`;
const ImgSort = styled.img`
width: ${imageSize[12]};
height: ${imageSize[12]};
margin-left: 10px;
`;
const TextSort = styled.span`
margin-left: 7px;
font-size: ${fontSize[12]};
font-weight: bold;
color: ${Colors.lightgrey};
`;
/*--------*/
const FilterButton = styled.button`
width: 6em;
display: flex;
align-items: center;
margin-left: 15px;
margin-top: 15px;
background-color:#ffffff;
border: none;
cursor: pointer;
`;
const ImgFilter = styled.img`
width: ${imageSize[12]};
height: ${imageSize[12]};
`;
const TextFilter = styled.span`
margin-left: 7px;
font-size: ${fontSize[12]};
font-weight: bold;
color: ${Colors.lightgrey};
`;
/*--------*/
const FullScreenButton = styled.button`
width: 3em;
display: flex;
align-items: center;
margin-left: 15px;
margin-top: 15px;
background-color:#ffffff;
border-left: 1px solid ${Colors.lightgrey};
border-right: none;
border-top: none;
border-bottom: none;
cursor: pointer;
`;
const ImgFullScreen = styled.img`
width: ${imageSize[12]};
height: ${imageSize[12]};
margin-left: 10px;
`;
/*---------*/
const ShareButton = styled.button`
width: 3em;
display: flex;
align-items: center;
margin-left: 15px;
margin-top: 15px;
background-color:#ffffff;
border-left: 1px solid ${Colors.lightgrey};
border-right: none;
border-top: none;
border-bottom: none;
cursor: pointer;
`;
const ImgShare = styled.img`
width: ${imageSize[12]};
height: ${imageSize[12]};
margin-left: 10px;
`;
const TextShare = styled.span`
margin-left: 7px;
font-size: ${fontSize[12]};
font-weight: bold;
color: ${Colors.lightgrey};
`;
/*-----------------------*/
const ResumeWorkHeaderDiv2 = styled.div`
width: 60%;
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-top: 15px;
`;
const InputDiv = styled.div`
display: flex;
align-items: center;
border: 1px solid ${Colors.lightgrey};
height: 2em;
margin-right: 8px;
`;
const InputFilter = styled.input`
border: none;
outline-style: none;
`;
const InputImg = styled.img`
width: ${imageSize[12]};
height: ${imageSize[12]};
background-color: ${Colors.white};
margin-right: 5px;
`;
/*------------------*/
const SelectFollowDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 2px solid #3d50a6;
border-radius: 5px;
margin-right: 1em;
margin-left: 1em;
padding: 10px;
cursor: pointer;
`;
const FollowImg = styled.img`
width: ${imageSize[14]};
height: ${imageSize[14]};
margin-right: 4px;
`;
const FollowSpan = styled.span`
color: ${Colors.namesurname};
font-size: ${fontSize[14]};
font-weight: bold;
margin-right: 4px;
`;
const DropdownArrow = styled.img`
width: ${imageSize[12]};
height: ${imageSize[12]};
`;
/*-------------Container-3-----------------*/
const Container3 = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
margin-top: 3em;
`;
const MiniContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
margin-bottom: 2em;
`;
const MainBox = styled.div`
width: 22vh;
display: flex;
flex-direction: row;
box-shadow: 0px 5px 5px 0px ${Colors.lightgrey};
padding: 10px;
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
/*-------------END-------------------------*/

const Entities: FC = () => {

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { photoList } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photo
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    //searcher content
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    if (usersList?.length > 0) {
        return (
            <BC>
                <Wrapper>
                    <Container1>
                        <Box1>
                            <Title1>Entities</Title1>
                            <Img1 src="./media/icons/cog.png" alt="setting-icon" />
                        </Box1>

                        <Box2>
                            <Button1>
                                <IconButton1 src="./media/entities/mosaic.svg" alt="mosaic-img" />
                                <TextButton1>Mosaic</TextButton1>
                            </Button1>
                            <Button2 flex={true} type='button'>
                                <IconButton2 src="./media/entities/list.svg" alt="list-img" />
                                <TextButton2>List</TextButton2>
                            </Button2>
                        </Box2>
                    </Container1>


                    <Container2>
                        <ResumeWorkHeaderContainer>
                            <ResumeWorkHeaderDiv1>
                                <AllButton>
                                    <ImgAll1 src="./media/entities/circle.svg" alt="img-circle" />
                                    <TextAll>All</TextAll>
                                    <ImgAll2 src="./media/entities/arrow.svg" alt="arrow-img" />
                                </AllButton>

                                <CircleButton>
                                    <TextCircle>. . .</TextCircle>
                                </CircleButton>

                                <SortButton>
                                    <ImgSort src="./media/entities/sort.svg" alt="sort-img" />
                                    <TextSort>Sort</TextSort>
                                </SortButton>

                                <FilterButton>
                                    <ImgFilter src="./media/entities/filter.svg" alt="filter-img" />
                                    <TextFilter>Filters</TextFilter>
                                </FilterButton>

                                <FullScreenButton>
                                    <ImgFullScreen src="./media/entities/fullscreen.svg" alt="fullscreen-img" />
                                </FullScreenButton>

                                <ShareButton>
                                    <ImgShare src="./media/entities/share.svg" alt="share-img" />
                                    <TextShare>Share</TextShare>
                                </ShareButton>



                            </ResumeWorkHeaderDiv1>
                            <ResumeWorkHeaderDiv2>
                                <InputDiv>
                                    <InputFilter placeholder="Search..." value={inputText} onChange={inputHandler} ></InputFilter>
                                    <InputImg src="./media/icons/search.png" alt="input-img"></InputImg>
                                </InputDiv>

                                <SelectFollowDiv>
                                    <FollowImg src="./media/icons/followed.png" alt="follow-img"></FollowImg>
                                    <FollowSpan>Followed</FollowSpan>
                                    <DropdownArrow src="./media/entities/arrow.svg" alt="arrow-img"></DropdownArrow>
                                </SelectFollowDiv>
                            </ResumeWorkHeaderDiv2>
                        </ResumeWorkHeaderContainer>

                    </Container2>

                    <Container3>

                        <MiniContainer>
                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[1]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[1]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[1]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[1]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>
                        </MiniContainer>


                        <MiniContainer>
                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[2]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[2]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[2]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[2]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>
                        </MiniContainer>


                        <MiniContainer>
                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[3]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[3]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[3]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[3]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>
                        </MiniContainer>

                        <MiniContainer>
                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[4]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[4]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[4]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[4]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>
                        </MiniContainer>

                        <MiniContainer>
                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[5]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[5]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[5]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[5]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>
                        </MiniContainer>


                        <MiniContainer>
                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[6]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[6]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[6]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>

                            <MainBox>
                                <MiniBox1>
                                    <ImgMiniBox src={photoList[6]?.url} alt="api-image" />
                                </MiniBox1>
                                <MiniBox2>
                                    <TitleMiniBox>{postList[1]?.title}</TitleMiniBox>
                                    <DescriptionMiniBox>{usersList[1]?.address.city} {usersList[1].address.street} {usersList[1].address.zipcode}</DescriptionMiniBox>
                                </MiniBox2>
                            </MainBox>
                        </MiniContainer>


                    </Container3>

                </Wrapper>
            </BC>
        )
    }
    else {
        return (<Wrapper />)
    }
};
export default Entities;