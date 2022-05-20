import Image from "next/image";
import styled, {css} from "styled-components";

const selectedOption = css`
    background-color: var(--gray);
    border: 1px solid var(--green);
`;

export const Container = styled.div`
    ${({selected}) => selected && selectedOption}
    color: #575A61;
    padding: 22px 0;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    
    &:hover{
        background-color: var(--gray);
        border: 0.1px solid black;
    }

    > div {
        display: flex;
        text-align: center;
        justify-content: center;
        margin-left: 20%;
    }
`
export const IconContainer = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 24px;
`