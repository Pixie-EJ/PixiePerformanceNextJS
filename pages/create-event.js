import { EventContainer } from "../src/styles/create-event";
import { RightContainer } from "../src/styles/create-event";
import SideNavbar from "../src/components/SideNavbar";
import TopNavbar from "../src/components/TopNavbar";
import PixieInput from "../src/components/PixieInput";
import PixieButton from "../src/components/PixieButton";
import PixieSelect from "../src/components/PixieSelect";
import { ContentContainer } from "../src/styles/home";


export default function CreateEvent() {
   return (
      <EventContainer>
         <SideNavbar />
         <RightContainer>
            <TopNavbar title="Cadastrar evento" />
            <ContentContainer>
               <PixieInput inputTitle="Nome" placeholder="Nome do evento" />
               <PixieSelect inputTitle="Categoria"/>
            </ContentContainer>
            <ContentContainer>   
               <PixieInput inputTitle="Data inicial" placeholder="00/00/0000" />
               <PixieInput inputTitle="Hora inicial" placeholder="00:00" />
            </ContentContainer>
            <ContentContainer>
               <PixieInput inputTitle="Data final" placeholder="00/00/0000" />
               <PixieInput inputTitle="Hora inicial" placeholder="00:00" />
            </ContentContainer>

            <div>
               <PixieButton text="Concluído" color="lightgreen"/>
            </div>
         </RightContainer>
      </EventContainer>
   );
}
