import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../styleHelpers/Colors';
import { fontSize } from '../styleHelpers/FontSizes';

import { Link } from "react-router-dom";
import { IState } from '../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { ICommentReducer } from '../../reducers/commentsReducers';
import { IPostReducer } from '../../reducers/postsReducers';
import { imageSize } from '../styleHelpers/ImageSize';

const Wrapper = styled.aside `
    flex:2;
    margin-right: 16px;
`;
 const User = styled.div `
    background: ${Colors.white};
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.07);
    border-radius: 4px;
    width: 250px;
    margin-left: 30px;
    margin-top: 15px;
`;

const Header = styled.div `
    padding: 16px;
    border-bottom: 1px solid ${Colors.grey2};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
`;

const ImageCard = styled.div `
    border-radius: 50%;
    margin-bottom: 10px;
    overflow: hidden;
`;

const Image = styled.img `
    width: ${imageSize[18]};
    height: ${imageSize[17]};
    object-fit: cover;
`;

const Name = styled.p ` 
    color: ${Colors.blue2};
    margin-bottom: 10px;
    text-transform: capitalize;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size:20px;
`;

const Decription = styled.p ` 
    color: ${Colors.grey1};
    font-size: ${fontSize[18]};
    font-weight: 200;
    margin-bottom: 10px;
`;

const UserList = styled.ul ` 
    padding: 16px;
`;

const Item = styled.li ` 
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserItemLinkContainer = styled.div ` 
    display: flex;
    align-items: center;
`;

const UserItemLink = styled.a ` 
    color: ${Colors.black};
    text-decoration: none;
    font-size:15px;
`;

const CardIconNetwork = styled.i ` 
    margin-right: 8px;
    width: 24px;
    height: 24px;
    background-image: url('./media/icons/people.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

const CardIconPublications = styled(CardIconNetwork) ` 
    background-image: url('./media/icons/publications.svg'); 
`;

const CardButtonNetwork = styled.button ` 
    border: 1px solid ${Colors.black};
    width: 32px;
    height: 24px;
    background-color: ${Colors.white};
    border-radius: 4px;
    margin: 10px;
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.07);
    background-image: url('./media/icons/network.svg');
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center;
    cursor: pointer;
`;

const CardButtonPublications = styled(CardButtonNetwork) ` 
    background-image: url('./media/icons/plus.svg');
    margin-left: 40px;
`;

const Navigator = styled.nav ` 
    padding: 16px;
`;

const List = styled.ul ` 
`;

const ListItem = styled.li ` 
    display:flex;
    align-items: center;
    margin-bottom: 16px;
`;

const Link1 = styled.a `
    margin: 10px;
    color: ${Colors.black};
    text-decoration: none;
`;

const PublicationsIcon = styled.i ` 
    margin-left: 16px;
    width: 30px;
    height: 30px;
    background-image: url('./media/icons/publications.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const EcosystemIcon = styled(PublicationsIcon)`
    background-image: url('./media/icons/ecosystem.svg');
`;

const EntitiesIcon = styled(PublicationsIcon) ` 
    background-image: url('./media/icons/entities.svg');
`;
const Link2 = styled(Link) `
    text-decoration:none;
    color: ${Colors.MenuColors};
`;




 export const LeftMenu: FC = () => {

   
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

    if(usersList?.length>0)
    {
    return(
            <Wrapper>
                <User>
                    <Header>
                        <ImageCard>
                            <Link2 to="/Profile">
                            <Image src={photoList[1]?.url} alt="img" />
                            </Link2>
                        </ImageCard>
                        <Link2 to="/Profile">
                        <Name>Humberta Swift</Name>
                        </Link2>
                        <Decription>Job title - Company</Decription>
                    </Header>
                    <UserList>
                        <Item>
                            <UserItemLinkContainer>
                                <CardIconNetwork />
                                <Link2 to="/Your Network">
                                <UserItemLink href="#">Your Network</UserItemLink>
                                </Link2>
                            </UserItemLinkContainer>
                            <Link2 to="/Your Network">
                            <CardButtonNetwork />
                            </Link2>
                        </Item>
                        <Item>
                            <UserItemLinkContainer>
                                <CardIconPublications/>
                                <Link2 to="/Your Publications">
                                <UserItemLink href="#">Your Publications</UserItemLink>
                                </Link2>
                                <Link2 to="/Your Publications">
                                <CardButtonPublications />
                                </Link2>
                            </UserItemLinkContainer>
                        </Item>
                    </UserList>
                </User>
                <Navigator>
                    <List>
                        <ListItem>
                            <PublicationsIcon />
                            <Link2 to="/Publications">
                            <Link1 href = '#'>Publications</Link1>
                            </Link2>
                        </ListItem>
                        <ListItem>
                            <EcosystemIcon />
                                <Link2 to="/Ecosystem">
                                <Link1 href = '#'>Ecosystem</Link1>
                            </Link2>
                        </ListItem>
                        <ListItem>
                            <EntitiesIcon />
                            <Link2 to="/Entities">
                            <Link1 href = '#'>Entities</Link1>
                            </Link2>
                        </ListItem>
                    </List>
                </Navigator>
            </Wrapper>
    )
    }
    else{
        return(<Wrapper/>)
    }
    
};

export default LeftMenu;