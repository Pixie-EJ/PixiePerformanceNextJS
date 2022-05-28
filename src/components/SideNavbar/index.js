import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'
import SideNavbarTile from './components/SideNavbarTile';
import { Container, ImageContainer } from './styles';
import Logo from "../../../public/logo-pixie.svg";

import options from './options';

export default function SideNavbar() {
    const router = useRouter();
    const path = router.pathname.slice(1);

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