import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SideNavbarTile from "./components/SideNavbarTile";
import { Container, ImageContainer } from "./styles";
import Logo from "../../../public/logo-pixie.svg";

import { ButtonContainer } from '../TopNavbar/styles';
import PixieButton from '../PixieButton';

import useMobile from "../../hooks/useMobile";

import options from "./options";

export default function SideNavbar() {
  const router = useRouter();
  const path = router.pathname.slice(1);

  const isMobile = useMobile();

  return isMobile ? (
    <>Mobile</>
  ) : (
    <Container>
      <ImageContainer>
        <Image src={Logo} />
      </ImageContainer>

      {options.map((option, index) => {
        return (
          <SideNavbarTile
            key={index}
            sectionName={option.sectionName}
            icon={option.img}
            url={option.url}
            selected={path == option.url}
          />
        );
      })}
    </Container>
  );
}
