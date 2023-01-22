import { InputHTMLAttributes } from 'react'
import { Container, CustomInput, Icon, TitleInput } from "./styles"

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	icon: JSX.Element;
}

export default function PixieInput({ label, icon, ...rest }: Props) {
	return (
		<>
			<TitleInput>{label}</TitleInput>
			<Container>
				{icon &&
					<Icon>
						{icon}
					</Icon>
				}
				<CustomInput {...rest}/>
			</Container>
		</>
	)
}