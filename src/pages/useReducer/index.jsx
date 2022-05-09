import { useEffect, useReducer, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import Box from "./Box";

const UseReducerHook = () => {
  const reducer = (currentState, action) => {
    switch (action.type) {
      case "add":
        currentState++;
        break;
      case "sub":
        currentState--;
        break;
      case "reset":
        currentState = 0;
        break;
    }
    return currentState;
  };

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{state}</h1>
      <Row>
        <Col sm={6}>
          <Button block onClick={() => dispatch({ type: "add" })}>
            +
          </Button>
        </Col>
        <Col sm={6}>
          <Button block onClick={() => dispatch({ type: "reset" })}>
            -
          </Button>
        </Col>
      </Row>

      {/* <Box value={value} setValue={setValue} /> */}
    </>
  );
};

export default UseReducerHook;
