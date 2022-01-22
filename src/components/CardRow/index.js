import React from "react";
import Card from "./Card";
import { CardRowContainer } from "./styles";

export default function CardRow() {
    return (
        <CardRowContainer>
            <Card title="Pontuação esperada" info="1500"/>
            <Card title="Pontuação média" info="1500"/>
            <Card title="Porcentagem média" info="80%"/>
        </CardRowContainer>
    )
}