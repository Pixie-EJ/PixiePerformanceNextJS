

import CardRow from "@components/CardRow";
import { Menu } from "@components/Menu";
import TopNavbar from "@components/TopNavbar";
import { DataGrid } from "@mui/x-data-grid";
import { ContentContainer, HomeContainer, RightContainer, TableContainer } from "./styles";

interface columnsProps {
  field: string,
  headerName: string,
  width: number
}

interface rowProps {
  id: number,
  name: string,
  points: number
}

export default function Home() {
  const columns: columnsProps[] = [
    { field: "name", headerName: "Nome", width: 300 },
    { field: "points", headerName: "Pontos", width: 150 },
  ];

  const rows: rowProps[] = [
    { id: 1, name: "Eduardo Saito", points: 100 },
    { id: 2, name: "Eduardo Saito", points: 100 },
    { id: 3, name: "Eduardo Saito", points: 100 },
  ];

  return (
    <HomeContainer>
      <Menu />
      <RightContainer>
        <TopNavbar title="Overview" buttonText="Lançar pontos" />
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
