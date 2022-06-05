import { useState } from "react";
import { Button, Col, Input, Row, Spinner } from "reactstrap";
import useFetch from "../../hooks/useFetch";

const CustomHook = () => {
  const [url, setUrl] = useState(null);

  // const { fetch, result } = useFetch(url);
  const { fetch, result, loading } = useFetch(url);

  const handleFetch = () => {
    fetch();
  };

  return (
    <Row>
      <Col sm={10}>
        <Input
          placeholder="URL ..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </Col>
      <Col sm={2}>
        <Button color="success" block onClick={handleFetch}>
          Fetch
        </Button>
      </Col>
      <Col sm={12} className="mt-2">
        {loading ? <Spinner /> : <pre>{JSON.stringify(result, null, 2)}</pre>}
      </Col>
    </Row>
  );
};

export default CustomHook;
