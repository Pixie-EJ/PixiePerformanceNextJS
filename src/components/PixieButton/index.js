import React from "react";
import { GreenButton, LightGreenButton } from "./styles";

export default function PixieButton(props) {
    if (props.color === 'lightgreen') {
        return (
            <LightGreenButton onClick={props.callback}>
            {props.text}
            </LightGreenButton>
        );
    }
    return (
        <GreenButton onClick={props.callback}>
        {props.text}
        </GreenButton>
    );
}
