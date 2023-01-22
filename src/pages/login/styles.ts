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
    margin-bottom: .4rem;
  }
  
  p{
    color: ${({ theme }) => theme.COLORS.gray_300};
    margin-top: 0;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const LinkText = styled.a`
  margin-top: .4rem;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.gray_400};
`;