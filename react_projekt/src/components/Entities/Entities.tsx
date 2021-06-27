import {  useState } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../styleHelpers/Colors';
import { fontSize } from '../styleHelpers/FontSizes';
import { imageSize } from '../styleHelpers/ImageSize';
import { IState } from '../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import MosaicView from './MosaicView';
import ListView from './ListView';
import EntitiesFilter from './EntitiesFilter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
/*-------------style-for-all-elements------------*/
const BC = styled.div`
height:100%;
width:100%;
&.expanded {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    margin: 0;
    overflow: auto;
    height: 100%;
    background-color: ${Colors.white};
    transition: 0.2s;
    display: block;
  }
`;
const Wrapper = styled.div`
width:100%;
height:100%;
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
const Button1 = styled.div<{ isHide?: string }>`
width:8em;
display:flex;
align-items:center;
justify-content:center;
background-color:#eaecf5;
border:1px solid #eaecf5;
border-radius:5px 0px 0px 5px;
cursor:pointer;
${props => props.isHide === `grid`
        ? css`background-color: #eaecf5;`
        : css`background-color: #white;`
    }
    &:hover {
        background-color: #cfffa8;
        color: #626262;
    }
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
const Button2 = styled.div<{ isHide?: string }>`
width: 5.5em;
display: flex;
align-items: center;
justify-content: center;
background-color:#ffffff;
border: none;
border: 1px solid #eaecf5;
border-radius: 0px 5px 5px 0px;
cursor: pointer;
${props => props.isHide === 'list'
        ? css`background-color: #eaecf5;`
        : css`background-color: #white;`
    }
&:hover {
background-color: #cfffa8;
color: #626262;
}
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
&:hover {
    background-color: #cfffa8;
    color: #626262;
}
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
&:hover {
    background-color: #cfffa8;
    color: #626262;
}
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
&:hover {
    background-color: #cfffa8;
    color: #626262;
}
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
&:hover {
    background-color: #cfffa8;
    color: #626262;
}
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
&:hover {
    background-color: #cfffa8;
    color: #626262;
}
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
&:hover {
    background-color: #cfffa8;
    color: #626262;
}
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
&:hover {
    background-color: #cfffa8;
    color: #626262;
}
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


/*-------------END-------------------------*/




function Entities(props: { isHide?: boolean }) {
    const { photoList } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photo
    }));
    console.log(photoList)
    const [openFilter, isOpen] = useState(false);
    const [viewType, isViewType] = useState('grid');
    const [expanded, setExpanded] = useState(false);



    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    const shareUrl = window.location.href;

    
    const [textInput, setTextInput] = useState<string>('');

    const expandView = () => {
        setExpanded(function changeValue(oldValue) {
          return !oldValue;
        });
      }

    const handleChange = (event: any) => {
        setTextInput(event.target.value);
        filterRows();
    }
    const filterRows = () => {
        let worksFiltered = [...photoList];
        if (textInput !== '') {
            const filterString = textInput.toLowerCase();
            worksFiltered = worksFiltered.filter(v => v.title.toLowerCase().includes(filterString));
        }
        return worksFiltered;
    }
    const filtredRowsList = filterRows();
    const [sorting, setSorting] = useState<number>(1);
    console.log(filtredRowsList)
    const compare = (a: any, b: any) => {
        if (sorting === 2) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        }
        else if (sorting === 3) {
            if (a.title < b.title) {
                return 1;
            }
            if (a.title > b.title) {
                return -1;
            }
            return 0;
        } else {
            return 0;
        }

    }
    const changeSort = () => {
        if (sorting === 1) {
            setSorting(2)
        }
        if (sorting === 2) {
            setSorting(3)
        }
        if (sorting === 3) {
            setSorting(1)
        }
    }

    if (usersList?.length > 0) {
        return (

            <BC className={expanded ? "expanded" : ""}>
                <Wrapper>
                    <Container1>
                        <Box1>
                            <Title1>Entities</Title1>
                            <Img1 src="./media/icons/cog.png" alt="setting-icon" />
                        </Box1>

                        <Box2>
                            <Button1 isHide={viewType} onClick={() => isViewType('grid')}>
                                <IconButton1 src="./media/entities/mosaic.svg" alt="mosaic-img" />
                                <TextButton1>Mosaic</TextButton1>
                                {viewType === 'grid'}
                            </Button1>
                            <Button2 isHide={viewType} onClick={() => isViewType('list')}>
                                <IconButton2 src="./media/entities/list.svg" alt="list-img" />
                                <TextButton2>List</TextButton2>
                                {viewType === 'list'}
                            </Button2>
                        </Box2>
                    </Container1>


                    <Container2>
                        <ResumeWorkHeaderContainer>
                            <ResumeWorkHeaderDiv1>
                                <AllButton onClick={() => isOpen(!openFilter)}>
                                    <ImgAll1 src="./media/entities/circle.svg" alt="img-circle" />
                                    <TextAll>All</TextAll>
                                    <ImgAll2 src="./media/entities/arrow.svg" alt="arrow-img" />
                                </AllButton>

                                <CircleButton>
                                    <TextCircle>. . .</TextCircle>
                                </CircleButton>

                                <SortButton onClick={changeSort}>
                                    <ImgSort src="./media/entities/sort.svg" alt="sort-img" />
                                    <TextSort>Sort</TextSort>
                                </SortButton>

                                <FilterButton onClick={() => isOpen(!openFilter)}>
                                    <ImgFilter src="./media/entities/filter.svg" alt="filter-img" />
                                    <TextFilter>Filters</TextFilter>
                                </FilterButton>

                                <FullScreenButton onClick={expandView}>
                                    <ImgFullScreen src="./media/entities/fullscreen.svg" alt="fullscreen-img" />
                                </FullScreenButton>
                                <CopyToClipboard text={shareUrl}>
                                    <ShareButton>
                                        <ImgShare src="./media/entities/share.svg" alt="share-img" />
                                        <TextShare>Share</TextShare>
                                    </ShareButton>
                                </CopyToClipboard>


                            </ResumeWorkHeaderDiv1>
                            <ResumeWorkHeaderDiv2>
                                <InputDiv>
                                    <InputFilter placeholder="Search..." onChange={handleChange}></InputFilter>
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

                    {openFilter && <EntitiesFilter />}
                    {viewType === 'grid' ?
                        <MosaicView photoList={filtredRowsList.sort(compare)} />
                        :
                        <ListView photoList={filtredRowsList.sort(compare)} />
                    }


                </Wrapper>
            </BC>
        )
    }
    else {
        return (<Wrapper />)
    }

};
export default Entities;