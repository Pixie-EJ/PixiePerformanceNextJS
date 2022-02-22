import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
`;

const FormContainer = styled.div`
  width: 100%;
  margin: 16px 32px;
  height: 400px;
  border: 1px solid #ccc;

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

const InputContainer = styled.div`
  display: inline-block;
  background: #f2f2f2;
  margin: 24px;
  padding: 12px;
  border-radius: 3px;
  width: 30%;
  font-size: 14px;
`;



export { ContentContainer, FormContainer, HomeContainer, InputContainer, RightContainer };
