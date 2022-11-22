import styled, {css} from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-height: 100vh;
  background-color: var(--gray-500);
`;

//LogoDropdown precisa de um icone maior
const LogoDropdown = css`
  display: block;
  margin: 30px auto 60px auto;
`;

const LogoDesktop = css`
  height: 140px;
  display: flex;
`;

export const ImageContainer = styled.div`
  ${({isDropDownOpen}) => isDropDownOpen ? LogoDropdown : LogoDesktop}
`;

export const DropDown = styled.section`
  position: absolute;
  border: 1px solid var(--gray-500);
  left: 0%;
  min-width: 100%;
  background-color: var(--gray-500);
  z-index: 15;
  padding: 50px;
  text-align: center;
`;

const ButtonCloseDropdown = css`
  width: 100%;
  text-align: end;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 30px;
  ${({isDropDownOpen}) => isDropDownOpen ? ButtonCloseDropdown : `margin: 55px 0 0 32px;`}
`;
