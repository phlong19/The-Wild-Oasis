import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter / sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
      <Button onClick={() => setShow((show) => !show)}>open</Button>

      {show && <CreateCabinForm />}
    </>
  );
}

export default Cabins;
