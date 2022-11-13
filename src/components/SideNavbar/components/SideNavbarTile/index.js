import Image from "next/image";
import React from "react";
import { Container, IconContainer } from "./styles";
import { useRouter } from 'next/router'
import useMobile from "../../../../hooks/useMobile";

export default function SideNavbarTile(props){
    const {sectionName, icon, iconSelected, selected, url} = props;
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
                    <Image src={selected ? iconSelected : icon} layout="responsive"/>
                </IconContainer>
                {
                    sectionName
                }
            </div>
        </Container>
    );
};