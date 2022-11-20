import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.gray_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: var(--white);
  }
  p{
    color: var(--gray-400);
    margin-top: 0;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column; 
  justify-content:flex-start;

  label {
    color: ${({theme}) => theme.COLORS.gray_400};
    margin-bottom: .5em;
  }
  input {
    background-color: ${({ theme }) => theme.COLORS.gray_200};
    border: 2px solid ${({ theme }) => theme.COLORS.gray_200};
    border-radius:5px;
    padding: 1em;
    min-width: 300px;
    margin-bottom: 1em;
  }
  input:focus {
    border: 2px solid var(--primary-dark);
    outline: none;
  }

  a {
    margin-top: 1em;
    text-align: center;
    color: var(--gray-400);
  }


`


export const Button = styled.button`
  background-color: ${({ theme }) => theme.COLORS.primary_dark};
  border:none;
  margin-top: 1em;
  padding: 1em;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    background-color: ${({ theme }) => theme.COLORS.secondary_default};
  }
`