import React from 'react';
import { CardContainer, Info, Title } from './styles';

export default function Card(props) {
	return (
		<CardContainer>
			<Title>{props.title}</Title>
			<Info>{props.info}</Info>
		</CardContainer>
	)
}