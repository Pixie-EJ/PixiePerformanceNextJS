import CardRow from "@components/CardRow";
import SideNavbar from "@components/SideNavbar";
import TopNavbar from "@components/TopNavbar";
import { DataGrid } from "@mui/x-data-grid";
import { ContentContainer, HomeContainer, RightContainer, TableContainer } from "@styles/home";
// TODO dar uma olhada nesses estilos de home que estão sendo usado em alguns componentes

export default function Home() {
  const columns = [
    { field: "name", headerName: "Nome", width: 300 },
    { field: "jobTitle", headerName: "Cargo", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "active", headerName: "Ativo", width: 90 },
];

  const rows = [
    { id: 1, name: "Eduardo Saito", jobTitle: "Dev Front-end Júnior", email: 'contatopixieej@gmail.com', active: 'SIM' },
    { id: 2, name: "Eduardo Saito", jobTitle: "Dev Front-end Júnior", email: 'contatopixieej@gmail.com', active: 'SIM' },
    { id: 3, name: "Eduardo Saito", jobTitle: "Dev Front-end Júnior", email: 'contatopixieej@gmail.com', active: 'SIM' },
  ];

  return (
    <HomeContainer>
      <SideNavbar />
      <RightContainer>
        <TopNavbar title="Membros" buttonText="Cadastrar membro" />
        <ContentContainer>
          <TableContainer>
            <CardRow />
            <DataGrid rows={rows} columns={columns} />
          </TableContainer>
        </ContentContainer>
      </RightContainer>
    </HomeContainer>
  );
}
