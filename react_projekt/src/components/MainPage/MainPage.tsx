import React, { FC , useEffect } from 'react';
import styled from 'styled-components';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { MainContent } from '../MainContent/MainContent';
import  { Test }  from '../TestPage/TestPage';
import  Entities  from '../Entities/Entities';
import Profile from '../Profile/Profile';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/postsActions';
import { getUsers } from '../../actions/usersActions';
import { getComments } from '../../actions/commentActions';
import { getPhoto } from '../../actions/photosActions';

type GetPosts = ReturnType<typeof getPosts>
type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>
type GetPhoto = ReturnType<typeof getPhoto>

const Wrapper = styled.section`
`;


const Content = styled.div`
    max-width: 1800px;
    display: flex;
`;

const MainPage: FC = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetPosts>(getPosts());
        dispatch<GetUsers>(getUsers());
        dispatch<GetComments>(getComments());
        dispatch<GetPhoto>(getPhoto());
    })

    return(
        <Router>
            <Wrapper>
                <TopBar />
                <Content>
                    <LeftMenu />
                    <Switch>
                    <Route path="/Entities">
                            <Entities />
                        </Route>
                        <Route path="/Profile">
                            <Profile />
                        </Route>
                        <Route path="/Ecosystem">
                            <Test />
                        </Route>
                        <Route path="/Publications">
                            <Test />
                        </Route>
                        <Route path="/Your Network">
                            <Test />
                        </Route>
                        <Route path="/Your Publications">
                            <Test />
                        </Route>
                        <Route path="/People">
                            <Test />
                        </Route>
                        <Route path="/Administration">
                            <Test />
                        </Route>
                        <Route path="/Client contract">
                            <Test />
                        </Route>
                        <Route path="/Supplier contract">
                            <Test />
                        </Route>
                        <Route path="/Corporate">
                            <Test />
                        </Route>
                        <Route path="/Group Norms">
                            <Test />
                        </Route>
                        <Route path="/Real estate contracts">
                            <Test />
                        </Route>
                        <Route path="/Privacy">
                            <Test />
                        </Route>
                        <Route path="/Settings">
                            <Test />
                        </Route>
                        <Route>
                            <MainContent/>
                        </Route>
                    </Switch>
                 </Content>    
            </Wrapper>
        </Router>
    );
};

export default MainPage;