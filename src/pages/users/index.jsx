import { Button } from "reactstrap";
import styles from "./styles.module.css";

const Users = () => {
  return (
    <h1>
      Users ...
      <Button className={styles.bahar} color="success">
        Add users
      </Button>
    </h1>
  );
};

export default Users;
