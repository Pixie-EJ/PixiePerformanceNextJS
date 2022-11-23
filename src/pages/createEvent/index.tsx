
import PixieInput from "@components/PixieInput";
import SideNavbar from "@components/SideNavbar";
import TopNavbar from "@components/TopNavbar";
import { RightContainer } from "../../styles";
import { EventContainer } from "./styles";

export default function CreateEvent() {
   return (
      <EventContainer>
         <SideNavbar />
         <RightContainer>
            <TopNavbar title="Cadastrar evento" buttonText=""/>
            <PixieInput />
         </RightContainer>
       </EventContainer>
   );
}
