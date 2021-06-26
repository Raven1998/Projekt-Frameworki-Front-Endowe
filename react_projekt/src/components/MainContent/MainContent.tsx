import { FC, } from 'react';
import styled from 'styled-components';

import { Publications } from './WorkSpace/Publications';
import { WorkSpace } from './WorkSpace/WorkSpace';
import { ResumeYourWork } from './WorkSpace/ResumeYourWork';




const Wrapper = styled.div `
    width: 100%;
    margin-left: 50px;
    margin-right: 100px;
    display:inline-block;
`;



export const MainContent: FC = () => {
    
        return (
            <Wrapper>
               <Publications/>
               <WorkSpace></WorkSpace>
               <ResumeYourWork />
            </Wrapper>
        );  
};