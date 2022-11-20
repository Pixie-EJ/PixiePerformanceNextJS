import styled from "styled-components";

const CustomInput = styled.input`
    padding 24px 16px;
    border-radius: 8px;
`;

const TitleInput = styled.p`
  font-size: 16px;
`;

const CustomSelect = styled.select`
    padding 24px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.white};
`;

export { CustomInput, TitleInput, CustomSelect };
