import { theme } from "@theme/index";
import Image from "next/image";
import styled, {css} from "styled-components";

interface styledProps {
    selected:boolean,
    isMobile:boolean
}

// todo precisamos refatorar esse cara aq, ta muito confuso
// tem um monte de constante de estilo aq, ta confuso de entender
// vc não consegue bater o olho e ter uma clareza doq faz oq
// tenq ler cada const por const para entender e ainda tem esilos
// que estão anulando outros...
const selectedOption = css`
    color: ${({theme}) => theme.COLORS.primary_default};
`;

const selectedOptionMobile = css`
    border: 1px solid ${({theme}) => theme.COLORS.primary_default};
    background-color: ${({theme}) => theme.COLORS.primary_default};
    color: ${({theme}) => theme.COLORS.gray_500};
`;

const notSelectedOption = css`
    color: ${({theme}) => theme.COLORS.gray_300};
    &:hover {
        background-color: ${({theme}) => theme.COLORS.gray_100};
    }
`;

const notSelectedOptionMobile = css`
    background-color: ${({theme}) => theme.COLORS.gray_400};
    color: ${({theme}) => theme.COLORS.gray_300};
    &:hover {
        background-color: ${({theme}) => theme.COLORS.gray_100};
    }
`;

const styleMenuMobile = css<styledProps>`
    background-color: ${({theme}) => theme.COLORS.gray_400};
    margin: 15px 0px 15px 0px;
    border-radius: 15px;
    ${({selected}) => selected ? selectedOptionMobile : notSelectedOptionMobile}
`;

const styleMenuDesktop = css<styledProps>`    
    ${({selected}) => selected ? selectedOption : notSelectedOption}
    &:hover {
        background-color: ${({theme}) => theme.COLORS.gray_400};
    }
`;

export const Container = styled.div<styledProps>` 
    ${({isMobile}) => isMobile ? styleMenuMobile : styleMenuDesktop}
    padding: 22px 0;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;

    > div {
        margin-left: 20%;
    }
`
export const IconContainer = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 24px;
`