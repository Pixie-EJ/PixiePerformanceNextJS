import Image from "next/image";
import React from "react";
import { Container, IconContainer } from "./styles";
import { useRouter } from 'next/router'

export default function SideNavbarTile(props){
    const {sectionName, icon, url = ''} = props;
    const router = useRouter();

    const handleMenuClick = (e) =>{
        e.preventDefault()
        router.push(url)
    }

    return(
        <Container onClick={handleMenuClick}>
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