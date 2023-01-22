import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.gray_200};
  
  border: 2px solid ${({ theme }) => theme.COLORS.gray_200};
  border-radius: 6px;
  outline: none;
  
  min-width: 22rem;
  min-height: 2rem;

  padding: 0px 8px;
  margin-bottom: 1rem;

  display: flex; 
  flex-direction: row; 
  align-items: center;

  :focus-within {
    border: 2px solid ${({ theme }) => theme.COLORS.primary_dark};
  }
`;

export const TitleInput = styled.label`
  font-size: 16px;

  color: ${({ theme }) => theme.COLORS.gray_400};

  margin-bottom: .2rem;
`;

export const CustomInput = styled.input`
  color: ${({ theme }) => theme.COLORS.gray_400};
  background-color: transparent;

  min-width: 100%;
  min-height: 2rem;

  border: none;
  outline: none;
`;

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  color: ${({ theme }) => theme.COLORS.gray_400};

  align-items: center;
  justify-content: center;

  margin-right: 8px;
`; 