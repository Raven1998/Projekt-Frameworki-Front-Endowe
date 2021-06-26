import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styleHelpers/Colors';

const WorkSpaceContent = styled.div `
    display: block;
`;

const WorkSpaceTitle = styled.p `
    color: ${Colors.blue2};
`;

const WorkSpaceWrapper = styled.div `
    display: flex;
    padding: 20px 0px;
`;

const WorkSpaceCard = styled.div `
    margin-right: 20px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px ${Colors.grey2};
    padding: 0px;
    width: 350px;
    height: 250px;
`;

const WorkSpaceCardTop = styled.div `
    height: 120px;
    width: 100%;
    background-image: url('./media/WorkSpaces.jpg');
    background-size: cover;
    background-position: center;
`;

const WorkSpaceCardCenter = styled.div `
    width:100%;
    height: 70px;
    display:flex;
`;

const WorkSpaceCardCenterLeft = styled.div ` 
    width:40%;
    display: flex;

    div {
        width: 70%;
        background-color: white;
        box-shadow: 0 0 5px 1px #dfdfdf;
        height: 100px;
        position: relative;
        top: -30px;
        text-align: bottom;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        border-radius: 2px;
    }
`;

const WorkSpaceCardCenterRight = styled.div ` 
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

const WorkSpaceCardBottom = styled.div ` 
    width:100%;
    height:60px;
    margin-top: 10px;
`;

const CardIcon = styled.img `
    width: 15px;
    vertical-align: middle;
    margin: 0px 5px;
    
    
`;


const CardIcon2 = styled.img ` 
    width: 40px;
    height: 40px;
    margin: 0px 5px;
    
`;

const Cardfooter = styled.h1 ` 
    margin-top: 10px;
    margin-left: 5px;
    font-size: 15px;
    color: ${Colors.grey2};  
`;

export const WorkSpace: FC = () => {
    return(
        <WorkSpaceContent>
            <WorkSpaceTitle>Workspaces</WorkSpaceTitle>
            <WorkSpaceWrapper>
                <WorkSpaceCard>
                   <WorkSpaceCardTop />
                   <WorkSpaceCardCenter>
                       <WorkSpaceCardCenterLeft>
                           <div> <CardIcon2 src = "./media/icons/entities2.png"/></div>
                       </WorkSpaceCardCenterLeft>
                       <WorkSpaceCardCenterRight>
                            <span>Client Contract</span>
                       </WorkSpaceCardCenterRight>
                   </WorkSpaceCardCenter>
                   <WorkSpaceCardBottom>
                        <p>
                                <CardIcon src="./media/icons/entities2.svg" alt=""/> Contact
                                <CardIcon src="./media/icons/kropka.png" alt = ""/>
                                <CardIcon src="./media/icons/user-plus.svg" alt = ""/> 150 users
                        </p>
                        <Cardfooter>Last update 2 days ago</Cardfooter>
                   </WorkSpaceCardBottom>
                </WorkSpaceCard>
                <WorkSpaceCard>
                   <WorkSpaceCardTop />
                   <WorkSpaceCardCenter>
                       <WorkSpaceCardCenterLeft>
                           <div> <CardIcon2 src = "./media/icons/cog.png"/></div>
                       </WorkSpaceCardCenterLeft>
                       <WorkSpaceCardCenterRight>
                            <span>Supplier Contract</span>
                       </WorkSpaceCardCenterRight>
                   </WorkSpaceCardCenter>
                   <WorkSpaceCardBottom>
                        <p>
                                <CardIcon src="./media/icons/entities2.svg" alt=""/> Contact
                                <CardIcon src="./media/icons/kropka.png" alt = ""/>
                                <CardIcon src="./media/icons/user-plus.svg" alt = ""/> 25 users
                        </p>
                        <Cardfooter>Last update 2 days ago</Cardfooter>
                   </WorkSpaceCardBottom>
                </WorkSpaceCard>
                <WorkSpaceCard>
                   <WorkSpaceCardTop />
                   <WorkSpaceCardCenter>
                       <WorkSpaceCardCenterLeft>
                           <div> <CardIcon2 src = "./media/icons/entities2.png"/></div>
                       </WorkSpaceCardCenterLeft>
                       <WorkSpaceCardCenterRight>
                            <span>Corporate</span>
                       </WorkSpaceCardCenterRight>
                   </WorkSpaceCardCenter>
                   <WorkSpaceCardBottom>
                        <p>
                                <CardIcon src="./media/icons/entities2.svg" alt=""/> Corporate
                                <CardIcon src="./media/icons/kropka.png" alt = ""/>
                                <CardIcon src="./media/icons/user-plus.svg" alt = ""/> 25 users
                        </p>
                        <Cardfooter>Last update 2 days ago</Cardfooter>
                   </WorkSpaceCardBottom>
                </WorkSpaceCard>
            </WorkSpaceWrapper>
        </WorkSpaceContent>
    );
};