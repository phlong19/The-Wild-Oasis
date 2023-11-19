import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CabinOperation() {
  return (
    <TableOperations>
      <Filter
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
        filterName="discount"
      />
    </TableOperations>
  );
}

export default CabinOperation;
