import Image from "next/image";
import styled, {css} from "styled-components";

const selectedOption = css`
    border: 1px solid #45AB6B;
    background-color: #45AB6B;
    color: #ECEEF1;
`;

export const Container = styled.div`
    ${({selected}) => selected && selectedOption}
    color: #575A61;
    padding: 22px 0;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    border-radius: 20px;
    margin: 15px 0px 15px 0px;
    
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