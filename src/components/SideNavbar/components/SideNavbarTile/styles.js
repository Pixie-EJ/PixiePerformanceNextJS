import Image from "next/image";
import styled, {css} from "styled-components";

const selectedOption = css`
    color: var(--primary-default);
`;

const selectedOptionMobile = css`
    border: 1px solid #45AB6B;
    background-color: #45AB6B;
    color: #ECEEF1;
`;

const notSelectedOption = css`
    color: #575A61;
    &:hover {
        background-color: var(--gray);
    }
`;

const notSelectedOptionMobile = css`
    background-color: #D9D9D9;
    color: #575A61;
    &:hover {
        background-color: var(--gray);
    }
`;

const styleMenuMobile = css`
    background-color: #D9D9D9;
    margin: 15px 0px 15px 0px;
    border-radius: 15px;
    ${({selected}) => selected ? selectedOptionMobile : notSelectedOptionMobile}
`;

const styleMenuDesktop = css`    
    ${({selected}) => selected ? selectedOption : notSelectedOption}
    &:hover {
        background-color: var(--gray-400);
    }
`;

export const Container = styled.div`
    ${({isMobile}) => isMobile ? styleMenuMobile : styleMenuDesktop}
    padding: 22px 0;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;

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