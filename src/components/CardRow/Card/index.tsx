import React from 'react';
import { CardContainer, Info, Title } from './styles';

type Props = {
	title: string;
	info: string;
}

export default function Card({ title, info }: Props) {
	return (
		<CardContainer>
			<Title>{title}</Title>
			<Info>{info}</Info>
		</CardContainer>
	)
}