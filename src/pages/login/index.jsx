import axios from "axios";
import { useState } from "react";
import { Button, Col, Input, Label, Row } from "reactstrap";

const Login = () => {
  const [user, setUSer] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.withCredentials = true;

  const handleLogin = () => {
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then((res) => {
      axios
        .post("http://localhost:8000/api/login", { email, password })
        .then((res) => {
          // console.log(res.data.data.token);

          localStorage.setItem("token", res.data.data.token);
        })
        .catch((err) => {});
    });
    //
    //
    //
    //
  };

  localStorage.removeItem('token');

  const getUser = () => {
    axios
      .get("http://localhost:8000/api/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((user) => {
        setUSer(user);
      })
      .catch((err) => {
        setUSer(err.response.data);
      });
  };

  return (
    <>
      <Row>
        <Label>ایمیل</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <Label>رمز</Label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin} block className="mt-3">
          ورود
        </Button>
      </Row>
      <hr />
      <Row>
        <Col sm={6}>
          <Button onClick={getUser} color="warning" block>
            گرفتن کاربر
          </Button>
        </Col>
        <Col sm={6}>
          <pre style={{ textAlign: "left", direction: "ltr" }}>
            {JSON.stringify(user, null, 2)}
          </pre>
        </Col>
      </Row>
    </>
  );
};

export default Login;
