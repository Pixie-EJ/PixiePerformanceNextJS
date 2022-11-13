import OverviewIcon from '../../../public/overview-icon.png';
import OverviewIconSelected from '../../../public/overview-selected-icon.svg';
import MembersIcon from '../../../public/members-icon.png';
import TeamsIcon from "../../../public/teams-icon.png";
import EventsIcon from "../../../public/events-icon.png";
import CategoriesIcon from "../../../public/categories-icon.png";
import RulesIcon from "../../../public/rules-icon.png";
import EmblemIcon from "../../../public/emblem-icon.png";
import SeasonsIcon from "../../../public/season-icon.png";

const options = [
    {
        "sectionName": "Overview",
        "img": OverviewIcon,
        "imgSelected": OverviewIconSelected,
        "url": "home"
    },
    {
        "sectionName": "Membros",
        "img": MembersIcon,
        "imgSelected": OverviewIconSelected,
        "url":"members"
    },
    {
        "sectionName": "Equipes",
        "img": TeamsIcon,
        "imgSelected": OverviewIconSelected,
        "url":""
    },
    {
        "sectionName": "Eventos",
        "img": EventsIcon,
        "imgSelected": OverviewIconSelected,
        "url":"create-event"
    },
    {
        "sectionName": "Categorias",
        "img": CategoriesIcon,
        "imgSelected": OverviewIconSelected,
        "url":""
    },
    {
        "sectionName": "Regras",
        "img": RulesIcon,
        "imgSelected": OverviewIconSelected,
        "url":""
    },
    {
        "sectionName": "Emblemas",
        "img": EmblemIcon,
        "imgSelected": OverviewIconSelected,
        "url":""
    },
    {
        "sectionName": "Temporadas",
        "img": SeasonsIcon,
        "imgSelected": OverviewIconSelected,
        "url":""
    }
];

export default options;