import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20vh;
  background-color: #fff;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const ProfileIcon = styled.div`
  border-radius: 60px;
  height: 48px;
  width: 48px;
  background-color: #edf8f1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 500;
  margin-left: 32px;
`;

export {
  Container,
  RightContainer,
  ProfileIcon,
  ButtonContainer,
  Title,
};
