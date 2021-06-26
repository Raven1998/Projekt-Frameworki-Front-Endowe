import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styleHelpers/Colors';
import ReactPaginate from 'react-paginate';
import { IState } from '../../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IPhotoReducer } from '../../../reducers/photoReducers';
import { ICommentReducer } from '../../../reducers/commentsReducers';
import { IPostReducer } from '../../../reducers/postsReducers';

const ResumeYourWorkWrapper = styled.div ` 
`;

const ResumeYourWorkItems = styled.div `
    display: flex;
`;

const ResumeYourWorkTitle = styled.p `
    color: ${Colors.blue2};
    font-size: 20px;
`;


const ResumeYourWorkElements = styled.div ` 
    display: flex;
    margin-left: auto;
`;

const FilterWrapper = styled.div `
    display:flex;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0dcdc;
    border-radius: 3px;
`;

const CustomInput = styled.input `
    width: 200px;
    padding: 10px;
    border: 0px;
    outline: none;
    margin-right: 10px;
`;

const SelectWrapper = styled.div `
    display: flex;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;

    select {
        width: 200px;
        padding: 10px;
        border: 0;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        color: ${Colors.blue2};
    }
`;


const CustomImg = styled.img ` 
    margin: 10px;
    text-align: right;
    width: 20px;
    height: 20px; 
`;

  

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

const ResumeWorkBottom1 = styled.div ` 
    margin-top: 50px;
`;

const ResumePagiAndApi = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
margin-top:1em;
.pagination{
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin:20px;
    font-size:1em;
    color:#0381bd;
    font-weight:bold;
    cursor:pointer;
}
.paginationA{
    margin:10px;
}
`;


export const ResumeYourWork: FC = () => {
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
    
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
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

if (usersList?.length > 0) {
    return(
        <ResumeYourWorkWrapper>
            <ResumeYourWorkItems>
                <ResumeYourWorkTitle>Resume Your Work</ResumeYourWorkTitle>
                <ResumeYourWorkElements>
                    <FilterWrapper>
                        <CustomInput placeholder="Filter by title..." type ="text"/>
                        <CustomImg src="./media/icons/search.png" alt = "" title = ""/>
                    </FilterWrapper>
                    <SelectWrapper>
                        <CustomImg src="./media/icons/followed.png" alt =""/>
                        <select>
                            <option value="followed">Followed</option>
                        </select>
                    </SelectWrapper>
                </ResumeYourWorkElements>
            </ResumeYourWorkItems>
            <ResumePagiAndApi>
                {"$post.title".toLowerCase().includes(inputText.toLowerCase()) &&
                        


                        postList.slice(currentPage, currentPage + 10).map((post) => (
                            <ResumeWorkMini key={post.id}>
                                <ResumeWorkTitle>{post.title}</ResumeWorkTitle>
                                <ResumeWorkText>{post.body}</ResumeWorkText>
                                <ResumeWorkBottom1>
                                <ResumeWorkBottom>
                                    <img src="../../media/icons/logout.png" alt=""></img>Subsid.corp  <img src="../../media/icons/bell.png" alt=""></img>Supplier contract + Updated 3 Days ago by John Doe
                                </ResumeWorkBottom>
                                </ResumeWorkBottom1>
                            </ResumeWorkMini>

                        ))
                    }
                    <ReactPaginate previousLabel={'PREVIOUS'} 
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
                        nextClassName={'next'}/>  
            
            </ResumePagiAndApi>
         </ResumeYourWorkWrapper>
    );
    }
    else {
        return (<ResumeYourWorkWrapper />)
    }
};