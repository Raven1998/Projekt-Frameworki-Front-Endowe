import { FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styleHelpers/Colors';
import { fontSize } from '../../styleHelpers/FontSizes';
import { imageSize } from '../../styleHelpers/ImageSize';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { IState } from '../../../reducers';
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IPhotoReducer } from '../../../reducers/photoReducers';
import { ICommentReducer } from '../../../reducers/commentsReducers';
import { IPostReducer } from '../../../reducers/postsReducers';
/*----------Wrapper--------------------*/
const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:90%;
height:100%;
Font-size:${fontSize[10]};
`;
/*-------------Container-1--------------*/
const Container1 = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:100%;
margin-top:2em;
`;
/*-----------Img-with-title--------------------*/

const TitleDiv = styled.div`
display:flex;
height:3em;
margin-left:15px;
`;
const Title = styled.p`
color:${Colors.white};
`;
const AuthorDiv = styled.div`
display:flex;
height:6em;
margin-left:15px;
`;
const AuthorDate = styled.p`
color:${Colors.white};
`;
const AuthorProfileImg = styled.img`
width:${imageSize[12]};
height:${imageSize[12]};
border:2px solid ${Colors.white};
border-radius:100%;
margin-left:10px;
`;
const AuthorName = styled.p`
color:${Colors.white};
margin-left:10px;
`;
/*----------Latest-publications------------------------*/
const LatestPublications = styled.div`
display:flex;
flex-direction:column;
width:70%;
background-color:${Colors.white};
`;
/*---------------------------------------*/
const HeaderArticleDiv = styled.div`
display:flex;
margin-left:15px;
margin-bottom:10px;
margin-top:10px;
`;
const HeaderArticle = styled.h3`
font-size:${fontSize[22]};
color:${Colors.grey1};
`;
/*---------------------------------------*/
const ArticleDiv = styled.div`
display:flex;
margin-left:15px;
flex-direction:column;
`;
/*---------------------------------------*/
const ArticleBox = styled.div`
width:90%;
height:12em;
display:flex;
flex-direction:row;
`;
const ArticleBoxDivImg = styled.div`
display:flex;
`;
const ArticleBoxImg = styled.img`
width:${imageSize[21]};
height:${imageSize[20]};
`;
/*---------------------------------------*/
const ArticleBoxInformation = styled.div`
display:flex;
flex-direction:column;
margin-left:10px;
`;
const ArticleBoxDivText = styled.div`
display:flex;
margin-top:10px;
margin-bottom:10px;
`;
const ArticleBoxText = styled.p`
font-size:${fontSize[16]};
`;
const ArticleProfileDiv = styled.div`
display:flex;
flex-direction:row;
`;
const ArticleAuthorDate = styled.p`
color:${Colors.lightgrey};
font-size:${fontSize[14]};
`;
const ArticleAuthorProfileImg = styled.img`
width:${imageSize[12]};
height:${imageSize[12]};
border:2px solid ${Colors.leftmenufontcolor};
border-radius:100%;
margin-left:10px;
`;
const ArticleAuthorName = styled.p`
color:${Colors.leftmenufontcolor};
margin-left:10px;
font-size:${fontSize[14]};
`;
/*---------------------------------------*/
const ArticleHyperLinkDiv = styled.div`
display:flex;
margin-left:15px;
`;
const CustomLinkArticle = styled(Link)`
text-decoration:none;
color:#3399ff;
font-weight:bold;
font-size:${fontSize[16]};
`;
/*--------Container-2-------------------------*/
const Container2 = styled.div`
width:100%;
height:30em;
display:flex;
margin-top:20px;
flex-wrap:nowrap;
overflow-x:scroll;
box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
border-radius:7px;
    a{
        text-decoration:none;
    }
`;
const WorkSpacesContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:row;
`;
const WorkSpacesMini = styled.div`
width:300px;
height:200px;
background-color:white;
display:block;
margin:2px;
margin-right:20px;
flex: 0 0 auto;
border:1px solid lightgray;
box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
border-radius:7px;
`;
const WorkSpacePhoto = styled.div`
width:100%;
height:80px;
border-radius: 5px 5px 0 0;
background-image: url("../media/workspaces/workspaces.jpg");
background-size: cover;
background-position: center;
`;
const WorkSpaceCard = styled.div`
width:40%;
display: flex;
    div {
        width: 75%;
        background-color: white;
        box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
        height: 100px;
        position: relative;
        top: -40px;
        text-align: bottom;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        border-radius: 4px;
    }
    div > img {
        width:50%;
    }
