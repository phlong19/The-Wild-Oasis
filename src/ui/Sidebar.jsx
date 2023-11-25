import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { useUser } from "../features/authentication/useUser";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const adminEmail = import.meta.env.VITE_SECRET_EMAIL;

function Sidebar() {
  const { user } = useUser();

  return (
    <StyledSidebar>
      <Logo />
      <MainNav />

      {user?.email === adminEmail && <Uploader />}
    </StyledSidebar>
  );
}

export default Sidebar;
