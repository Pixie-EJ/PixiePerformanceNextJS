import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-height: 100vh;
  background-color: var(--gray-500);
`;

export const ImageContainer = styled.div`
  height: 140px;
  display: flex;
`;

export const DropDown = styled.section`
  position: absolute;
  border: 2px solid black;
  top: 25px;
  left: 25px;
  width: 50%;
  min-width: 315px;
  background-color: white;
  z-index: 15;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 30px;
  margin: 55px 0 0 32px;
`;
