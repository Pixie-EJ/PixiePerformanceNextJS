import { 
	House, 
	Users, 
	UsersFour, 
	Rows, 
	Calendar, 
	Notepad, 
	Medal, 
	Trophy, 
	IconProps 
} from 'phosphor-react'

interface OptionProps {
	sectionName: string;
	icon: IconProps;
	url: string;
}

export const sideNavbarOptions: OptionProps[] = [
	{
		sectionName: "Overview",
		icon: <House size={18} />,
		url: "home",
	},
	{
		sectionName: "Membros",
		icon: <Users size={18} />,
		url: "members",
	},
	{
		sectionName: "Equipes",
		icon: <UsersFour size={18} />,
		url: "teams",
	},
	{
		sectionName: "Eventos",
		icon: <Calendar size={18} />,
		url: "create-event",
	},
	{
		sectionName: "Categorias",
		icon: <Rows size={18} />,
		url: "categories",
	},
	{
		sectionName: "Regras",
		icon: <Notepad size={18} />,
		url: "rules",
	},
	{
		sectionName: "Emblemas",
		icon: <Medal size={18} />,
		url: "emblems",
	},
	{
		sectionName: "Temporadas",
		icon: <Trophy size={18} />,
		url: "seasons",
	},
];