import { CustomInput, TitleInput, CustomSelect } from "./styles"

export default function PixieInput(props) {
    if (props.type === 'select') {
        return (
            <>
                <TitleInput>Evento</TitleInput>
                <CustomSelect>
                    <option value='' disabled>{props.placeholder}</option>
                    <option>Gustavo</option>
                    <option>Lucas</option>
                </CustomSelect>
            </>
        )
    }
    return (
        <>
            <TitleInput>Evento</TitleInput>
            <CustomInput placeholder={props.placeholder}/>
        </>
    )
}