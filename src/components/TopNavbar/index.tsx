import Image from "next/image";
import {
  Container,
  RightContainer,
  ProfileIcon,
  ButtonContainer,
  Title,
} from "./styles";
import PixieButton from "../PixieButton";

interface topNavProps {
  title: string,
  buttonText: string
}


export default function TopNavbar({title, buttonText}: topNavProps) {

  return (
    <Container>
      <RightContainer>
        <Title>{title}</Title>
        <ButtonContainer>
          {buttonText != undefined && (<PixieButton text={buttonText} />)}
          <ProfileIcon>PB</ProfileIcon>
        </ButtonContainer>
      </RightContainer>
    </Container>
  );
}