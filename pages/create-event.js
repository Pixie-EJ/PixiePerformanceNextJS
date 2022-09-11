import { EventContainer } from "../src/styles/create-event";
import { RightContainer } from "../src/styles/create-event";
import SideNavbar from "../src/components/SideNavbar";
import PixieInput from "../src/components/PixieInput";
import TopNavbar from "../src/components/TopNavbar";

export default function CreateEvent() {
   return (
      <EventContainer>
         <SideNavbar />
         <RightContainer>
            <TopNavbar title="Cadastrar evento" />
            <PixieInput />
         </RightContainer>
         
       </EventContainer>
   );
}