`;
const WorkSpaceTitle = styled.div`
opacity:0.8;
display:block;
margin-top:-90px;
margin-left: 120px;
color: #0a0909;
font-size:20px;
font-weight:600;
`;
const WorkSpaceBottom = styled.div`
margin-top:38px;
    .contract{
        opacity:0.9;
        color:grey;
        padding-left:13px;
    }
    .contract > .First {
        padding-right:5px;
        padding-left:5px;
        width:17px;
        height:17px;
    }
    .contract > .Second{
        width:20px;
        height:23px;
        margin:auto;
        padding-right:5px;
        padding-left:5px;
    }
`;
const WorkSpaceBottomTwo = styled.div`
margin-top:7px;
    p{
        color:grey;
        opacity:0.8;
        font-size:12px;
        margin-left:5px;
    }
`;

/*-------------Container-3--------------*/

const Container3 = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
margin-top:4em;
.pagination{
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin:20px;
    font-size:2em;
    color:#0381bd;
    font-weight:bold;
    cursor:pointer;
}
.paginationA{
    margin:10px;
}
`;
const ResumeWorkHeaderContainer = styled.div`
width:100%;
height:3em;
display:flex;
flex-direction:row;
margin-bottom:12px;
`;
const ResumeWorkHeaderDiv1 = styled.div`
width:20%;
display:flex;
flex-direction:row;
justify-content:flex-start;
`;
const HeaderTitle = styled.span`
font-size:${fontSize[18]};
margin-left:15px;
margin-top:15px;
font-weight:bold;
`;
const ResumeWorkHeaderDiv2 = styled.div`
width:80%;
display:flex;
flex-direction:row;
justify-content:flex-end;
margin-top:15px;
`;
const InputDiv = styled.div`
display:flex;
border:1px solid ${Colors.lightgrey};
height:2.5em;
`;
const InputFilter = styled.input`
border:none;
outline-style:none;
`;
const InputImg = styled.img`
width:${imageSize[14]};
height:${imageSize[14]};
background-color:${Colors.white};
margin-top:3px;
`;
const SelectFollowDiv = styled.div`
display:flex;
&:hover {
    border-radius:10px;
    height:3em;
    background-color: #cfffa8;
    color: #626262;
    cursor:pointer;
}
`;
const FollowImg = styled.img`
width:${imageSize[15]};
height:${imageSize[15]};
margin-right:8px;
margin-left:8px;
`;
const FollowSpan = styled.span`
color:${Colors.namesurname};
font-size:${fontSize[14]};
font-weight:bold;
margin-right:9px;
margin-top:10px;
`;
const DropdownArrow = styled.img`
width:8px;
height:8px;
margin-top:12px;
`;
/*--Resume-work--*/
const ResumeWorkMini = styled.h1`
    width: 100%;
    height:10em;
    background-color:white;
    border-radius:6px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    margin-top:20px;
`;
const ResumeWorkTitle = styled.div`
    font-size:20px;
    padding-top:10px;
    padding-left:10px;
    color:rgb(67,85,168);
    font-weight:bold;    
`;
const ResumeWorkText = styled.p`
    font-size:15px;
    color:rgb(148,151,174);
    padding-top:10px;
    padding-left:10px;
    padding-right:10px;
    padding-bottom: 10px;
    text-align:justify;
`;
const ResumeWorkBottom = styled.span`
    font-size:12px;
    color:rgb(148,151,174);
    padding-top:10px;
    padding-bottom:10px;
    padding-left:10px;
    padding-right:10px;
    img{
        width:12px;
        height:12px;
        margin-right:3px;
    }
`;
/*------------END----------------------*/

