import { useContext } from "react";
import { Input } from "reactstrap";
import { BaharContext } from ".";

const Baby = (props) => {
  // const testContext = useContext(BaharContext);
  const { a, b, setFirstName } = useContext(BaharContext);

  return (
    <>
      {/* {testContext.a} */}
      {a}

      <Input onChange={(e) => setFirstName(e.target.value)} />
    </>
  );
};

export default Baby;
