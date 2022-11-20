import React, { useState } from "react";
import Image from "next/image";
import SideNavbarTile from "../SideNavbar/components/SideNavbarTile";
import { useRouter } from "next/router";
import { Container, ImageContainer, Button, DropDown } from "./styles";
import Hamburguer from "../../../public/bars-solid.svg";
import options from "../SideNavbar/options";
import PixieButton from "../PixieButton";
import useMobile from "../../hooks/useMobile";
import Logo from "../../../public/logo-pixie.svg";
import CloseMenuIcon from "../../../public/closemenu-icon.svg";


export function Menu() {
  const router = useRouter();
  const path = router.pathname.slice(1);

  const isMobile = useMobile();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toogleOpenDropDown = () => {
    setIsDropDownOpen((state) => !state);
  };

  function ComponenteMobile() {
    return (
      <Container>
        {!isDropDownOpen ? (
          <ImageContainer>
            <Button onClick={toogleOpenDropDown}>
              <Image src={Hamburguer}></Image>
            </Button>
          </ImageContainer>
        ) : (
          <DropDown>
            <Button onClick={toogleOpenDropDown}><Image src={CloseMenuIcon}/></Button>
            {options.map((option, index) => (
              <SideNavbarTile
                key={index}
                sectionName={option.sectionName}
                icon={option.img}
                iconSelected={option.imgSelected}
                url={option.url}
                selected={path == option.url}
              />
            ))}
          </DropDown>
        )}
      </Container>
    );
  }

  function ComponenteDesktop() {
     setIsDropDownOpen(false);
    return (
      <Container>
        <ImageContainer>
          <Image src={Logo} />
        </ImageContainer>

        {options.map((option, index) => (
          <SideNavbarTile
            key={index}
            sectionName={option.sectionName}
            icon={option.img}
            iconSelected={option.imgSelected}
            url={option.url}
            selected={path == option.url}
          />
        ))}
      </Container>
    );
  }

  return isMobile ? <ComponenteMobile /> : <ComponenteDesktop />;
}
