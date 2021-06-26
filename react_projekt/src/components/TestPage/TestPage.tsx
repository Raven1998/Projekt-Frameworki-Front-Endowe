import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../components/styleHelpers/Colors';
import { fontSize } from '../../components/styleHelpers/FontSizes';

const Wrapper = styled.div `
    background-color:#ffffff;
    display: flex;
    width:100%;
    height:40px;
    font-size: ${fontSize[14]};
    box-shadow:2px 2px 10px ${Colors.grey1} ;   
`;

export const Test : FC = () => {
    return (
        <Wrapper>
            <h1>Test Page</h1>
        </Wrapper>
    );
};