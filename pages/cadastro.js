import CardRow from "../src/components/CardRow";
import SideNavbar from "../src/components/SideNavbar";
import TopNavbar from "../src/components/TopNavbar";
import {
  ContentContainer,
  TableContainer,
  HomeContainer,
  RightContainer,
  FormContainer,
  InputContainer,
} from "../src/styles/cadastro";
import { DataGrid } from "@mui/x-data-grid";
import PixieInput from "../src/components/PixieInput";

export default function Home() {
  const columns = [
    { field: "name", headerName: "Nome", width: 300 },
    { field: "points", headerName: "Pontos", width: 150 },
  ];

  const rows = [
    { id: 1, name: "Eduardo Saito", points: "100" },
    { id: 2, name: "Eduardo Saito", points: "100" },
    { id: 3, name: "Eduardo Saito", points: "100" },
  ];

  return (
    <HomeContainer>
      <SideNavbar />
      <RightContainer>
        <TopNavbar title="Cadastrar Membro" buttonText="Concluído" />
        <ContentContainer>
            <FormContainer>
            <form action="/send-data-here" method="post">
            <label for="first">Nome</label>
            <InputContainer><input type="text" id="nome" name="nome" /></InputContainer>            
            <label for="last">Email</label>
            <InputContainer><input type="email" id="email" name="email" /></InputContainer>
            <label for="last">Cargo</label>
            <InputContainer><input type="text" id="cargo" name="cargo" /></InputContainer>
            <label for="last">Ativo</label>
            <InputContainer><input type="checkbox" id="ativo" name="ativo" /></InputContainer>
            <button type="submit">Concluido</button>
           </form></FormContainer>          
        </ContentContainer>
      </RightContainer>
    </HomeContainer>
  );
}