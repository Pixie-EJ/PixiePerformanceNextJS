import { CustomInput, TitleInput, CustomSelect } from "./styles"

export default function PixieInput(props) {
    if (props.type === 'select') {
        return (
            <>
                <TitleInput>{props.title}</TitleInput>
                <CustomSelect>
                    <option value='' disabled>{props.placeholder}</option>
                </CustomSelect>
            </>
        )
    }
    return (
        <>
            <TitleInput>{props.title}</TitleInput>
            <CustomInput placeholder={props.placeholder}/>
        </>
    )
}