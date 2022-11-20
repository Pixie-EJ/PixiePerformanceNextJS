import styled from "styled-components";

// TODO refatorar esse cara aq
const ContentContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TableContainer = styled.div`
  width: 100%;
  margin: 16px 32px;
  height: 400px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { ContentContainer, TableContainer, HomeContainer, RightContainer };
