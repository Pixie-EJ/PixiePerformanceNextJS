import Image from "next/image";
import React from "react";
import { Container, IconContainer } from "./styles";
import { useRouter } from 'next/router'

export default function SideNavbarTile(props){
    const {sectionName, icon, selected, url} = props;
    const router = useRouter();

    const handleMenuClick = (e) =>{
        e.preventDefault()
        !selected && router.push(url)
    }

    return(
        <Container onClick={handleMenuClick} selected={selected}>
            <div>
                <IconContainer>
                    <Image src={icon} layout="responsive"/>
                </IconContainer>
                {
                    sectionName
                }
            </div>
        </Container>
    );
};