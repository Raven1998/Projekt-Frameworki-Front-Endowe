import { FC } from 'react';
import styled, { css } from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Wrapper } from '../styleHelpers/Components';
import { Colors } from '../styleHelpers/Colors';
import { ExpandedMenu } from './ExpendedMenu';

import { Link } from "react-router-dom";

const Wrapper2 = styled(Wrapper)`
    padding: 4px;
    box-shadow: 0px 5px 8px -1px rgba(0,0,0,0.08);
`;

const InnerWrapper = styled.div `
    width: 100%;
    padding: 5px 20px;
    background: ${Colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 35px;
`;

const CustomLink = styled(Link) `
    text-decoration:none;
    color: ${Colors.MenuColors};
`;

const ImgBackground = styled.div<{showBg: boolean}>`
    ${props => props.showBg && css`
    background: ${Colors.grey1};
    border-radius: 50%;
    margin-left: 5px;
    `};
`;

const InputWrapper = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #e0dcdc;
    border-radius: 3px;
`;
const CustomImg = styled.img`
    margin: 10px;
    text-align: right;
`;

const CustomInput = styled.input`
    width: 95%;
    border: 0px;
    text-align: center;

    &::placeholder {
        color: #e0dcdc;
        font-weight: bold;
    }
`;

const RightIcons = styled.div `
    display: inline-flexbox;
    justify-content: center;
    align-items: center;
`;

const LeftSide = styled.div `
    align-items:center;
    display: inline-flexbox;
    justify-content: center;
    margin: 10px;
    padding: 4px;
`;
const MenuWrapper = styled.div `
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;
const ImgMenu = styled.div ` 
    margin-left: 50px;
`;
const ImgHouse = styled.div ` 
    margin-right: 20px;
`;

export const TopBar: FC = () => {
    
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const menuHandler = () => {
        toggleDropdown();
    }
    return(
        <Wrapper2>
            <InnerWrapper>
                <CustomLink to='/Home'>
            <LogoImg src= "./media/logo.png" />
                </CustomLink>
                   <MenuWrapper ref={wrapperRef}>
                       
                        <LeftSide onClick={menuHandler}>
                        
                            <ImgHouse>
                           <img src="./media/icons/house2.png" alt="" />
                           </ImgHouse>
                           <span> Home </span>
                           <ImgMenu>
                       <img src="./media/icons/arrow-down.png" alt="" />
                     
                            </ImgMenu>
                       </LeftSide>
                       {dropdownOpen &&
                            <ExpandedMenu />
                       }
                   </MenuWrapper>
                <InputWrapper>
                    <CustomInput placeholder="Search Legalcluster" type = "text" />
                    <CustomImg src="./media/icons/search.png" alt="" title="" />
                </InputWrapper>
                <RightIcons>
                    <CustomLink to='/Home'>
                    <CustomImg src="./media/icons/house.png" />
                    </CustomLink>
                    <ImgBackground showBg>
                        <CustomImg src="./media/icons/comments.png" />
                    </ImgBackground>
                    <ImgBackground showBg>
                        <CustomImg src="./media/icons/bell.png" />
                    </ImgBackground>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    
    );
};

