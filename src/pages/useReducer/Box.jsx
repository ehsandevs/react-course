const { Row, Col, Input } = require("reactstrap");

const Box = ({ value, setValue }) => {
  return (
    <Row>
      <Col sm={12}>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </Col>
    </Row>
  );
};

export default Box;
