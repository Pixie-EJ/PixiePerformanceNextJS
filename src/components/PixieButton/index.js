import React from 'react';
import { Container, Link } from './styles';

export default function PixieButton(props) {
    return (
        <Container>
            <Link href={props.link} target="_blank">{props.text}</Link>
        </Container>
    )
}