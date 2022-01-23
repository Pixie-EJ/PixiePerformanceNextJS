import React, {useCallback, useEffect, useState} from "react";
import Card from "./Card";
import api from "../../services/api";
import { CardRowContainer } from "./styles";

export default function CardRow() {
    const [cards, setCards] = useState([])
    const getCards = useCallback(async() => {
        try {
            const response = await api.get("/points");
            setCards(response.data);
        } catch (error) {
            console.log(error);
        }
    },[])

    useEffect(() => {
        getCards();
    },[])

    return (
        <CardRowContainer>
            <Card title="Pontuação esperada" info={cards[0]}/>
            <Card title="Pontuação total" info={cards[1]}/>
            <Card title="Porcentagem alcançada" info={`${cards[2]}%`}/>
        </CardRowContainer>
    )
}