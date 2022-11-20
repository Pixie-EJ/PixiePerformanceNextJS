import { useEffect } from "react";
import CardRow from "../src/components/CardRow";
import SideNavbar from "../src/components/SideNavbar";
import { Menu } from "../src/components/Menu";
import TopNavbar from "../src/components/TopNavbar";
import {
  ContentContainer,
  TableContainer,
  HomeContainer,
  RightContainer,
} from "../src/styles/home";
import { DataGrid } from "@mui/x-data-grid";
import PixieInput from "../src/components/PixieInput";
import { Login } from "@pages/signin/Login";
import { ThemeProvider } from 'styled-components'
import { theme } from '@theme/index'

export default function Home() {
  // const columns = [
  //   { field: "name", headerName: "Nome", width: 300 },
  //   { field: "points", headerName: "Pontos", width: 150 },
  // ];

  // const rows = [
  //   { id: 1, name: "Eduardo Saito", points: "100" },
  //   { id: 2, name: "Eduardo Saito", points: "100" },
  //   { id: 3, name: "Eduardo Saito", points: "100" },
  // ];

  // return (
  //   <HomeContainer>
  //     <Menu />
  //     <RightContainer>
  //       <TopNavbar title="Overview" buttonText="Lançar pontos" />
  //       <ContentContainer>
  //         <TableContainer>
  //           <CardRow />
  //           <DataGrid rows={rows} columns={columns} />
  //         </TableContainer>
  //       </ContentContainer>
  //     </RightContainer>
  //   </HomeContainer>
  // );
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  )
}
