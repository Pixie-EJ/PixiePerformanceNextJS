import styled from "styled-components";

const GreenButton = styled.button`
	padding: 10px 32px;
	font-size: 16px;
	background-color: ${({ theme }) => theme.COLORS.primary_default};
	color: ${({theme}) => theme.COLORS.white};
	font-weight: semi-bold;
	text-decoration: none;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	font-weight: 500;
`;

const LightGreenButton = styled.button`
	padding: 10px 32px;
	font-size: 16px;
	font-weight: semi-bold;
	background-color: ${({theme}) => theme.COLORS.gray_500};
	color: ${({ theme }) => theme.COLORS.primary_default};
	text-decoration: none;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	font-weight: 500;
`;

export { GreenButton, LightGreenButton };