const CenterContent: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    const { commentList } = useSelector<IState, ICommentReducer>(state => ({
        ...state.comment
    }));
    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { photoList } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photo
    }));
    const [currentPage, setCurrentPage] = useState<number>(0);
    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setCurrentPage(selected);
    }

    const ImgWithTtile = styled.div`
display:flex;
width:30%;
flex-direction:column;
background-image: url('${photoList[1]?.url}');
background-size:cover;
background-repeat: none;
justify-content:flex-end;
`;
    const [textInput, setTextInput] = useState("");

    const handleChange = (event: any) => {
        setTextInput(event.target.value);
        filterRows();
    };
    const filterRows = () => {
        let worksFiltered = [...postList];
        if (textInput !== "") {
            const filterString = textInput.toLowerCase();
            worksFiltered = worksFiltered.filter((v) =>
                v.title.toLowerCase().includes(filterString)
            );
        }
        return worksFiltered;
    };
    const filtredRowsList = filterRows();


    if (usersList?.length > 0) {
        return (
            <Wrapper>

                <Container1>

                    <ImgWithTtile>
                        <TitleDiv>
                            <Title>{commentList[2]?.name}</Title>
                        </TitleDiv>

                        <AuthorDiv>
                            <AuthorDate> 7, jan 2020</AuthorDate>
                            <AuthorProfileImg src={photoList[2]?.url} alt="Profile-img" />
                            <AuthorName>{usersList[2]?.name}</AuthorName>
                        </AuthorDiv>
                    </ImgWithTtile>


                    <LatestPublications>
                        <HeaderArticleDiv>
                            <HeaderArticle>Latest publications</HeaderArticle>
                        </HeaderArticleDiv>

                        <ArticleDiv>

                            <ArticleBox>
                                <ArticleBoxDivImg>
                                    <ArticleBoxImg src={photoList[2]?.url} alt="write-img" />
                                </ArticleBoxDivImg>

                                <ArticleBoxInformation>
                                    <ArticleBoxDivText>
                                        <ArticleBoxText>
                                            {postList[2]?.body}
                                        </ArticleBoxText>
                                    </ArticleBoxDivText>
                                    <ArticleProfileDiv>
                                        <ArticleAuthorDate>7 jan 2020</ArticleAuthorDate>
                                        <ArticleAuthorProfileImg src={photoList[2]?.url} alt="Profile-img" />
                                        <ArticleAuthorName>{usersList[2]?.name}</ArticleAuthorName>
                                    </ArticleProfileDiv>
                                </ArticleBoxInformation>
                            </ArticleBox>

                            <ArticleBox>
                                <ArticleBoxDivImg>
                                    <ArticleBoxImg src={photoList[4]?.url} alt="write-img" />
                                </ArticleBoxDivImg>

                                <ArticleBoxInformation>
                                    <ArticleBoxDivText>
                                        <ArticleBoxText>
                                            {postList[2]?.body}
                                        </ArticleBoxText>
                                    </ArticleBoxDivText>
                                    <ArticleProfileDiv>
                                        <ArticleAuthorDate>7 jan 2020</ArticleAuthorDate>
                                        <ArticleAuthorProfileImg src={photoList[2]?.url} alt="Profile-img" />
                                        <ArticleAuthorName>{usersList[2]?.name}</ArticleAuthorName>
                                    </ArticleProfileDiv>
                                </ArticleBoxInformation>
                            </ArticleBox>


                            <ArticleBox>
                                <ArticleBoxDivImg>
                                    <ArticleBoxImg src={photoList[6]?.url} alt="write-img" />
                                </ArticleBoxDivImg>

                                <ArticleBoxInformation>
                                    <ArticleBoxDivText>
                                        <ArticleBoxText>
                                            {postList[2]?.body}
                                        </ArticleBoxText>
                                    </ArticleBoxDivText>
                                    <ArticleProfileDiv>
                                        <ArticleAuthorDate>7 jan 2020</ArticleAuthorDate>
                                        <ArticleAuthorProfileImg src={photoList[2]?.url} alt="Profile-img" />
                                        <ArticleAuthorName>{usersList[2]?.name}</ArticleAuthorName>
                                    </ArticleProfileDiv>
                                </ArticleBoxInformation>
                            </ArticleBox>


                        </ArticleDiv>

                        <ArticleHyperLinkDiv>
                            <CustomLinkArticle to="./Publications">See more publications</CustomLinkArticle>
                        </ArticleHyperLinkDiv>
                    </LatestPublications>

                </Container1>

                <HeaderTitle>Workspaces</HeaderTitle>
                <Container2>

                    <WorkSpacesContainer>
                        <Link to="/Workspace">
                            <WorkSpacesMini >
                                <WorkSpacePhoto />
                                <WorkSpaceCard><div><img src="./media/icons/smallcontract.png" alt="smallcontract" /></div></WorkSpaceCard>
                                <WorkSpaceTitle>Client contract</WorkSpaceTitle>
                                <WorkSpaceBottom>
                                    <p className="contract"><img className="First" src="../media/icons/smallcontract.png" alt="" /> Contract • <img className="Second" src="./media/icons/twopeople.png" alt="" /> 150 users</p>
                                </WorkSpaceBottom>
                                <WorkSpaceBottomTwo>
                                    <p>Last update 2 days ago</p>
                                </WorkSpaceBottomTwo>
                            </WorkSpacesMini>
                        </Link>

                        <Link to="/Workspace">
                            <WorkSpacesMini >
                                <WorkSpacePhoto />
                                <WorkSpaceCard><div><img src="./media/icons/entities.png" alt="entities" /></div></WorkSpaceCard>
                                <WorkSpaceTitle>Entities</WorkSpaceTitle>
                                <WorkSpaceBottom>
                                    <p className="contract"><img className="First" src="../media/icons/smallcontract.png" alt="" /> Contract • <img className="Second" src="./media/icons/twopeople.png" alt="" /> 150 users</p>
                                </WorkSpaceBottom>
                                <WorkSpaceBottomTwo>
                                    <p>Last update 2 days ago</p>
                                </WorkSpaceBottomTwo>
                            </WorkSpacesMini>
                        </Link>

                        <Link to="/Workspace">
                            <WorkSpacesMini >
                                <WorkSpacePhoto />
                                <WorkSpaceCard><div><img src="./media/icons/ecosystem.png" alt="ecossytem" /></div></WorkSpaceCard>
                                <WorkSpaceTitle>Eco System</WorkSpaceTitle>
                                <WorkSpaceBottom>
                                    <p className="contract"><img className="First" src="../media/icons/smallcontract.png" alt="" /> Contract • <img className="Second" src="./media/icons/twopeople.png" alt="" /> 150 users</p>
                                </WorkSpaceBottom>
                                <WorkSpaceBottomTwo>
                                    <p>Last update 2 days ago</p>
                                </WorkSpaceBottomTwo>
                            </WorkSpacesMini>
                        </Link>

                        <Link to="/Workspace">
                            <WorkSpacesMini >
                                <WorkSpacePhoto />
                                <WorkSpaceCard><div><img src="./media/icons/people.png" alt="workspaces" /></div></WorkSpaceCard>
                                <WorkSpaceTitle>Workspaces</WorkSpaceTitle>
                                <WorkSpaceBottom>
                                    <p className="contract"><img className="First" src="../media/icons/smallcontract.png" alt="" /> Contract • <img className="Second" src="./media/icons/twopeople.png" alt="" /> 150 users</p>
                                </WorkSpaceBottom>
                                <WorkSpaceBottomTwo>
                                    <p>Last update 2 days ago</p>
                                </WorkSpaceBottomTwo>
                            </WorkSpacesMini>
                        </Link>

                        <Link to="/Workspace">
                            <WorkSpacesMini >
                                <WorkSpacePhoto />
                                <WorkSpaceCard><div><img src="./media/icons/smallcontract.png" alt="smallcontract" /></div></WorkSpaceCard>
                                <WorkSpaceTitle>Corporate</WorkSpaceTitle>
                                <WorkSpaceBottom>
                                    <p className="contract"><img className="First" src="../media/icons/smallcontract.png" alt="" /> Contract • <img className="Second" src="./media/icons/twopeople.png" alt="" /> 150 users</p>
                                </WorkSpaceBottom>
                                <WorkSpaceBottomTwo>
                                    <p>Last update 2 days ago</p>
                                </WorkSpaceBottomTwo>
                            </WorkSpacesMini>
                        </Link>

                        <Link to="/Workspace">
                            <WorkSpacesMini >
                                <WorkSpacePhoto />
                                <WorkSpaceCard><div><img src="./media/icons/entities.png" alt="entities" /></div></WorkSpaceCard>
                                <WorkSpaceTitle>Entities</WorkSpaceTitle>
                                <WorkSpaceBottom>
                                    <p className="contract"><img className="First" src="../media/icons/smallcontract.png" alt="" /> Contract • <img className="Second" src="./media/icons/twopeople.png" alt="" /> 150 users</p>
                                </WorkSpaceBottom>
                                <WorkSpaceBottomTwo>
                                    <p>Last update 2 days ago</p>
                                </WorkSpaceBottomTwo>
                            </WorkSpacesMini>
                        </Link>
                    </WorkSpacesContainer>
                </Container2>


                <Container3>
                    <ResumeWorkHeaderContainer>
                        <ResumeWorkHeaderDiv1>
                            <HeaderTitle>Resume your work</HeaderTitle>
                        </ResumeWorkHeaderDiv1>
                        <ResumeWorkHeaderDiv2>
                            <InputDiv>
                                <InputFilter placeholder="Filter by title..." onChange={handleChange} ></InputFilter>
                                <InputImg src="./media/icons/search.png" alt="input-img"></InputImg>
                            </InputDiv>
                            <SelectFollowDiv>
                                <FollowImg src="./media/icons/followed.png" alt="follow-img"></FollowImg>
                                <FollowSpan>Followed</FollowSpan>
                                <DropdownArrow src="./media/icons/arrow-down.png" alt="arrow-img"></DropdownArrow>
                            </SelectFollowDiv>
                        </ResumeWorkHeaderDiv2>
                    </ResumeWorkHeaderContainer>


                    {filtredRowsList.slice(currentPage, currentPage + 10).map((v) => (
                        <ResumeWorkMini key={v.id}>
                            <ResumeWorkTitle>{v.title}</ResumeWorkTitle>
                            <ResumeWorkText>{v.body}</ResumeWorkText>
                            <ResumeWorkBottom>
                                <img src="../../media/icons/logout.png" alt=""></img>Subsid.corp  <img src="../../media/icons/bell.png" alt=""></img>Supplier contract + Updated 3 Days ago by John Doe
                            </ResumeWorkBottom>
                        </ResumeWorkMini>

                    ))}
                    < ReactPaginate
                        previousLabel={'PREVIOUS'}
                        nextLabel={'NEXT'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={postList.length}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        pageLinkClassName={'paginationA'}
                        activeClassName={'active'}
                        pageClassName={'page'}
                        previousClassName={'previous'}
                        nextClassName={'next'}
                    />

                </Container3>

            </Wrapper >
        )
    }
    else {
        return (<Wrapper />)
    }
};
export default CenterContent;