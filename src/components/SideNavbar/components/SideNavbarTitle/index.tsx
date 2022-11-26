import Image from "next/image";
import React from "react";
import { Container, IconContainer } from "./styles";
import { useRouter } from 'next/router'
import useMobile from "../../../../hooks/useMobile";
import { IconProps } from 'phosphor-react';

interface Props {
    sectionName: string,
    icon: IconProps,
    url: string,
    selected: boolean,
}

export default function SideNavbarTitle({ icon, sectionName, selected, url }: Props){
    const router = useRouter();
    const isMobile = useMobile();

    const handleMenuClick = (e) =>{
        e.preventDefault()
        !selected && router.push(url)
    }

    return(
        <Container onClick={handleMenuClick} selected={selected} isMobile={isMobile}>
            <>
                <IconContainer>
                    {icon}
                </IconContainer>
                {
                    sectionName
                }
            </>
        </Container>
    );
};