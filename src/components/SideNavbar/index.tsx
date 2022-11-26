import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SideNavbarTitle from "./components/SideNavbarTitle";
import { Container, ImageContainer } from "./styles";
import Logo from "../../../public/logo-pixie.svg";

import useMobile from "../../hooks/useMobile";
import { sideNavbarOptions } from "@global/sideNavbarOptions";

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

      {sideNavbarOptions.map((option, index) => {
        return (
          <SideNavbarTitle
            key={index}
            sectionName={option.sectionName}
            icon={option.icon}
            url={option.url}
            selected={path == option.url}
          />
        );
      })}
    </Container>
  );
}
