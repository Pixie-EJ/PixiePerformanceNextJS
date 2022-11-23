import Image from "next/image";
import React from "react";
import { Container, IconContainer } from "./styles";
import { useRouter } from 'next/router'
import useMobile from "../../../../hooks/useMobile";

interface Props {
    sectionName: string,
    icon: string,
    url: string,
    selected: boolean
}


export default function SideNavbarTile({icon,sectionName,selected,url}: Props){
    const router = useRouter();
    const isMobile = useMobile();

    const handleMenuClick = (e) =>{
        e.preventDefault()
        !selected && router.push(url)
    }

    return(
        <Container onClick={handleMenuClick} selected={selected} isMobile={isMobile}>
            <div>
                <IconContainer>
                    {/* <Image src={icon} layout="responsive"/> */}
                </IconContainer>
                {
                    sectionName
                }
            </div>
        </Container>
    );
};