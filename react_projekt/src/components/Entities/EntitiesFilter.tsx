import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../styleHelpers/Colors';
import { imageSize } from '../styleHelpers/ImageSize';


const FilterContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-top: 20px;
  box-shadow:0px 2px 5px 0px ${Colors.lightgrey};
`;
const FilterBox = styled.div`
  width: 100%;
`;
const BoxData = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
  span {
    margin-left: 12px;
  }
  input {
    background-color: #d3d3d38f;
    border: none;
    height: 30px;
    font: 1.2rem;
  }
`;
const AddFilter = styled.div`
  width: 100%;
  width: 50;
  margin: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font: 1.4rem;
  
  span {
    margin-left: 5px;
  }
`;
const Icon = styled.img`
width:${imageSize[12]}!important;
margin-left:5px;
margin-right:5px;
`;
const EntitiesFilter: FC = () => {
  return (
    <>
      <FilterContainer>
        <FilterBox>
          <BoxData>
            <Icon src="./media/icons/close.svg" alt="close-img" />
            <span>Where</span>
            <span>Company</span>
            <Icon src="./media/icons/arrow-down.png" alt="arrow" />
            <span>Constains</span>
            <Icon src="./media/icons/arrow-down.png" alt="arrow" />
            <input type="text" placeholder="Type..." />
          </BoxData>
          <BoxData>
            <Icon src="./media/icons/close.svg" alt="close-img" /> <span>Where</span>
            <span>Status</span>             <Icon src="./media/icons/arrow-down.png" alt="arrow" />
            <span>Is</span>
            <Icon src="./media/icons/arrow-down.png" alt="arrow" />
            <input type="text" placeholder="Type..." />
            <span>In</span>             <Icon src="./media/icons/arrow-down.png" alt="arrow" />
            <input type="text" placeholder="Type..." />
          </BoxData>
          <BoxData>
            <Icon src="./media/icons/close.svg" alt="close-img" /> <span>And</span>
            <span>Status</span>             <Icon src="./media/icons/arrow-down.png" alt="arrow" />
            <span>Ends before</span>
            <Icon src="./media/icons/arrow-down.png" alt="arrow" />
            <input type="text" placeholder="Type..." />
            <span>In</span>             <Icon src="./media/icons/arrow-down.png" alt="arrow" />
            <input type="text" placeholder="Type..." />
          </BoxData>
        </FilterBox>
        <AddFilter>
          <Icon src="./media/icons/plus.svg" /> <span>Add Filter</span>
          <span>choose property</span>{" "}
          <Icon src="./media/icons/arrow-down.png" alt="arrow" />
        </AddFilter>
      </FilterContainer>
    </>
  );
};

export default EntitiesFilter;