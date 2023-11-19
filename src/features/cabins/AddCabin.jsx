import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="form">
          <CreateCabinForm />
        </Modal.Window>

        {/* example of re-usability and flexibility of compound component */}
        {/* <Modal.Open opens="table">
        <Button>Open table</Button>
        </Modal.Open>
        <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
      </Modal>
    </div>
  );
}

export default AddCabin;
