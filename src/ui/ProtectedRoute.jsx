import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "../ui/Spinner";

import { useUser } from "../features/authentication/useUser";

const FullPage = styled.div`
  display: flex;
  height: 100vh;
  background-color: var(--color-grey-50);
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // load user
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  // redirect login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //   render app if true
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
