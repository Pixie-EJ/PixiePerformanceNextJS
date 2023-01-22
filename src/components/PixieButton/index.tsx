import React, { ButtonHTMLAttributes } from "react";
import { Button, styledButtonProps } from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & styledButtonProps & {
}

export default function PixieButton({ buttonType = 'default', ...rest }: Props) {
	return (
		<Button buttonType={buttonType} {...rest}>
		</Button>
	);
}
