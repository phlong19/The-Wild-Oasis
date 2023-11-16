import { Outlet } from "react-router-dom";
import Header from "./Header";
import Siderbar from "./Sidebar";
import styled from "styled-components";

const Main = styled.main`
  padding: 4rem 4.5rem 6.4rem;
  background-color: green;
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <Siderbar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
