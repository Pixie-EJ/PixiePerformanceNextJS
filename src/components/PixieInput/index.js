import { CustomInput, TitleInput, CustomSelect } from "./styles"

export default function PixieInput(props) {
    return (
        <div>
            <TitleInput>{props.inputTitle}</TitleInput>
            <CustomInput placeholder={props.placeholder}/>
        </div>
    )
}