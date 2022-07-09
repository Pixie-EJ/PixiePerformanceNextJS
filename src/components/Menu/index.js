import React from 'react';
import Image from 'next/image';
import SideNavbarTile from '../SideNavbar/components/SideNavbarTile';
import { useRouter } from 'next/router';
import { Container, ImageContainer } from './styles';
import Hamburguer from "../../../public/bars-solid.svg";
import options from '../SideNavbar/options';
import PixieButton from '../PixieButton';

export function Menu() {
    const router = useRouter();
    const path = router.pathname.slice(1);
    let mobile = true;

    function ComponenteMobile(){
        return (
            <Container>
                <ImageContainer>
                    <Image src={Hamburguer} />
                </ImageContainer>
            </Container>
        );
    }

    function ComponenteDesktop(){
        return (
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

    return (
        <>
            {mobile ? <ComponenteMobile/> : <ComponenteDesktop/>}
        </>
    );
}