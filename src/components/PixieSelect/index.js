import { TitleInput } from "../PixieInput/styles";
import { CustomSelect } from "./styles";

export default function PixieSelect(props) {
   return (
      <>
         <TitleInput>{props.inputTitle}</TitleInput>
         <CustomSelect>
            <option disabled selected>Selecione uma categoria</option>
            <option>Opcao 1</option>
            <option>Opcao 2</option>
         </CustomSelect>
      </>
   );
}
