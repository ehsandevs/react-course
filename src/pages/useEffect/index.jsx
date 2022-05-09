import { useEffect, useState } from "react";
import { Button, Input, Row, Col } from "reactstrap";

const UseEffectHook = () => {
  const [nameField, setName] = useState(0);

  /**
   * useEffects takes two parameters:  function, dependency array
   */
  useEffect(() => {
    console.log("hello there");
  }, [nameField]);

  useEffect(() => {
    
    setName('bahar');
    /**
     * we are changing nameField to bahar
     * but in console log we still don't get bahar, (we get previous value)
     */
    console.log(nameField);


  },[])

  return (
    <Row>
      <Col sm={10}>
        <Input value={nameField} readOnly />
      </Col>
      <Col sm={2}>
        <Button onClick={(e) => setName(nameField + 1)} block>
          Add
        </Button>
      </Col>
    </Row>
  );
};

export default UseEffectHook;
