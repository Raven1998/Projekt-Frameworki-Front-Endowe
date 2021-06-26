import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Colors } from '../styleHelpers/Colors';
import { fontSize } from '../styleHelpers/FontSizes';
import { imageSize } from '../styleHelpers/ImageSize';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { IState } from '../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { ICommentReducer } from '../../reducers/commentsReducers';
import { IPostReducer } from '../../reducers/postsReducers';
import { UserInstance } from '../../interfaces/ISingleUser';
import App from '../Profile/components/App';


const Wrapper = styled.div`
display: flex;
flex-direction:column;
width:70%;
height:100%;
margin-right: 50px;
margin-top:3em;
margin-left:10em;
background-color:#ffffff;
font-size: ${fontSize[14]};
box-shadow:2px 2px 10px ${Colors.lightgrey};
font-size:21px;
`;


const Container1 = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
`;
const BoxContainer1 = styled.div`
display:flex;
align-items:center;
margin-right:30px;
margin-top:20px;
`;
const ImgContainer1 = styled.img`
width:${imageSize[14]};
margin-right:5px;
cursor:pointer;
`;
const SpanContainer1 = styled.span`
color:${Colors.grey1};
font-weight:bold;
cursor:pointer;
`;



const Profile: FC = () => {
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

    if (usersList?.length > 0) {
        return (
            <Wrapper>

                <Container1>
                    <BoxContainer1>
                        <ImgContainer1 src="./media/icons/comments.svg" alt="message" />
                        <SpanContainer1>Message</SpanContainer1>
                    </BoxContainer1>

                    <BoxContainer1>
                        <ImgContainer1 src="./media/icons/network.svg" alt="message" />
                        <SpanContainer1>Create a request</SpanContainer1>
                    </BoxContainer1>

                    <BoxContainer1>
                        <ImgContainer1 src="./media/icons/entities.svg" alt="message" />
                        <SpanContainer1>Add to a cluster</SpanContainer1>
                    </BoxContainer1>

                </Container1>

                <App />

            </Wrapper>
        )
    }
    else {
        return (<Wrapper />)
    }
};
export default Profile;