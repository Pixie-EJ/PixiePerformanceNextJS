import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0px 12px;   
	background-color: ${({ theme }) => theme.COLORS.white};
	border-radius: 8px;
	padding: 24px 40px;
	width: 23%;
	border: 1px solid #e9e9e9;
`;
const Title = styled.p`
	font-size: 16px;
	font-weight: 400;
	color: ${({ theme }) => theme.COLORS.gray_300};
	margin: 0;
`;

const Info = styled.p`
	font-size: 24px;
	font-weight: 600;
	color: ${({ theme }) => theme.COLORS.primary_dark};
	margin: 0;
`;

export {CardContainer, Title, Info};