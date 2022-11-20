import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-height: 100vh;
  background-color: ${({theme}) => theme.COLORS.gray_500};
`;

const ImageContainer = styled.div`
  height: 140px;
  display: flex;
`;

export { ImageContainer, Container };
