import Image from "next/image";
import {
  Container,
  RightContainer,
  ProfileIcon,
  ButtonContainer,
  Title,
} from "./styles";
import PixieButton from "../PixieButton";

export default function TopNavbar(props) {
  return (
    <Container>
      <RightContainer>
        <Title>{props.title}</Title>
        <ButtonContainer>
          <PixieButton text={props.buttonText} />
          <ProfileIcon>PI</ProfileIcon>
        </ButtonContainer>
      </RightContainer>
    </Container>
  );
}
