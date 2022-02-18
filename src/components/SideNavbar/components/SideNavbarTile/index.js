import Image from "next/image";
import React from "react";
import { Container, IconContainer } from "./styles";

export default function SideNavbarTile(props){
    const {sectionName, icon} = props;
    return(
        <Container>
            <IconContainer>
                <Image src={icon} layout="responsive"/>
            </IconContainer>
            {
                sectionName
            }
        </Container>
    );
};