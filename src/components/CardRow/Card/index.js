import React from 'react';
import {CardContainer, Title, Info} from './styles.js';

export default function Card(props) {
    return (
        <CardContainer>
            <Title>{props.title}</Title>
            <Info>{props.info}</Info>
        </CardContainer>
    )
}