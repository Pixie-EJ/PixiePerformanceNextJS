import { InputHTMLAttributes } from 'react'
import { CustomInput, TitleInput, CustomSelect } from "./styles"

type Props = InputHTMLAttributes<HTMLInputElement> & {
    type?: string;
    title: string;
}

// TODO refatorar isso com a pixie
export default function PixieInput({ title, type, placeholder }: Props) {
    if (type === 'select') {
        return (
            <>
                <TitleInput>{title}</TitleInput>
                <CustomSelect>
                    <option value='' disabled>{placeholder}</option>
                    <option>Gustavo</option>
                    <option>Lucas</option>
                </CustomSelect>
            </>
        )
    }
    return (
        <>
            <TitleInput>{title}</TitleInput>
            <CustomInput placeholder={placeholder}/>
        </>
    )
}