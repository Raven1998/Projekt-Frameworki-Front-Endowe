import { FC, } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styleHelpers/Colors';
import ReactPaginate from 'react-paginate';
import { IState } from '../../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IPhotoReducer } from '../../../reducers/photoReducers';
import { ICommentReducer } from '../../../reducers/commentsReducers';
import { IPostReducer } from '../../../reducers/postsReducers';


const PublicationsContent = styled.div `
    display:flex;
    border-radius: 5px;
    box-shadow: 0px 1px 3px ${Colors.grey2};
    margin: 20px 0px;
`;

const LeftImg = styled.div `
    position: relative;
    background-image: url('./media/tower.jpg');
    background-size: auto;
    background-repeat: no-repeat;
    background-size: 500px;
    width: 500px;
    height: 580px;
`;

const ImgText = styled.div `
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: ${Colors.white};
`;

const ImgComment = styled.img ` 
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%; 
`;

const ImgPublications = styled.img `
    display: flex;
    margin: 15px 0px;
    width: 100px;
    height: 100px;
`;

const LastPublications = styled.div ` 
    margin: 15px 0 15px 15px;
    width: 50%;
`;

const LastPublicationsContent = styled.div ` 
    margin: 15px 0px;
`;

const LastPublicationsTitle = styled.p ` 
    color: ${Colors.blue};
    font-size: 20px;
`;

const LastPublicationsComment = styled.div `
    display: flex;
    position: relative;
    padding: 10px;
    width: 100%; 
`;

const PublicationsText = styled.div `
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
`;

const Footer = styled.div ` 
    margin-top: 25px;
`;


const LastPublicationsBottom = styled.h1 `
    margin-top: 30px;
    font-size: 20px;
    color: ${Colors.blue};
`;



export const Publications: FC = () => {

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

    return(
        <PublicationsContent>
            <LeftImg>
            <ImgText>{commentList[2]?.name}
                
                <p className = "Description">
                    13.05.2021 <ImgComment src={photoList[2]?.url} alt="Profile-img"/>{usersList[2]?.name}
                </p>
                </ImgText>
            </LeftImg>
            <LastPublications>
                <LastPublicationsContent>
                    <LastPublicationsTitle>Latest Publications</LastPublicationsTitle>
                    <LastPublicationsComment>
                        <ImgPublications src="./media/hands.jpg" alt=""/>
                        <PublicationsText>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.... and
                            one more line for the demo
                            <Footer>
                            <p className="textDecription">17.04.2021 <ImgComment src="./media/Lion.jpg" alt=""/> Rafal Kruczkowski</p>
                            </Footer>
                        </p>
                        </PublicationsText>
                    </LastPublicationsComment>
                    <LastPublicationsComment>
                        <ImgPublications src="./media/hands.jpg" alt=""/>
                        <PublicationsText>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.... and
                            one more line for the demo
                            <Footer>
                            <p className="textDecription">17.04.2021 <ImgComment src="./media/Lion.jpg" alt=""/> Rafal Kruczkowski</p>
                            </Footer>
                        </p>
                        </PublicationsText>
                    </LastPublicationsComment>
                    <LastPublicationsComment>
                        <ImgPublications src="./media/hands.jpg" alt=""/>
                        <PublicationsText>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.... and
                            one more line for the demo
                            <Footer>
                            <p className="textDecription">17.04.2021 <ImgComment src="./media/Lion.jpg" alt=""/> Rafal Kruczkowski</p>
                            </Footer>
                        </p>
                        </PublicationsText>
                    </LastPublicationsComment>
                    <LastPublicationsBottom>See more publications</LastPublicationsBottom>
                </LastPublicationsContent>
            </LastPublications>
        </PublicationsContent>
    );
};