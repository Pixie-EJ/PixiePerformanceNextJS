import styled from "styled-components";

export type styledButtonProps = {
  buttonType: 'default' | 'light';
}

export const Button = styled.button<styledButtonProps>`
  background-color: ${({ theme, buttonType }) => buttonType === 'default' ? 
  theme.COLORS.gray_400 : theme.COLORS.secondary_default};
  color: ${({ theme }) => theme.COLORS.gray_100};
  border: none;
  margin-top: 1rem;
  padding: 12px 16px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;

  &:hover{
    background-color: ${({ theme }) => theme.COLORS.primary_default};
  }
`