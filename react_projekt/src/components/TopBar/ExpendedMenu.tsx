import { ChangeEvent, FC , useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../styleHelpers/Colors';
import { fontSize } from '../styleHelpers/FontSizes';

import { Link } from "react-router-dom";

const Wrapper = styled.div `
    position: absolute;
    top: 46px;
    left: 300px;
    background: white;
    padding: 10px;
    border: 1px solid;
    z-index: 999;
    ul {
        border: 1px solid ${Colors.grey1};
    }
`;
const Wrapper2 = styled.aside ` 
    flex: 2;
    margin-right: -23px;
`;

const Menu = styled.div `
    background: ${Colors.white};
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.07);
    border-radius: 4px;
    width: 90%;
    margin-left: 5px;
    margin-top: 5px;
`;

const InputWrapper = styled.div `
    width: 300px;
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
`;

const CustomInput = styled.input `
    width: 90%;
    border: 0px;
    text-align: left;
    margin-bottom: 5px;

    &::placeholder{
        color: #e0dcdc;
        font-weight: bold;
    }   
`;

const CustomLink = styled(Link) ` 
    text-decoration:none;
    color: ${Colors.MenuColors};
`;

const CustomImg = styled.img ` 
    margin-right: 15px;
        width: 15px;
        height: 15px;
`;

const MenuList = styled.ul ` 
    padding: 16px;
`;

const UserList = styled.ul `
    padding: 16px;
`;

const PlatformItem = styled.li`
    align-items:center;
    margin-bottom: 8px;
    margin-top: 5px;
    cursor: pointer;
`;

const ListElementTitle = styled.div `
    display:flex;
`;

const Title = styled.span `
    font-size:${fontSize[18]};
    color:${Colors.grey1};
    text-align: left;
    margin-left:6px;
    margin-bottom:3px;   
`;

const WorkspacesItem = styled.li `
    align-items: center;
    margin-bottom: 8px;
    margin-top: 5px;
    cursor: pointer;
`;

const AccountItem = styled.li ` 
    align-items: center;
    margin-bottom: 8px;
    margin-top: 5px;
    cursor: pointer;
`;

const UserImg = styled.img ` 
`;

const Name = styled.p `
    color: ${Colors.black};
    text-transform: capitalize;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 15px;
`;

const Description = styled.p ` 
    color: ${Colors.blue2};
    font-size: ${fontSize[12]};
    font-weight: 100;
    margin-bottom: 5px;
`;
const Logout = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`;

const ListLogout = styled.div `
    height: 35px;
`;

const Scroll = styled.div `
    overflow: scroll;
`;





export const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    
    return(
        <Wrapper>
            <Wrapper2>
                <Menu>
                    <InputWrapper>
                        <CustomInput placeholder="Filter...." type="text" value={inputText} onChange={inputHandler} />
                    </InputWrapper>
                    <MenuList>
                    <Scroll>
                    {'Platform'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <ListElementTitle>
                            <Title>Platform</Title>
                        </ListElementTitle>
                        }
                        <PlatformItem>
                            {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CustomLink to="/Home">
                                <li><CustomImg src="./media/icons/house2.png" alt=""></CustomImg>Home</li>
                            </CustomLink>
                            }

                            {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CustomLink to="/Publications">
                                <li><CustomImg src="./media/icons/publications.png" alt=""></CustomImg>Publications</li>
                            </CustomLink>
                            }

                            {'People'.toLowerCase().includes(inputText.toLowerCase()) &&   
                            <CustomLink to="/People">
                                <li><CustomImg src="./media/icons/people.png" alt=""></CustomImg>People</li>
                            </CustomLink>
                            }

                            {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CustomLink to="/Entities">
                                <li><CustomImg src="./media/icons/entities.png" alt=""></CustomImg>Entities</li>
                            </CustomLink>
                            }

                            {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CustomLink to="/Administration">
                                <li><CustomImg src="./media/icons/administration.png" alt=""></CustomImg>Administration</li>
                            </CustomLink>
                            }
                        </PlatformItem>
                        {'Workspaces'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <ListElementTitle>
                            <Title>Workspaces</Title>
                        </ListElementTitle>
                        }
                        <WorkspacesItem>
                            {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CustomLink to="/Client contract">
                                <li><CustomImg src="./media/icons/entities2.png" alt=""></CustomImg>Client contract</li>
                            </CustomLink>
                            }

                            {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                           <CustomLink to="/Supplier contract">
                                <li><CustomImg src="./media/icons/cog.png" alt=""></CustomImg>Supplier contract</li>
                            </CustomLink>
                            }

                            {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CustomLink to="/Corporate">
                                <li><CustomImg src="./media/icons/entities2.png" alt=""></CustomImg>Corporate</li>
                            </CustomLink>
                            }

                            {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CustomLink to="/Group Norms">
                                <li><CustomImg src="./media/icons/network.png" alt=""></CustomImg>Group Norms</li>
                            </CustomLink>
                            }

                            {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <CustomLink to="/Real estate contracts">
                                <li><CustomImg src="./media/icons/publications.png" alt=""></CustomImg>Real estate contracts</li>
                            </CustomLink>
                            }    
                        </WorkspacesItem>
                        </Scroll>
                    </MenuList>
                    <UserList>
                    {'Account'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElementTitle>
                        <Title>Account</Title>
                    </ListElementTitle>
                    }
                        <AccountItem>
                        {'See Profile'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <CustomLink to="/Profile">
                            <UserImg />
                            <Name>Humberta Swift</Name>
                            <Description>See Profile</Description>
                        </CustomLink>
                        }

                        {'Privacy'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <CustomLink to="/Privacy">
                                <li><CustomImg src="./media/icons/privacy.png" alt=""></CustomImg>Privacy</li>
                        </CustomLink>
                        }

                        {'Settings'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <CustomLink to="/Settings">
                            <li><CustomImg src="./media/icons/settings.png" alt=""></CustomImg>Settings</li>
                        </CustomLink>
                        }
                        </AccountItem>
                    </UserList>
                    <ListLogout>
                    {'Logout'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <CustomLink to="/Logout">
                        <Logout><CustomImg src="./media/icons/logout.png" alt=""></CustomImg>Logout</Logout>
                    </CustomLink>
                    
                    }
                    </ListLogout>
               </Menu>
            </Wrapper2> 
        </Wrapper>
    );
};
