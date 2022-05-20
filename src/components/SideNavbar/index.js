import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'
import SideNavbarTile from './components/SideNavbarTile';
import { Container, ImageContainer } from './styles';
import MemberIcon from "../../../public/members-icon.png";
import CategoriesIcon from "../../../public/categories-icon.png";
import EmblemIcon from "../../../public/emblem-icon.png";
import EventsIcon from "../../../public/events-icon.png";
import OverviewIcon from "../../../public/overview-icon.png";
import RulesIcon from "../../../public/rules-icon.png";
import SeasonIcon from "../../../public/season-icon.png";
import TeamsIcon from "../../../public/teams-icon.png";
import Logo from "../../../public/logo-pixie.svg";

export default function SideNavbar(){
    const router = useRouter();
    const path = router.pathname.slice(1); 
    
    const routes = {
        home: 'Overview',
        members: 'Membros'
    }

    return (
        <Container>
            <ImageContainer>
            <Image src={Logo} />
            </ImageContainer>
            <SideNavbarTile icon={OverviewIcon} sectionName={routes[path]}/>
            <SideNavbarTile icon={MemberIcon} sectionName="Membros"/>
            <SideNavbarTile icon={TeamsIcon} sectionName="Equipes"/>
            <SideNavbarTile icon={EventsIcon} sectionName="Eventos"/>
            <SideNavbarTile icon={CategoriesIcon} sectionName="Categorias"/>
            <SideNavbarTile icon={RulesIcon} sectionName="Regras"/>
            <SideNavbarTile icon={EmblemIcon} sectionName="Emblemas"/>
            <SideNavbarTile icon={SeasonIcon} sectionName="Temporadas"/>
        </Container>
    );
}