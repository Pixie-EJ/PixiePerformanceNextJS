import OverviewIcon from "../../../public/overview-icon.png";
import OverviewIconSelected from "../../../public/overview-selected-icon.svg";
import MembersIcon from "../../../public/members-icon.png";
import TeamsIcon from "../../../public/teams-icon.png";
import EventsIcon from "../../../public/events-icon.png";
import CategoriesIcon from "../../../public/categories-icon.png";
import RulesIcon from "../../../public/rules-icon.png";
import EmblemIcon from "../../../public/emblem-icon.png";
import SeasonsIcon from "../../../public/season-icon.png";

interface OptionProps {
	sectionName: string;
	img: string;
	url: string;
}

const options: OptionProps[] = [
	{
		sectionName: "Overview",
		img: "OverviewIcon",
		url: "home",
	},
	{
		sectionName: "Membros",
		img: "MembersIcon",
		url: "members",
	},
	{
		sectionName: "Equipes",
		img: "TeamsIcon",
		url: "teams",
	},
	{
		sectionName: "Eventos",
		img: "EventsIcon",
		url: "create-event",
	},
	{
		sectionName: "Categorias",
		img: "CategoriesIcon",
		url: "categories",
	},
	{
		sectionName: "Regras",
		img: "RulesIcon",
		url: "rules",
	},
	{
		sectionName: "Emblemas",
		img: "EmblemIcon",
		url: "emblems",
	},
	{
		sectionName: "Temporadas",
		img: "SeasonsIcon",
		url: "seasons",
	},
];

export default options;
