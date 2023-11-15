import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const Container = styled.div`
  padding: 20px;
  background-color: orangered;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Heading>The Wild Oasis</Heading>
        <Heading as="h2">Input</Heading>
        <Input placeholder="he" type="number" />
        <Heading as="h3">Button</Heading>
        <Button>check</Button>
        <Button onClick={() => alert("check")}>check</Button>
      </Container>
    </>
  );
}

export default App;
